// chooses random moves until there are no decent moves left
// This code is written for clarity, not necessarily simplicity
function ai_example(game) {
    var current_player = game.get_pn(); // the index of the current player (us), so we can tell which regions are friendly
    
    // Make a list of valid moves (attacker / defender pairs)
    // Once we have found all the valid moves, we pick one at random
    var list_moves = new Array(game.AREA_MAX*game.AREA_MAX);
    var number_of_moves = 0;

    // for every area (region with dice) in the game
    for ( var i=1; i<game.AREA_MAX; i++ ) {
        var attacking_area = game.adat[i];

        if ( attacking_area.size == 0 ) continue; // if the area has a size of zero, ignore it
        if ( attacking_area.arm != current_player ) continue; // if the area isn't ours, we can't attack with it
        if ( attacking_area.dice <= 1 ) continue; // if our area has one die, we can't attack with it

        // for every area on the map (this time, looking for a region to attack)
        for ( var j=1; j<game.AREA_MAX; j++ ) {
            var defending_area = game.adat[j]

            if ( defending_area.size == 0 ) continue; // if the area has a size of zero, ignore it
            if ( defending_area.arm == current_player ) continue; // make sure the area isn't ours (because we want to attack it)
            if ( attacking_area.join[j] == 0 ) continue; // make sure the area to attack is next to the area we're attacking with

            // if the defending area has more dice than us, it's (probably) a bad move so we'll ignore it
            if ( defending_area.dice >= game.adat[i].dice ) continue;

            // if we made it this far, this pair of attacker and defender are valid so we add them to the list
            list_moves[number_of_moves] = {
                "attacker": i, // i is the index of the attacking area
                "defender": j  // j is the index of the defending area
            };
            number_of_moves++;
        }
    }

    // if there are no moves to pick from, return 0 to end our turn
    if ( number_of_moves == 0 ) return 0;

    // randomly pick a move
    var n = Math.floor(Math.random()*number_of_moves);
    var move = list_moves[n]

    // get the attacking and defending area's indices from the list
    var attacking_area_index = move["attacker"];
    var defending_area_index = move["defender"];

    game.area_from = attacking_area_index; // tell the game the index of the area we're attacking with
    game.area_to   = defending_area_index; // tell the game the index of the area that we are attacking
    // DO NOT RETURN ANYTHING to finalize the attack
    // This function will get called repeatedly until we return 0
}
