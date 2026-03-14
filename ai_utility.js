// ai_utility.js
// Shared utility library for Dice Wars AI.
// Provides win-probability tables, connected-component analysis,
// and board-state scoring so multiple AI strategies can reuse the
// same graph-theory and virtual-board machinery.

var BoardUtility = (function () {

    // ---------------------------------------------------------------
    // Win-probability precomputation
    // ---------------------------------------------------------------

    // Precompute sum distributions iteratively for 0..8 dice.
    // dists[n][k] = P(sum of n d6 == k).  Built bottom-up so each level
    // is computed exactly once (no redundant recursive calls).
    var dists = [];
    (function () {
        var n, s, face, prev, d;
        dists[0] = [1.0];   // 0 dice: sum is always 0
        for (n = 1; n <= 8; n++) {
            prev = dists[n - 1];
            d = [];
            for (s = 0; s <= 6 * n; s++) d[s] = 0.0;
            for (s = 0; s < prev.length; s++) {
                if (prev[s] === 0) continue;
                for (face = 1; face <= 6; face++) {
                    d[s + face] += prev[s] / 6.0;
                }
            }
            dists[n] = d;
        }
    }());

    // WIN_PROB[a][d] = P(sum of a d6 > sum of d d6)
    // a = number of attack dice rolled  (attack_area.dice - 1), range 0-7
    // d = number of defend dice rolled  (defend_area.dice),     range 1-8
    var WIN_PROB = [];
    (function () {
        var a, d, a_dist, d_dist, p, as, ds;
        for (a = 0; a <= 7; a++) {
            WIN_PROB[a] = [];
            a_dist = dists[a];
            for (d = 1; d <= 8; d++) {
                d_dist = dists[d];
                p = 0.0;
                for (as = 0; as < a_dist.length; as++) {
                    if (a_dist[as] === 0) continue;
                    for (ds = 0; ds < d_dist.length; ds++) {
                        if (d_dist[ds] > 0 && as > ds) {
                            p += a_dist[as] * d_dist[ds];
                        }
                    }
                }
                WIN_PROB[a][d] = p;
            }
        }
    }());

    // ---------------------------------------------------------------
    // Graph / board analysis helpers (private)
    // ---------------------------------------------------------------

    // Size of the largest connected component owned by player pn.
    // Works on any virtual board described by (arm, size, join) arrays,
    // so it can be used on simulated post-attack board states without
    // touching the real game object.
    function largest_component(arm, size, join, pn, area_max) {
        var visited = [];
        var i;
        for (i = 0; i < area_max; i++) visited[i] = false;

        var max_sz = 0;
        var start, curr, nb, stack, sz;
        for (start = 1; start < area_max; start++) {
            if (!size[start] || arm[start] !== pn || visited[start]) continue;
            stack = [start];
            sz = 0;
            while (stack.length > 0) {
                curr = stack.pop();
                if (visited[curr]) continue;
                visited[curr] = true;
                sz++;
                for (nb = 1; nb < area_max; nb++) {
                    if (!visited[nb] && size[nb] && arm[nb] === pn && join[curr][nb]) {
                        stack.push(nb);
                    }
                }
            }
            if (sz > max_sz) max_sz = sz;
        }
        return max_sz;
    }

    // Total dice in areas that border at least one enemy area.
    // High value = dice are available / mobile.
    function frontier_dice(arm, dice, size, join, pn, area_max) {
        var total = 0;
        var i, j;
        for (i = 1; i < area_max; i++) {
            if (!size[i] || arm[i] !== pn) continue;
            for (j = 1; j < area_max; j++) {
                if (size[j] && arm[j] !== pn && join[i][j]) {
                    total += dice[i];
                    break;
                }
            }
        }
        return total;
    }

    // Total dice belonging to opponents (>= threshold) that are
    // adjacent to at least one of pn's areas.
    // High value = pn is exposed to dangerous neighbours.
    function exposed_opponent_dice(arm, dice, size, join, pn, area_max, threshold) {
        var total = 0;
        var i, j;
        for (i = 1; i < area_max; i++) {
            if (!size[i] || arm[i] === pn || dice[i] < threshold) continue;
            for (j = 1; j < area_max; j++) {
                if (size[j] && arm[j] === pn && join[i][j]) {
                    total += dice[i];
                    break;
                }
            }
        }
        return total;
    }

    // Build local size and join snapshots from the game object.
    // size may change if areas are removed (doesn't happen mid-turn), but
    // join (area adjacency) is fixed for the entire game, so storing a
    // reference rather than a copy is safe and avoids unnecessary allocation.
    function make_snapshots(game) {
        var area_max = game.AREA_MAX;
        var size = [], join = [], i;
        for (i = 0; i < area_max; i++) {
            size[i] = game.adat[i].size;
            join[i] = game.adat[i].join;   // reference is fine; join doesn't change
        }
        return { size: size, join: join };
    }

    // ---------------------------------------------------------------
    // Public API
    // ---------------------------------------------------------------

    return {

        /**
         * Return the probability that the attacker wins a battle.
         *
         * The attacker rolls (attack_dice - 1) dice; the defender rolls
         * defend_dice dice.  Winner is determined by higher total.
         *
         * @param {number} attack_dice - dice count of the attacking area
         * @param {number} defend_dice - dice count of the defending area
         * @returns {number} probability in [0, 1]
         */
        win_prob: function (attack_dice, defend_dice) {
            var a = Math.min(Math.max(attack_dice - 1, 0), 7);
            var d = Math.min(Math.max(defend_dice, 1), 8);
            return WIN_PROB[a][d];
        },

        /**
         * Score a board state from player pn's perspective.
         * Higher is better for pn.
         *
         * Factors:
         *   + my largest connected region   (drives dice income)
         *   - largest opponent connected region (their income threat)
         *   + my frontier dice              (dice that can actually attack)
         *   - exposed opponent strong dice  (big armies threatening my border)
         *
         * @param {Object} game  - game object (provides join/size; not mutated)
         * @param {Array}  arm   - arm[i]  = owner of area i
         * @param {Array}  dice  - dice[i] = dice count of area i
         * @param {number} pn    - the player whose perspective we score
         * @returns {number} utility score
         */
        board_score: function (game, arm, dice, pn) {
            var area_max = game.AREA_MAX;
            var snap = make_snapshots(game);
            var size = snap.size, join = snap.join;
            var p, i, opp_conn, has_area;

            // Factor 1: my largest connected component
            var my_conn = largest_component(arm, size, join, pn, area_max);

            // Factor 2: largest connected component among all opponents
            var opp_conn_max = 0;
            for (p = 0; p < 8; p++) {
                if (p === pn) continue;
                has_area = false;
                for (i = 1; i < area_max; i++) {
                    if (size[i] && arm[i] === p) { has_area = true; break; }
                }
                if (!has_area) continue;
                opp_conn = largest_component(arm, size, join, p, area_max);
                if (opp_conn > opp_conn_max) opp_conn_max = opp_conn;
            }

            // Factor 3: my frontier dice (available / mobile)
            var my_frontier = frontier_dice(arm, dice, size, join, pn, area_max);

            // Factor 4: dangerous opponent dice on my border
            var opp_exposed = exposed_opponent_dice(arm, dice, size, join, pn, area_max, 5);

            return (
                3.0 * my_conn
                - 2.0 * opp_conn_max
                + 0.4 * my_frontier
                - 0.5 * opp_exposed
            );
        },

        /**
         * Return the largest connected component size for player pn given
         * an arm array.  Useful for computing per-turn dice income.
         *
         * @param {Object} game - game object
         * @param {Array}  arm  - arm[i] = owner of area i
         * @param {number} pn   - player ID
         * @returns {number} size of largest connected component
         */
        get_largest_component: function (game, arm, pn) {
            var snap = make_snapshots(game);
            return largest_component(arm, snap.size, snap.join, pn, game.AREA_MAX);
        }

    };
}());
