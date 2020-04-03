/////////////////////////////////////////////////////////////////////
// COM思考 (COM thinking - original)
function ai_default(game){
    var i,j;
    // エリア数、ダイス総数チェック	(Number of areas, total dice check)	
    for( i=0; i<8; i++ ){
        game.player[i].area_c = 0;
        game.player[i].dice_c = 0;
    }
    var sum = 0;
    for( i=1; i<game.AREA_MAX; i++ ){
        if( game.adat[i].size == 0 ) continue;
        var arm = game.adat[i].arm;
        game.player[arm].area_c++;
        game.player[arm].dice_c += game.adat[i].dice;
        sum += game.adat[i].dice;
    }
    // ダイス順位 (Dice ranking)
    for( i=0; i<8; i++ ) game.player[i].dice_jun = i;
    for( i=0; i<8-1; i++ ){
        for( j=i+1; j<8; j++ ){
            if( game.player[i].dice_c < game.player[j].dice_c ){
                var tmp = game.player[i].dice_jun;
                game.player[i].dice_jun = game.player[j].dice_jun;
                game.player[j].dice_jun = tmp;
            }
        }
    }
    // ダントツトップ目 (Dantotsu top eyes...find the most advantaged player)
    var top = -1;
    for( i=0; i<8; i++ ){
        if( game.player[i].dice_c > sum*2/5 ) top = i;
    }
    // 攻撃元、攻撃先のリストを作り、ランダムで決める (Make a list of attack sources and destintions, decide at random)
    var list_from = new Array(game.AREA_MAX*game.AREA_MAX);
    var list_to = new Array(game.AREA_MAX*game.AREA_MAX);
    var lc = 0;
    var pn = game.jun[game.ban];
    for( i=1; i<game.AREA_MAX; i++ ){
        if( game.adat[i].size == 0 ) continue;
        if( game.adat[i].arm != pn ) continue;
        if( game.adat[i].dice <= 1 ) continue;
        for( j=1; j<game.AREA_MAX; j++ ){
            if( game.adat[j].size == 0 ) continue;
            if( game.adat[j].arm == pn ) continue;
            if( game.adat[i].join[j]==0 ) continue;
            if( top>=0 ){	// ダントツがいて、２着以下から２着以下 (if there is an advantaged player, make sure to attack it?)
                if( game.adat[i].arm!=top && game.adat[j].arm!=top ) continue;
            }
            if( game.adat[j].dice > game.adat[i].dice ) continue;	// 敵が多勢 (massive enemies)
            // 敵と同数の場合 (if we have the same number of dice as enemies)
            if( game.adat[j].dice == game.adat[i].dice ){
                var en = game.adat[j].arm;
                var f=0;
                if( game.player[pn].dice_jun == 0 ) f=1;		// 自分がトップの時は仕掛ける (If we're top ranked, attack)
                if( game.player[en].dice_jun == 0 ) f=1;		// 相手がトップの時は仕掛ける (If the opponent is top ranked, attack)
                if( Math.random()*10>1 ) f=1;
                if( f==0 ) continue;
            }
            list_from[lc] = i;
            list_to[lc] = j;
            lc++;
        }
    }
    if( lc == 0 ) return 0;

    var n = Math.floor(Math.random()*lc);
    game.area_from = list_from[n];
    game.area_to = list_to[n];
}
