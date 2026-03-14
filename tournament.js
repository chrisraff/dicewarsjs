// tournament.js - Headless AI tournament/benchmark simulation

// AI registry - populated after page load
var AI_REGISTRY = [];

window.addEventListener('load', function () {
    // Collect all available AI functions
    var candidates = [
        { name: 'ai_default',   fn: typeof ai_default   !== 'undefined' ? ai_default   : null },
        { name: 'ai_defensive', fn: typeof ai_defensive !== 'undefined' ? ai_defensive : null },
        { name: 'ai_example',   fn: typeof ai_example   !== 'undefined' ? ai_example   : null },
        { name: 'ai_strategic', fn: typeof ai_strategic !== 'undefined' ? ai_strategic : null },
        { name: 'ai_utility',   fn: typeof ai_utility   !== 'undefined' ? ai_utility   : null }
    ];
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].fn) AI_REGISTRY.push(candidates[i]);
    }
    Tournament._buildOverlay();
});

var Tournament = {
    running: false,
    gamesTotal: 100,
    gamesComplete: 0,
    numPlayers: 7,
    playerAIs: [],   // index into AI_REGISTRY per slot
    slotWins: [],    // wins[slot]
    aiWins: [],      // wins[ai registry index]
    draws: 0,
    _batchSize: 20,
    _timeoutHandle: null,

    // ----------------------------------------------------------------
    // Public API
    // ----------------------------------------------------------------

    show: function () {
        this._refreshPlayerConfig();
        document.getElementById('tournament-overlay').style.display = 'flex';
    },

    hide: function () {
        this.stop();
        document.getElementById('tournament-overlay').style.display = 'none';
    },

    start: function () {
        if (this.running) return;

        this.gamesTotal   = Math.max(1, parseInt(document.getElementById('t-num-games').value) || 100);
        this.numPlayers   = parseInt(document.getElementById('t-num-players').value) || 7;
        this.playerAIs    = [];
        for (var i = 0; i < this.numPlayers; i++) {
            var sel = document.getElementById('t-ai-slot-' + i);
            this.playerAIs.push(sel ? parseInt(sel.value) : 0);
        }

        this.gamesComplete = 0;
        this.draws         = 0;
        this.slotWins      = [];
        this.aiWins        = [];
        for (var i = 0; i < 8; i++) this.slotWins.push(0);
        for (var i = 0; i < AI_REGISTRY.length; i++) this.aiWins.push(0);

        this.running = true;
        document.getElementById('t-run-btn').disabled  = true;
        document.getElementById('t-stop-btn').disabled = false;
        this._updateUI();
        this._scheduleBatch();
    },

    stop: function () {
        this.running = false;
        if (this._timeoutHandle) {
            clearTimeout(this._timeoutHandle);
            this._timeoutHandle = null;
        }
        document.getElementById('t-run-btn').disabled  = false;
        document.getElementById('t-stop-btn').disabled = true;
        this._updateUI();
    },

    // ----------------------------------------------------------------
    // Simulation core
    // ----------------------------------------------------------------

    _scheduleBatch: function () {
        var self = this;
        this._timeoutHandle = setTimeout(function () { self._runBatch(); }, 0);
    },

    _runBatch: function () {
        if (!this.running) return;

        var end = Math.min(this.gamesComplete + this._batchSize, this.gamesTotal);
        while (this.gamesComplete < end) {
            var winner = this._runOneGame();
            if (winner >= 0 && winner < this.numPlayers) {
                this.slotWins[winner]++;
                var aiIdx = this.playerAIs[winner];
                this.aiWins[aiIdx]++;
            } else {
                this.draws++;
            }
            this.gamesComplete++;
        }

        this._updateUI();

        if (this.gamesComplete < this.gamesTotal && this.running) {
            this._scheduleBatch();
        } else {
            this.running = false;
            document.getElementById('t-run-btn').disabled  = false;
            document.getElementById('t-stop-btn').disabled = true;
            this._updateUI();
        }
    },

    _runOneGame: function () {
        var g = new Game();
        g.pmax = this.numPlayers;
        for (var i = 0; i < this.numPlayers; i++) {
            g.ai[i] = AI_REGISTRY[this.playerAIs[i]].fn;
        }

        g.make_map();
        g.start_game();

        // Safety limit: AREA_MAX=32 areas, 8 dice max → worst case ~30 attacks per
        // turn × ~200 turns per game × 7 players = ~42000 half-moves. 20000 is
        // more than sufficient for typical games and prevents infinite-loop hangs.
        var maxMoves = 20000;
        for (var move = 0; move < maxMoves; move++) {
            // Check for game over
            var alive = 0, lastAlive = -1;
            for (var i = 0; i < g.pmax; i++) {
                if (g.player[i].area_tc > 0) { alive++; lastAlive = i; }
            }
            if (alive <= 1) return lastAlive;

            var ret = g.com_thinking();
            if (ret !== 0) {
                this._simulateBattle(g);
            } else {
                this._simulateSupply(g);
                this._advancePlayer(g);
            }
        }
        return -1; // timeout / draw
    },

    _simulateBattle: function (g) {
        var sum    = [0, 0];
        var areas  = [g.area_from, g.area_to];
        for (var i = 0; i < 2; i++) {
            var dmax = g.adat[areas[i]].dice;
            for (var j = 0; j < dmax; j++) {
                sum[i] += 1 + Math.floor(Math.random() * 6);
            }
        }
        var arm0   = g.adat[g.area_from].arm;
        var arm1   = g.adat[g.area_to].arm;
        var defeat = (sum[0] > sum[1]) ? 1 : 0;
        if (defeat) {
            g.adat[g.area_to].dice   = g.adat[g.area_from].dice - 1;
            g.adat[g.area_from].dice = 1;
            g.adat[g.area_to].arm    = arm0;
            g.set_area_tc(arm0);
            g.set_area_tc(arm1);
        } else {
            g.adat[g.area_from].dice = 1;
        }
        g.set_his(g.area_from, g.area_to, defeat);
    },

    _simulateSupply: function (g) {
        var pn = g.jun[g.ban];
        g.set_area_tc(pn);
        g.player[pn].stock += g.player[pn].area_tc;
        if (g.player[pn].stock > g.STOCK_MAX) g.player[pn].stock = g.STOCK_MAX;

        while (g.player[pn].stock > 0) {
            var list = [];
            for (var i = 1; i < g.AREA_MAX; i++) {
                if (g.adat[i].size === 0) continue;
                if (g.adat[i].arm  !== pn) continue;
                if (g.adat[i].dice >= 8)   continue;
                list.push(i);
            }
            if (list.length === 0) break;
            var an = list[Math.floor(Math.random() * list.length)];
            g.adat[an].dice++;
            g.player[pn].stock--;
        }
    },

    _advancePlayer: function (g) {
        for (var i = 0; i < g.pmax; i++) {
            g.ban++;
            if (g.ban >= g.pmax) g.ban = 0;
            if (g.player[g.jun[g.ban]].area_tc > 0) break;
        }
    },

    // ----------------------------------------------------------------
    // HTML UI helpers
    // ----------------------------------------------------------------

    _buildOverlay: function () {
        var overlay = document.getElementById('tournament-overlay');
        if (!overlay) return;

        // Build player-count options
        var pmaxOpts = '';
        for (var n = 2; n <= 7; n++) {
            pmaxOpts += '<option value="' + n + '"' + (n === 7 ? ' selected' : '') + '>' + n + '</option>';
        }

        overlay.innerHTML = [
            '<div id="t-panel">',
            '  <h2 style="margin:0 0 16px;color:#ffcc00;font-size:1.8em;letter-spacing:2px;">TOURNAMENT</h2>',

            '  <div class="t-row">',
            '    <label for="t-num-games">Games:</label>',
            '    <input id="t-num-games" type="number" value="100" min="1" max="10000">',
            '    <label for="t-num-players">Players:</label>',
            '    <select id="t-num-players" onchange="Tournament._refreshPlayerConfig()">' + pmaxOpts + '</select>',
            '  </div>',

            '  <div id="t-player-config" class="t-player-config"></div>',

            '  <div class="t-row" style="gap:8px;margin-top:8px;">',
            '    <button id="t-run-btn"  class="t-btn t-btn-run"  onclick="Tournament.start()">RUN</button>',
            '    <button id="t-stop-btn" class="t-btn t-btn-stop" onclick="Tournament.stop()" disabled>STOP</button>',
            '    <button class="t-btn t-btn-close" onclick="Tournament.hide()">CLOSE</button>',
            '  </div>',

            '  <div id="t-progress-text" style="margin:10px 0 4px;font-size:0.9em;color:#ccc;">Ready</div>',
            '  <div class="t-progress-track"><div id="t-progress-fill" class="t-progress-fill"></div></div>',

            '  <div id="t-results" style="display:none;margin-top:16px;">',
            '    <h3 style="margin:0 0 8px;color:#ffcc00;">Results by AI</h3>',
            '    <table class="t-table">',
            '      <thead><tr><th>AI</th><th>Wins</th><th>Win %</th></tr></thead>',
            '      <tbody id="t-ai-tbody"></tbody>',
            '    </table>',
            '    <h3 style="margin:12px 0 8px;color:#ffcc00;">Results by Player Slot</h3>',
            '    <table class="t-table">',
            '      <thead><tr><th>Slot</th><th>AI</th><th>Wins</th><th>Win %</th></tr></thead>',
            '      <tbody id="t-slot-tbody"></tbody>',
            '    </table>',
            '  </div>',
            '</div>'
        ].join('\n');

        this._refreshPlayerConfig();
    },

    _refreshPlayerConfig: function () {
        var numPlayers = parseInt(document.getElementById('t-num-players').value) || 7;
        var container  = document.getElementById('t-player-config');
        if (!container) return;
        container.innerHTML = '';

        // Default AI assignments matching game.js defaults
        var defaults = {
            0: 'ai_example',
            1: 'ai_defensive',
            2: 'ai_defensive',
            3: 'ai_default',
            4: 'ai_default',
            5: 'ai_default',
            6: 'ai_default'
        };

        for (var i = 0; i < numPlayers; i++) {
            var row = document.createElement('div');
            row.className = 't-slot-row';

            var lbl = document.createElement('span');
            lbl.textContent = 'P' + (i + 1) + ':';
            row.appendChild(lbl);

            var sel = document.createElement('select');
            sel.id  = 't-ai-slot-' + i;
            for (var j = 0; j < AI_REGISTRY.length; j++) {
                var opt       = document.createElement('option');
                opt.value     = j;
                opt.textContent = AI_REGISTRY[j].name;
                sel.appendChild(opt);
            }
            // Apply default
            var defName = defaults[i] || 'ai_default';
            for (var k = 0; k < sel.options.length; k++) {
                if (sel.options[k].textContent === defName) {
                    sel.selectedIndex = k;
                    break;
                }
            }
            row.appendChild(sel);
            container.appendChild(row);
        }
    },

    _updateUI: function () {
        var pct  = this.gamesTotal > 0 ? (this.gamesComplete / this.gamesTotal * 100) : 0;
        document.getElementById('t-progress-fill').style.width = pct.toFixed(1) + '%';
        document.getElementById('t-progress-text').textContent =
            this.gamesComplete + ' / ' + this.gamesTotal + ' games' +
            (this.gamesComplete > 0 && this.draws > 0 ? '  (' + this.draws + ' draws)' : '');

        if (this.gamesComplete === 0) return;

        document.getElementById('t-results').style.display = 'block';

        // Per-AI table (aggregate wins across all slots using that AI)
        var aiStats = {};
        for (var i = 0; i < AI_REGISTRY.length; i++) {
            aiStats[AI_REGISTRY[i].name] = { wins: 0, slots: 0 };
        }
        for (var s = 0; s < this.numPlayers; s++) {
            var name = AI_REGISTRY[this.playerAIs[s]].name;
            aiStats[name].wins  += this.slotWins[s];
            aiStats[name].slots += 1;
        }

        var names = Object.keys(aiStats).filter(function (n) { return aiStats[n].slots > 0; });
        names.sort(function (a, b) { return aiStats[b].wins - aiStats[a].wins; });

        var aiRows = '';
        for (var n = 0; n < names.length; n++) {
            var nm     = names[n];
            var st     = aiStats[nm];
            var winPct = (st.wins / this.gamesComplete * 100).toFixed(1);
            aiRows += '<tr><td>' + nm + '</td><td>' + st.wins + '</td><td>' + winPct + '%</td></tr>';
        }
        document.getElementById('t-ai-tbody').innerHTML = aiRows;

        // Per-slot table
        var slotRows = '';
        for (var s = 0; s < this.numPlayers; s++) {
            var aiName = AI_REGISTRY[this.playerAIs[s]].name;
            var wins   = this.slotWins[s];
            var pct2   = (wins / this.gamesComplete * 100).toFixed(1);
            slotRows += '<tr><td>P' + (s + 1) + '</td><td>' + aiName + '</td><td>' + wins + '</td><td>' + pct2 + '%</td></tr>';
        }
        document.getElementById('t-slot-tbody').innerHTML = slotRows;
    }
};

function showTournament() {
    Tournament.show();
}
