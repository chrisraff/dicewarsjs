// ai_strategic.js
// Utility-based strategic AI for Dice Wars.
// Depends on BoardUtility (ai_utility.js).
//
// Strategy overview
// -----------------
// Each time the game asks for a move, this AI:
//   1. Snapshots the current ownership / dice state.
//   2. Evaluates the baseline board score for the current player.
//   3. Estimates an "income advantage bonus" - when my largest connected
//      region is bigger than the best opponent's, I gain dice faster, so
//      roughly 50/50 attacks are worth accepting.
//   4. For every legal attack, simulates the win outcome and the loss
//      outcome, then computes:
//          EV = p_win * score_win + (1 - p_win) * score_loss + income_bonus
//   5. Picks the attack with the highest EV, provided it exceeds the
//      baseline score (i.e. doing nothing).  If no attack clears the
//      bar, the AI ends its turn.

function ai_strategic(game) {
    var pn = game.get_pn();
    var area_max = game.AREA_MAX;
    var i;

    // ------------------------------------------------------------------
    // Snapshot current board state (arm + dice may change; join/size won't)
    // ------------------------------------------------------------------
    var arm  = new Array(area_max);
    var dice = new Array(area_max);
    for (i = 0; i < area_max; i++) {
        arm[i]  = game.adat[i].arm;
        dice[i] = game.adat[i].dice;
    }

    // ------------------------------------------------------------------
    // Baseline utility
    // ------------------------------------------------------------------
    var base_score = BoardUtility.board_score(game, arm, dice, pn);

    // ------------------------------------------------------------------
    // Income-advantage bonus
    // When my largest connected region outpaces all opponents', I can
    // afford marginal attacks because I will outgrow losses.
    // ------------------------------------------------------------------
    var my_conn = BoardUtility.get_largest_component(game, arm, pn);
    var opp_conn_max = 0, opp_conn, p;
    for (p = 0; p < 8; p++) {
        if (p === pn) continue;
        opp_conn = BoardUtility.get_largest_component(game, arm, p);
        if (opp_conn > opp_conn_max) opp_conn_max = opp_conn;
    }
    // income_bonus scales smoothly with how much my income exceeds theirs.
    // Using Math.max(opp_conn_max, 1) avoids division by zero; when all
    // opponents are eliminated there are no attacks left anyway, so the
    // exact bonus value is irrelevant in that edge case.
    var income_ratio = my_conn / Math.max(opp_conn_max, 1);
    var income_bonus = Math.max(0, income_ratio - 1.0) * 0.3;

    // ------------------------------------------------------------------
    // Enumerate all legal attacks and pick the best by expected value
    // ------------------------------------------------------------------
    var best_from = -1;
    var best_to   = -1;
    var best_ev   = base_score;   // must exceed baseline to be worth doing

    var from_id, to_id, p_win;
    var orig_arm_to, orig_dice_to, orig_dice_from;
    var score_win, score_loss, ev;

    for (from_id = 1; from_id < area_max; from_id++) {
        if (!game.adat[from_id].size)  continue;
        if (arm[from_id] !== pn)       continue;
        if (dice[from_id] <= 1)        continue;

        for (to_id = 1; to_id < area_max; to_id++) {
            if (!game.adat[to_id].size)           continue;
            if (arm[to_id] === pn)                continue;
            if (!game.adat[from_id].join[to_id])  continue;

            p_win = BoardUtility.win_prob(dice[from_id], dice[to_id]);

            // -- Simulate win: mutate in place, score, then restore ----------
            orig_arm_to    = arm[to_id];
            orig_dice_to   = dice[to_id];
            orig_dice_from = dice[from_id];

            arm[to_id]    = pn;
            dice[to_id]   = orig_dice_from - 1;
            dice[from_id] = 1;
            score_win = BoardUtility.board_score(game, arm, dice, pn);

            // Restore ownership and defender dice; from_id stays at 1 for
            // the loss simulation (attacker also ends up with 1 die on loss).
            arm[to_id]  = orig_arm_to;
            dice[to_id] = orig_dice_to;

            // -- Simulate loss: from_id already has 1 die; ownership unchanged
            score_loss = BoardUtility.board_score(game, arm, dice, pn);

            // Restore attacker's dice count for the next iteration
            dice[from_id] = orig_dice_from;

            // -- Expected value of this attack --------------------------------
            ev = p_win * score_win + (1.0 - p_win) * score_loss + income_bonus;

            if (ev > best_ev) {
                best_ev   = ev;
                best_from = from_id;
                best_to   = to_id;
            }
        }
    }

    // ------------------------------------------------------------------
    // End turn if no attack improves the expected board state
    // ------------------------------------------------------------------
    if (best_from === -1) return 0;

    game.area_from = best_from;
    game.area_to   = best_to;
    // Returning nothing (undefined) signals that the game should execute
    // this attack, then call us again for the next decision.
}
