var AreaData = function(){
	this.size=0;		// 0.不在 1～
	this.cpos=0;		// 中心セル
	this.arm=0;		// 属軍
	this.dice=0;		// サイコロ数
	
	// 中心地を決めるための変数
	this.left=0;
	this.right=0;
	this.top=0;
	this.bottom=0;
	this.cx=0;		// left,right 中間地
	this.cy=0;		// top,bottom 中間地
	this.len_min=0;

	// 周囲のライン用
	this.line_cel = new Array(100);	// セル
	this.line_dir = new Array(100);	// 方向(0～5)
	this.join = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	// 隣接フラグ32個
}


var PlayerData = function(){
	this.area_c=0;	// エリア数
	this.area_tc=0;	// 隣接エリア最大数
	this.dice_c=0;	// ダイス総数
	this.dice_jun=0;	// ダイス数順位
	this.stock=0;		// ストックダイス
}

var JoinData = function(){
	this.dir = [0,0,0,0,0,0];
}

var HistoryData = function(){
	this.from=0;	// 攻撃元エリア、補給エリア
	this.to=0;		// 攻撃先エリア、０は補給フラグ
	this.res=0;		// 結果　０攻撃失敗、１占領
}

var Game = function(){
	var i,j;

	// メソッド 隣のセル番号を返す
	this.next_cel = function( opos, dir ){
		var ox = opos%this.XMAX;
		var oy = Math.floor(opos/this.XMAX);
		var f = oy%2;
		var ax=0;
		var ay=0;
		switch(dir){
			case 0: ax=f; ay=-1; break;	// 右上
			case 1: ax=1; break;	// 右
			case 2: ax=f; ay=1;break;	// 右下
			case 3: ax=f-1; ay=1;break;	// 左下
			case 4: ax=-1; break;	// 左
			case 5: ax=f-1; ay=-1; break;	// 左上
		}
		var x = ox+ax;
		var y = oy+ay;
		if( x<0 || y<0 || x>=this.XMAX || y>=this.YMAX ) return -1;
		return y*this.XMAX+x;
	}

	
	// セルデータ
	this.XMAX=28;
	this.YMAX=32;
	this.cel_max = this.XMAX * this.YMAX;
	this.cel = new Array(this.cel_max);
	// 隣接セルを入れた配列
	this.join = new Array(this.cel_max);
	for( i=0; i<this.cel_max; i++ ){
		this.join[i] = new JoinData();
		for( j=0; j<6; j++ ) this.join[i].dir[j] = this.next_cel(i,j);
	}
	// エリアデータ
	this.AREA_MAX = 32;	// 最大エリア数
	this.adat = new Array();
	for( i=0; i<32; i++ ) this.adat[i] = new AreaData();
	// マップ作成時に使う
	this.num = new Array(this.cel_max);		// エリア通番
	for( i=0; i<this.cel_max; i++ ) this.num[i] = i;
	this.rcel = new Array(this.cel_max);		// 隣接セル
	
	this.next_f = new Array(this.cel_max);	// 浸透時に使う周囲セル
	this.alist = new Array(this.AREA_MAX);	// エリアリスト
	this.chk = new Array(this.AREA_MAX);		// エリア描画線用
	this.tc = new Array(this.AREA_MAX);		// 隣接エリア数で使用
	// ゲームデータ
	this.pmax=7;		// プレイヤー数
	this.user=0;		// ユーザープレイヤー
	this.put_dice=3;	// 配置ダイス平均数
	this.jun = [0,1,2,3,4,5,6,7];			// 順番
	this.ban = 0;			// 手番 現在のプレイヤーは player = jun[ban];
	this.area_from=0;	// 攻撃元
	this.area_to=0;		// 攻撃先
	this.defeat=0;		// 0.攻撃失敗　1.攻撃成功
	// プレイヤーデータ
	this.player = new Array(8);
	this.STOCK_MAX=64;	// 最大ストック数
	// COM思考
	this.list_from = new Array(this.AREA_MAX*this.AREA_MAX);
	this.list_to = new Array(this.AREA_MAX*this.AREA_MAX);
	// 履歴
	this.his = new Array();
	this.his_c = 0;
	// 初期配置
	this.his_arm = new Array(this.AREA_MAX);
	this.his_dice = new Array(this.AREA_MAX);
	
	// ゲーム開始（マップ作成しておくこと、pmax,userなど設定しておくこと）
	this.start_game = function(){
		var i;
		// 順番シャッフル
		for( i=0; i<8; i++ ) this.jun[i] = i;
		for( i=0; i<this.pmax; i++ ){
			var r = Math.floor(Math.random()*this.pmax);
			var tmp=this.jun[i]; this.jun[i]=this.jun[r]; this.jun[r]=tmp;
		}
		this.ban = 0;
		// プレイヤーデータ作成
		for( i=0; i<8; i++ ) this.player[i] = new PlayerData();
		for( i=0; i<8; i++ ) this.set_area_tc(i);
		// 履歴
		this.his_c = 0;
		for( i=0; i<this.AREA_MAX; i++ ){
			this.his_arm[i] = this.adat[i].arm;
			this.his_dice[i] = this.adat[i].dice;
		}
	}
	
	// 隣接エリア最大数
	this.set_area_tc = function( pn ){
		this.player[pn].area_tc = 0;
		var i,j;
		for( i=0; i<this.AREA_MAX; i++ ) this.chk[i] = i;
		while( 1 ){
			var f = 0;
			for( i=1; i<this.AREA_MAX; i++ ){
				if( this.adat[i].size == 0 ) continue;
				if( this.adat[i].arm != pn ) continue;
				for( j=1; j<this.AREA_MAX; j++ ){
					if( this.adat[j].size == 0 ) continue;
					if( this.adat[j].arm != pn ) continue;
					if( this.adat[i].join[j]==0 ) continue;
					if( this.chk[j] == this.chk[i] ) continue;
					if( this.chk[i] > this.chk[j] ) this.chk[i]=this.chk[j]; else this.chk[j]=this.chk[i];
					f = 1;
					break;
				}
				if( f ) break;
			}
			if( f==0 ) break;
		}
		for( i=0; i<this.AREA_MAX; i++ ) this.tc[i]=0;
		for( i=1; i<this.AREA_MAX; i++ ){
			if( this.adat[i].size == 0 ) continue;
			if( this.adat[i].arm != pn ) continue;
			this.tc[this.chk[i]]++;
		}
		var max = 0;
		for( i=0; i<this.AREA_MAX; i++ ){
			if( this.tc[i] > max ){
				max = this.tc[i];
			}
		}
		this.player[pn].area_tc = max;
	}
	
	/////////////////////////////////////////////////////////////////////
	// 現在のプレイヤーを返す
	/////////////////////////////////////////////////////////////////////

	this.get_pn = function(){
		return this.jun[this.ban];
	}

	/////////////////////////////////////////////////////////////////////
	// マップ作成
	/////////////////////////////////////////////////////////////////////

	this.make_map = function(){
		var i,j,k,c,an;
		
		// 通番シャッフル
		for( i=0; i<this.cel_max; i++ ){
			var r = Math.floor(Math.random()*this.cel_max);
			var tmp=this.num[i]; this.num[i]=this.num[r]; this.num[r]=tmp;
		}
		// セル初期化
		for( i=0; i<this.cel_max; i++ ){
			this.cel[i] = 0;
			this.rcel[i] = 0;	// 隣接セル
		}
		var an = 1;	// エリア番号
		this.rcel[Math.floor(Math.random()*this.cel_max)] = 1;	// 最初のセル
		
		while( 1 ){
			// 浸透開始セルを決める
			var pos;
			var min = 9999;
			for( i=0; i<this.cel_max; i++ ){
				if( this.cel[i] > 0 ) continue;
				if( this.num[i] > min ) continue;
				if( this.rcel[i] == 0 ) continue;
				min = this.num[i];
				pos = i;
			}
			if( min == 9999 ) break;

			// 浸透開始
			var ret = this.percolate( pos, 8, an );
			if( ret == 0 ) break;
			an++;
			if( an >= this.AREA_MAX ) break;
		}
		// 海で、面積１のセルを無くす
		for( i=0; i<this.cel_max; i++ ){
			if( this.cel[i] > 0 ) continue;
			var pos;
			var f = 0;
			var a = 0;
			for( k=0; k<6; k++ ){
				var pos = this.join[i].dir[k];
				if( pos<0 ) continue;
				if( this.cel[pos] == 0 ) f=1; else a=this.cel[pos];
			}
			if( f==0 ) this.cel[i] = a;
		}
		// エリアデータ初期化
		for( i=0; i<this.AREA_MAX; i++ ) this.adat[i] = new AreaData();

		// 面積
		for( i=0; i<this.cel_max; i++ ){
			an = this.cel[i];
			if( an>0 ) this.adat[an].size++;
		}
		// 面積10以下のエリアを消す
		for( i=1; i<this.AREA_MAX; i++ ){
			if( this.adat[i].size <= 5 ) this.adat[i].size = 0;
		}
		for( i=0; i<this.cel_max; i++ ){
			an = this.cel[i];
			if( this.adat[an].size == 0 ) this.cel[i] = 0;
		}

		// エリアの中心地を決める
		for( i=1; i<this.AREA_MAX; i++ ){
			this.adat[i].left = this.XMAX;
			this.adat[i].right = -1;
			this.adat[i].top = this.YMAX;
			this.adat[i].bottom = -1;
			this.adat[i].len_min = 9999;
		}
		c = 0;
		for( i=0; i<this.YMAX; i++ ){
			for( j=0; j<this.XMAX; j++ ){
				an = this.cel[c];
				if( an>0 ){
					if( j<this.adat[an].left ) this.adat[an].left = j;
					if( j>this.adat[an].right ) this.adat[an].right = j;
					if( i<this.adat[an].top ) this.adat[an].top = i;
					if( i>this.adat[an].bottom ) this.adat[an].bottom = i;
				}
				c++;
			}
		}
		for( i=1; i<this.AREA_MAX; i++ ){
			this.adat[i].cx = Math.floor(( this.adat[i].left + this.adat[i].right ) / 2);
			this.adat[i].cy = Math.floor(( this.adat[i].top + this.adat[i].bottom ) / 2);
		}
		c=0;
		var x,y,len;
		for( i=0; i<this.YMAX; i++ ){
			for( j=0; j<this.XMAX; j++ ){
				an = this.cel[c];
				if( an>0 ){
					// 中心地からの距離（境界線近くはなるべく避ける）
					x = this.adat[an].cx-j; if( x<0 ) x = -x;
					y = this.adat[an].cy-i; if( y<0 ) y = -y;
					len = x+y;
					var f=0;
					for( k=0; k<6; k++ ){
						var pos = this.join[c].dir[k];
						if( pos>0 ){
							var an2 = this.cel[pos];
							if( an2 != an ){
								f=1;
								// ついでに隣接データも作成
								this.adat[an].join[an2] = 1;
							}
						}
					}
					if( f ) len += 4;
					// 距離が近いものを中心地とする
					if( len < this.adat[an].len_min ){
						this.adat[an].len_min = len;
						this.adat[an].cpos = i*this.XMAX+j;
					}
				}
				c++;
			}
		}

		// エリア属軍を決める
		for( i=0; i<this.AREA_MAX; i++ ) this.adat[i].arm = -1;
		var arm=0;	// 属軍
		var alist = new Array(this.AREA_MAX);	// エリアリスト
		while( 1 ){
			var c = 0;
			for( i=1; i<this.AREA_MAX; i++ ){
				if( this.adat[i].size == 0 ) continue;
				if( this.adat[i].arm >= 0 ) continue;
				alist[c] = i;
				c++;
			}
			if( c==0 ) break;
			var an = alist[Math.floor(Math.random()%c)];
			this.adat[an].arm = arm;
			arm++; if( arm>=this.pmax ) arm=0;
		}
		// エリア描画線のデータ作成
		for( i=0; i<this.AREA_MAX; i++ ) this.chk[i] = 0;
		for( i=0; i<this.cel_max; i++ ){
			var area = this.cel[i];
			if( area==0 ) continue;
			if( this.chk[area]>0 ) continue;
			for( var k=0; k<6; k++ ){
				if( this.chk[area]>0 ) break;
				var n = this.join[i].dir[k];
				if( n>=0 ){
					if(this.cel[n]!=area){
						this.set_area_line(i,k);
						this.chk[area]=1;
					}
				}
			}
		}
		// ダイス配置
		var anum = 0;
		for( i=1; i<this.AREA_MAX; i++ ){
			if( this.adat[i].size > 0 ){
				anum++;
				this.adat[i].dice = 1;
			}
		}
		anum *= (this.put_dice-1);
		var p=0;	// player
		for( i=0; i<anum; i++ ){
			var list = new Array(this.AREA_MAX);
			var c = 0;
			for( j=1; j<this.AREA_MAX; j++ ){
				if( this.adat[j].size == 0 ) continue;
				if( this.adat[j].arm != p ) continue;
				if( this.adat[j].dice >= 8 ) continue;
				list[c] = j;
				c++;
			}
			if( c==0 ) break;
			var an = list[Math.floor(Math.random()*c)];
			this.adat[an].dice++;
			p++; if( p>=this.pmax ) p=0;
		}
		for( i=0; i<this.AREA_MAX; i++ ){
//			this.adat[i].dice = 8;//1 + Math.floor(Math.random()*8);
		}
		
	}
	/////////////////////////////////////////////////////////////////////
	// 浸透してエリアを作る
	this.percolate = function( pt, cmax, an ){
		if( cmax < 3 ) cmax = 3;

		var i,j,k;
		var opos = pt;	// スタートセル

		//	隣接フラグ
		for(i=0; i<this.cel_max; i++ ) this.next_f[i]=0; 

		var c = 0;			// セル数
		while( 1 ){
			this.cel[opos] = an;
			c++;
			// 周囲セル
			for( i=0; i<6; i++ ){
				var pos = this.join[opos].dir[i];
				if( pos<0 ) continue;
				this.next_f[pos] = 1;
			}
			// 周囲セルで最小通番を次のセルにする
			var min = 9999;
			for( i=0; i<this.cel_max; i++ ){
				if( this.next_f[i] == 0 ) continue;	// 隣接してない
				if( this.cel[i] > 0 ) continue;	// すでにエリア化
				if( this.num[i] > min ) continue;	// 最小通番でない
				min = this.num[i];
				opos = i;
			}
			if( min == 9999 ) break;
			if( c>=cmax ) break;	// 与えられた面積を超えた
		}
		// 隣接セルを加える
		for( i=0; i<this.cel_max; i++ ){
			if( this.next_f[i] == 0 ) continue;
			if( this.cel[i] > 0 ) continue;		// すでにエリア化
			this.cel[i] = an;
			c++;
			// さらに隣接セルを次のエリアの候補とする
			for( k=0; k<6; k++ ){
				var pos = this.join[i].dir[k];
				if( pos<0 ) continue;
				this.rcel[pos] = 1;
			}
		}
		return c;
	}
	/////////////////////////////////////////////////////////////////////
	// エリア描画線データ作成
	this.set_area_line = function( old_cel, old_dir ){
		var c = old_cel;
		var d = old_dir;
		var area = this.cel[c];	// エリア番号
		var cnt = 0;
		this.adat[area].line_cel[cnt] = c;
		this.adat[area].line_dir[cnt] = d;
		cnt++;
		for( var i=0; i<100; i++ ){
			d++; if( d>=6 ) d=0;	// 方向加算
			var n = this.join[c].dir[d];
			if( n>=0 ){
				if( this.cel[n] == area ){
					// 隣が同じエリアの場合、セル移動、方向マイナス２
					c = n;
					d-=2; if( d<0 ) d+=6;
				}
			}
			this.adat[area].line_cel[cnt] = c;
			this.adat[area].line_dir[cnt] = d;
			cnt++;
			if( c==old_cel && d==old_dir ) break;
		}
	}
	
	/////////////////////////////////////////////////////////////////////
	// COM思考
	this.com_thinking = function(){
		var i,j;
		// エリア数、ダイス総数チェック		
		for( i=0; i<8; i++ ){
			this.player[i].area_c = 0;
			this.player[i].dice_c = 0;
		}
		var sum = 0;
		for( i=1; i<this.AREA_MAX; i++ ){
			if( this.adat[i].size == 0 ) continue;
			var arm = this.adat[i].arm;
			this.player[arm].area_c++;
			this.player[arm].dice_c += this.adat[i].dice;
			sum += this.adat[i].dice;
		}
		// ダイス順位
		for( i=0; i<8; i++ ) this.player[i].dice_jun = i;
		for( i=0; i<8-1; i++ ){
			for( j=i+1; j<8; j++ ){
				if( this.player[i].dice_c < this.player[j].dice_c ){
					var tmp = this.player[i].dice_jun;
					this.player[i].dice_jun = this.player[j].dice_jun;
					this.player[j].dice_jun = tmp;
				}
			}
		}
		// ダントツトップ目
		var top = -1;
		for( i=0; i<8; i++ ){
			if( this.player[i].dice_c > sum*2/5 ) top = i;
		}
		// 攻撃元、攻撃先のリストを作り、ランダムで決める
		var list_from = new Array(this.AREA_MAX*this.AREA_MAX);
		var list_to = new Array(this.AREA_MAX*this.AREA_MAX);
		var lc = 0;
		var pn = this.jun[this.ban];
		for( i=1; i<this.AREA_MAX; i++ ){
			if( this.adat[i].size == 0 ) continue;
			if( this.adat[i].arm != pn ) continue;
			if( this.adat[i].dice <= 1 ) continue;
			for( j=1; j<this.AREA_MAX; j++ ){
				if( this.adat[j].size == 0 ) continue;
				if( this.adat[j].arm == pn ) continue;
				if( this.adat[i].join[j]==0 ) continue;
				if( top>=0 ){	// ダントツがいて、２着以下から２着以下
					if( this.adat[i].arm!=top && this.adat[j].arm!=top ) continue;
				}
				if( this.adat[j].dice > this.adat[i].dice ) continue;	// 敵が多勢
				// 敵と同数の場合
				if( this.adat[j].dice == this.adat[i].dice ){
					var en = this.adat[j].arm;
					var f=0;
					if( this.player[pn].dice_jun == 0 ) f=1;		// 自分がトップの時は仕掛ける
					if( this.player[en].dice_jun == 0 ) f=1;		// 相手がトップの時は仕掛ける
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
		this.area_from = list_from[n];
		this.area_to = list_to[n];
	}
	
	/////////////////////////////////////////////////////////////////////
	// 履歴に追加
	this.set_his = function( from, to, res ){
		this.his[this.his_c] = new HistoryData();
		this.his[this.his_c].from = from;
		this.his[this.his_c].to = to;
		this.his[this.his_c].res = res;
		this.his_c++;
	}
}



