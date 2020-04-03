function ai_defensive(game) {
    // compute info for every area only once
    area_get_info = function( area_id ){
        var friendly_neighbors = 0;
        var unfriendly_neighbors = 0;
        var highest_friendly_neighbor_dice = 0;
        var highest_unfriendly_neighbor_dice = 0;
        var second_highest_unfriendly_neighbor_dice = 0;
        var num_neighbors = 0;

        for ( i=0; i<game.AREA_MAX; i++ ) {
            if (i == area_id) continue;

            // find adjacent regions
            if ( ! game.adat[ area_id ].join[ i ] )
                continue;

            var num_dice = game.adat[i].dice;

            if (game.adat[area_id].arm == game.adat[i].arm) {
                friendly_neighbors += 1;

                if (highest_friendly_neighbor_dice < num_dice)
                    highest_friendly_neighbor_dice = num_dice;
            }
            else {
                unfriendly_neighbors += 1;

                if (highest_unfriendly_neighbor_dice < num_dice) {
                    second_highest_unfriendly_neighbor_dice = highest_unfriendly_neighbor_dice;
                    highest_unfriendly_neighbor_dice = num_dice;
                }
                else if (second_highest_unfriendly_neighbor_dice < num_dice)
                    second_highest_unfriendly_neighbor_dice = num_dice;
            }
        }

        num_neighbors = friendly_neighbors + unfriendly_neighbors

        return {friendly_neighbors: friendly_neighbors,
                unfriendly_neighbors: unfriendly_neighbors,
                highest_friendly_neighbor_dice: highest_friendly_neighbor_dice,
                highest_unfriendly_neighbor_dice: highest_unfriendly_neighbor_dice,
                second_highest_unfriendly_neighbor_dice: second_highest_unfriendly_neighbor_dice,
                num_neighbors: num_neighbors
            };
    }

    // compute the area info once
    var area_info = [...Array(game.AREA_MAX).keys()].map( area_get_info );

    var pn = game.get_pn();

    game.area_from = -1;
    game.area_to = -1;

    // for all potential defenders
    for ( i=0; i<game.AREA_MAX; i++ ) {
        if ( game.adat[i].arm == pn ) continue;

        // for all potential attackers of game defender
        for ( j=0; j<game.AREA_MAX; j++ ) {
            if ( game.adat[j].arm != pn ) continue;
            if ( ! game.adat[i].join[j] ) continue;

            // is the attacker actually in a position to attack?
            if ( game.adat[i].dice >= game.adat[j].dice && game.adat[j].dice != 8 ) continue;
            // does winning invite a strong counter attack?
            if ( area_info[i].highest_friendly_neighbor_dice > game.adat[j].dice ) continue;
            // does the attacker have something to defend from (and I have a meaningful connected area)?
            if ( game.player[pn].area_tc > 4
                && area_info[ j ].second_highest_unfriendly_neighbor_dice > 2
                && game.player[pn].stock == 0 ) continue;

            // check against previous attacker
            if (game.area_from == -1) {
                // no previous attacker, assign them
                game.area_from = j;
                game.area_to = i;
            } else {
                if ( area_info[ game.area_from ].unfriendly_neighbors == 1) { // if it's the only way out
                    if ( area_info[j].unfriendly_neighbors == 1 ) { // ...for both of them
                        if ( game.adat[j].dice < game.adat[ game.area_from ].dice ) continue; // prefer larger dice
                        else if ( adat[j].dice == game.adat[ game.area_from ] .dice)
                            // then prefer the less connected region
                            if ( area_info[j].num_neighbors < area_info[game.area_from].num_neighbors )
                                continue

                    } else continue; // let the other one out first
                }
                game.area_from = j;
                game.area_to = i;
            }

        }
    }

    // only return 0 if I don't want to make a move
    if (game.area_from == -1)
        return 0;
}
