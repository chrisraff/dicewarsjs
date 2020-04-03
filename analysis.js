// array of ai competitors
var players = [ai_defensive, ai_defensive, ai_defensive, ai_default, ai_default, ai_default, ai_example, ai_example];

var game = new Game();

// choose the number of players in game
game.pmax = 7;

game.start_game();
game.ai = players;

spectate_mode = true;

// play through the whole game
while (true) {
    ret = game.com_thinking();

    if (ret != 0) {
        // the dice roll
        var an = [game.area_from, game.area_to];
        for ( var i=0; i<2; i++ ){
            battle[i].arm = game.adat[an[i]].arm;
            battle[i].dmax = game.adat[an[i]].dice;
            for ( var j=0; j<8; j++ ){
                var r = Math.floor(Math.random()*8);
                var tmp = battle[i].usedice[j];
                battle[i].usedice[j] = battle[i].usedice[r];
                battle[i].usedice[r] = tmp;
            }
            battle[i].sum=0;
            for ( var j=0; j<8; j++ ){
                battle[i].deme[j] = Math.floor(Math.random()*6);
                if( battle[i].usedice[j]<battle[i].dmax ){
                    battle[i].sum += 1+battle[i].deme[j];
                }
                battle[i].fin[j] = false;
            }
        }
        
        // evaluate roll
        var arm0 = game.adat[game.area_from].arm;
        var arm1 = game.adat[game.area_to].arm;
        var defeat = ( battle[0].sum>battle[1].sum ) ? 1 : 0;
        if( defeat>0 ){
            game.adat[game.area_to].dice = game.adat[game.area_from].dice-1;
            game.adat[game.area_from].dice = 1;
            game.adat[game.area_to].arm = arm0;
            game.set_area_tc(arm0);
            game.set_area_tc(arm1);
        }else{
            game.adat[game.area_from].dice = 1;
        }
        
        // record history (probably don't need this)
        game.set_his(game.area_from,game.area_to,defeat);

        console.log("player " + game.jun[game.ban] + " attacked, " + defeat ? "lost" : "won");
        
        // check if anyone won
        var c = 0;
        var winner = -1;
        for( var i=0; i<game.pmax; i++ ){
            if ( game.player[i].area_tc>0 ) {
                c++;
                winner = i;
            }
        }
        if ( c == 1 ) {
            var result = "Player " + winner + " won";
            console.log(result);
            document.getElementById("output").textContent = result;
            break;
        }

        continue; // start loop over
    }

    console.log("turn ended");

    // at this point, the turn was ended

    // start supply dice
	var pn = game.jun[game.ban];
    game.set_area_tc(pn);
    game.player[pn].stock += game.player[pn].area_tc;
    if ( game.player[pn].stock > game.STOCK_MAX ) {
        game.player[pn].stock = game.STOCK_MAX;
    }

    // supply dice
    while (true) {
        var list = new Array();
        c = 0;
        for( var i=0; i<game.AREA_MAX; i++ ){
            if( game.adat[i].size == 0 ) continue;
            if( game.adat[i].arm != pn ) continue;
            if( game.adat[i].dice >= 8 ) continue;
            list[c] = i;
            c++;
        }
        if( c==0 || game.player[pn].stock<=0 ) {
            // next player
            for ( var i=0; i<game.pmax; i++ ) {
                game.ban++;
                if ( game.ban >= game.pmax ) game.ban = 0;
                var pn = game.jun[game.ban];
                if ( game.player[pn].area_tc ) break;
            }
            break;
        }

        game.player[pn].stock--;
        var an = list[Math.floor(Math.random()*c)];
        game.adat[an].dice++;
        
        // 履歴
        game.set_his(an,0,0);
    }
}
