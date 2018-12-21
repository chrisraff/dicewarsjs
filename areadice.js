(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.dice7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Al5EYQhJglg9hSQg9hTgOhOQgNhQApgfQAqgfBJAkQBJAlA9BQQA9BTAOBQQAOBRgqAfQgTAOgaAAQgeAAgogUgAAcC/QhHglg9hSQg9hRgOhQQgOhQAqgfQAqgfBJAkQBHAlA9BSQA9BRAOBQQANBRgpAfQgTAOgaAAQgeAAgogUgAG8BrQhJglg9hQQg9hTgOhQQgOhQAqgfQAqgfBJAkQBJAlA9BSQA9BTAOBOQANBRgpAfQgTAOgaAAQgeAAgogUg");
	this.shape.setTransform(-81.8,60.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AooOyQglgcAQhMQAQhKA8hOQA8hOBFgkQBEgiAlAdQAlAcgQBLQgQBMg8BNQg8BOhEAjQgmATgcAAQgXAAgRgNgAouHmQglgcAQhMQAQhKA8hOQA8hOBEgkQBFgiAlAdQAlAcgQBLQgQBMg8BNQg8BOhFAjQglATgdAAQgXAAgQgNgAEOFWQglgcAQhMQAQhKA8hOQA8hOBFgiQBEgiAlAdQAlAcgQBJQgQBMg8BNQg8BOhEAjQgmATgcAAQgXAAgRgNgAooAXQglgbAQhMQAQhKA8hOQA8hOBFgjQBEgjAlAdQAlAcgQBLQgQBMg8BNQg8BOhEAhQgmATgcAAQgXAAgRgMgAEOh3QglgdAQhLQAQhLA8hOQA8hOBFgjQBEgiAlAcQAlAdgQBKQgQBMg8BOQg8BOhEAiQgmAUgcAAQgXAAgRgNgAEJo5QglgdAQhMQAQhKA8hOQA8hOBFgjQBEgjAlAdQAlAcgQBLQgQBMg8BNQg8BOhEAjQgmATgcAAQgXAAgRgMg");
	this.shape_1.setTransform(81.7,60.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AigLaQhCgyAAhHQAAhGBCgyQBEgxBdAAQBgAABDAxQBEAyAABGQAABHhEAyQhDAxhgAAQhdAAhEgxgAKKBxQhDgxABhFQgBhGBDgyQBEgyBfAAQBgAABDAyQBEAyAABGQAABFhEAxQhDAzhgAAQhfAAhEgzgAigBxQhCgxAAhFQAAhGBCgyQBEgyBdAAQBgAABDAyQBEAyAABGQAABFhEAxQhDAzhgAAQhdAAhEgzgAvQBxQhDgxABhFQgBhGBDgyQBEgyBfAAQBgAABDAyQBDAyAABGQAABFhDAxQhDAzhgAAQhfAAhEgzgAijnpQhDgxgBhGQABhHBDgyQBDgyBgAAQBdAABDAyQBDAyAABHQAABGhDAxQhDAzhdAAQhgAAhDgzg");
	this.shape_2.setTransform(-0.5,-77.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// tri
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF5858").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_3.setTransform(0,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C30000").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_4.setTransform(-142,-77.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C0000").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_5.setTransform(144,-77.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A0000").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_6.setTransform(0,166.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D50202").s().p("AmPOKIsgpYQkckjEcmDIL4owQGYiaHWCaIMgJYQDOFTjOEDItIKAQjIBojHAAQjHAAjIhog");
	this.shape_7.setTransform(0,-75.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// side
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#890000").s().p("AHLRJItuqAQkGkliJmBIAAsgQDMiDDsBbIMeJYQEUEDB8F7IAAMgQhkB6jQAAQgaAAgbgCg");
	this.shape_8.setTransform(-82,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// cube
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330000").s().p("Alna6ItwqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhiFLjdENIvALQQi1AgizAAQiyAAi1ggg");
	this.shape_9.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.dice6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Al0VuQhGgcg6hJQg5hKgLhLQgMhMAqggQAqghBHAcQBGAdA6BKQA5BJALBLQALBMgqAhQgWARgeAAQgbAAghgOgAE4U+Qg5goAPhuQARhvBQh1QBRh1Bhg3QBjg2A6AoQA6AogRBvQgQBuhQB1QhRB1hiA3Qg4AfgrAAQggAAgZgRgAyeMHQhGgcg6hJQg5hKgLhLQgMhMAqggQAqghBHAcQBGAdA6BKQA5BJALBLQALBMgqAhQgWARgeAAQgbAAghgOgAl+JsQhGgcg6hJQg5hKgLhLQgMhMAqggQAqghBHAcQBGAdA6BKQA5BJALBLQALBMgqAhQgWARgeAAQgbAAghgOgAO4DwQg5goAPhuQARhtBQh1QBRh1Bhg3QBjg2A6AoQA6AogRBvQgQBuhQBzQhRB1hiA3Qg4AfgrAAQggAAgZgRgAyjAFQhGgag6hJQg5hKgLhLQgMhMAqggQAqghBHAcQBGAdA6BKQA5BJALBLQALBMgqAfQgWARgeAAQgbAAghgOgAnxnZQjRifgBjiQABjiDRifQDRigEmAAQEpAADRCgQDSCfAADiQAADijSCfQjRCgkpAAQkmAAjRigg");
	this.shape.setTransform(-0.2,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// tri
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D300").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_1.setTransform(-142,-77.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E2E00").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_2.setTransform(0,166.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF7A").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_3.setTransform(0,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626200").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_4.setTransform(144,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// top
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5F50F").s().p("AmYOPIsgpYQkAktEAl5IL4owQGYiaHWCaIMgJYQDWFJjWENItIKAQjIBejGAAQjIAAjIheg");
	this.shape_5.setTransform(0.9,-76.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// side
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#949400").s().p("AHLRJItuqAQkGkliJmBIAAsgQDMiDDsBbIMeJYQEUEDB8F7IAAMgQhkB6jQAAQgaAAgbgCg");
	this.shape_6.setTransform(-82,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// cube
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373700").s().p("Alna6ItwqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhiFLjdENIvALQQi1AgizAAQiyAAi1ggg");
	this.shape_7.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.dice5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEUYKQgmgaAOhLQANhMA5hRQA5hQBCgnQBDgmAlAaQAmAbgOBLQgOBMg4BQQg5BRhDAmQgnAXgdAAQgUAAgPgLgAxGPWQhlgxhVhwQhWhxgVhuQgUhuA4grQA5grBkAxQBlAxBWBxQBVBwAVBuQAVBug5ArQgaAUgkAAQgpAAg2gagAREOeQglgaANhLQAOhMA5hRQA4hQBDgnQBCgmAmAaQAlAbgOBLQgNBMg5BQQg5BRhCAmQgnAXgeAAQgUAAgPgLgAmyNWQhlgxhVhwQhWhwgVhuQgUhuA4gsQA5gqBkAxQBlAxBWBwQBVBwAVBuQAVBvg5ArQgaAUgkAAQgpAAg2gbgAEQMGQglgaANhLQAOhMA5hRQA4hQBDgnQBCgmAmAaQAlAbgOBLQgNBMg5BQQg5BRhCAmQgnAXgeAAQgUAAgPgLgAQ8ChQglgaANhLQAOhKA5hRQA4hQBDgnQBCgmAmAaQAlAbgOBLQgNBMg5BOQg5BRhCAmQgnAXgeAAQgUAAgPgLgAj2A7QhEgzAAhGQAAhIBEgzQBEgzBgAAQBeAABEAzQBEAzAABIQAABGhEAzQhEAzheAAQhgAAhEgzgAD0kzQhEgzAAhIQAAhIBEgzQBEgzBgAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQhgAAhEgzgAwiofQhEgzAAhIQAAhIBEgzQBEgzBgAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQhgAAhEgzgALkqbQhEgzAAhIQAAhIBEgzQBEgzBgAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQhgAAhEgzgAo6uHQhEgzAAhIQAAhIBEgzQBEgzBgAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQhgAAhEgzgAhWzrQhEgzAAhIQAAhIBEgzQBEgzBeAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQheAAhEgzg");
	this.shape.setTransform(-1.4,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// tri
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002020").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_1.setTransform(0,166.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006A6A").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_2.setTransform(144,-77.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#39FFFF").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_3.setTransform(0,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00D0D0").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_4.setTransform(-142,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// top
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02E6E6").s().p("AmUOHIsgpYQkRk+ERloIL4owQGYiaHWCaIMgJYQDXFLjXELItIKAQjNBujGAAQjIAAjDhug");
	this.shape_5.setTransform(0.5,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// side
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009494").s().p("AHLRJItuqAQkGkliJmBIAAsgQDMiDDsBbIMeJYQEUEDB8F7IAAMgQhkB6jQAAQgaAAgbgCg");
	this.shape_6.setTransform(-82,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// cube
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003737").s().p("Alna6ItwqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhiFLjdENIvALQQi1AgizAAQiyAAi1ggg");
	this.shape_7.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.dice4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEKYIQglgdAQhMQAQhKA8hOQA8hOBEgjQBFgjAlAdQAlAdgQBKQgQBMg8BOQg8BOhFAiQglAUgdAAQgXAAgQgNgAEDQ8QglgdAQhMQAQhKA8hOQA8hOBFgjQBEgjAlAdQAlAdgQBKQgQBMg8BOQg8BOhEAiQgmAUgcAAQgXAAgRgNgARCOsQglgdAQhMQAQhKA8hOQA8hOBEgjQBFgjAlAdQAlAdgQBKQgQBMg8BOQg8BOhFAiQglAUgdAAQgXAAgQgNgAynNyQhJgkg+hTQg9hSgNhRQgOhQAqgfQApgfBJAkQBJAlA9BSQA+BTANBQQAOBRgqAfQgTAOgZAAQgfAAgngUgAsRMZQhJgkg9hTQg9hSgOhRQgNhQApgfQAqgfBJAkQBJAlA9BSQA9BTAOBQQAOBRgqAfQgTAOgaAAQgeAAgogUgAlxLFQhJgkg9hTQg9hSgOhRQgNhQApgfQAqgfBJAkQBJAlA9BSQA9BTAOBQQAOBRgqAfQgTAOgaAAQgeAAgogUgAEKJsQglgdAQhMQAQhKA8hOQA8hOBEgjQBFgjAlAdQAlAdgQBKQgQBMg8BOQg8BOhFAiQglAUgdAAQgXAAgQgNgARCHcQglgcAQhMQAQhLA8hOQA8hNBEgkQBFgiAlAcQAlAdgQBLQgQBLg8BOQg8BOhFAiQglAUgdAAQgXAAgQgNgAQ9AaQglgbAQhMQAQhKA8hOQA8hOBEgjQBFgjAlAdQAlAdgQBKQgQBMg8BOQg8BOhFAgQglAUgdAAQgXAAgQgNgAiiguQhDgxAAhHQAAhGBDgyQBDgyBfAAQBeAABDAyQBEAyAABGQAABHhEAxQhDAwheAAQhfAAhDgwgAKIqWQhDgxAAhHQAAhGBDgyQBDgyBgAAQBfAABDAyQBEAyAABGQAABHhEAxQhDAyhfAAQhgAAhDgygAiiqWQhDgxAAhHQAAhGBDgyQBDgyBfAAQBeAABDAyQBEAyAABGQAABHhEAxQhDAyheAAQhfAAhDgygAvSqWQhDgxAAhHQAAhGBDgyQBDgyBgAAQBfAABDAyQBEAyAABGQAABHhEAxQhDAyhfAAQhgAAhDgygAimzyQhDgxAAhHQAAhGBDgyQBDgyBgAAQBdAABDAyQBEAyAABGQAABHhEAxQhDAyhdAAQhgAAhDgyg");
	this.shape.setTransform(-0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// tri
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#130B00").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_1.setTransform(0,166.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E3C00").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_2.setTransform(144,-77.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB132").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_3.setTransform(0,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D07200").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_4.setTransform(-142,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// top
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E67F02").s().p("AmXOPIsgpYQj7ktD7l5IL4owQGYiaHWCaIMgJYQDMFBjMEVItIKAQjIBejGAAQjIAAjIheg");
	this.shape_5.setTransform(0.8,-76.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// side
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#945100").s().p("AHLRJItuqAQkGkliJmBIAAsgQDMiDDsBbIMeJYQEUEDB8F7IAAMgQhkB6jQAAQgaAAgbgCg");
	this.shape_6.setTransform(-82,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// cube
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#371E00").s().p("Alna6ItwqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhiFLjdENIvALQQi1AgizAAQiyAAi1ggg");
	this.shape_7.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.dice3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmmJEQh1hVAqjmQAqjnCvjuQCwjwDMhuQAzgcAvgPQBzgmBQAmQAQAHAOALQB1BVgqDmQgqDnivDuQivDwjNBuQh0A+hYAAQhEAAgzglg");
	this.shape.setTransform(81.5,64.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Al5EZQhKglg+hVQg+hUgNhRQgNhSArgfQArggBLAlQBKAlA+BTQA+BUANBSQAOBSgsAgQgUAPgaAAQgfAAgpgUgAAfDDQhIglg+hUQg+hTgNhSQgNhSArggQArggBLAlQBIAmA+BUQA+BSANBSQAOBTgsAgQgUAOgaAAQgfAAgpgUgAG5BzQhKglg+hSQg+hVgNhSQgNhSArggQArggBLAlQBKAmA+BUQA+BUANBQQAOBTgsAgQgUAOgaAAQgfAAgpgUg");
	this.shape_1.setTransform(-81.8,60.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj1KVQhkhMgBhsQABhrBkhNQBlhMCPAAQCOAABlBMQBlBNAABrQAABshlBMQhlBNiOAAQiPAAhlhNgAjwkkQhlhNAAhrQAAhsBlhMQBkhNCOAAQCPAABlBNQBlBMgBBsQABBrhlBNQhlBMiPAAQiOAAhkhMg");
	this.shape_2.setTransform(0.4,-76.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// tri
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33001A").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_3.setTransform(0,166.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF5BC5").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_4.setTransform(0,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0166").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_5.setTransform(-142,-77.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#620031").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_6.setTransform(144,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF2396").s().p("AmYODIsgpYQkAkrEAl7IL4owQGYiaHWCaIMgJYQDWFdjWD5ItIKAQjIB2jGAAQjIAAjIh2g");
	this.shape_7.setTransform(1,-75.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// side
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97004C").s().p("AHLRJItuqAQkGkliJmBIAAsgQDMiDDsBbIMeJYQEUEDB8F7IAAMgQhkB6jQAAQgaAAgbgCg");
	this.shape_8.setTransform(-82,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// cube
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C001E").s().p("Alna6ItwqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhiFLjdENIvALQQi1AgizAAQiyAAi1ggg");
	this.shape_9.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.dice2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AG4NcQhDgig6hLQg5hMgPhJQgOhKAlgdQAlgcBDAhQBEAiA6BLQA5BMAOBJQAPBKglAdQgRANgYAAQgcAAgkgSgAl2EFQhDgig5hLQg6hMgPhJQgOhIAlgdQAmgcBDAhQBDAiA6BJQA6BMAOBJQAPBKgmAdQgRANgYAAQgbAAglgSgAAfCxQhBghg5hMQg6hJgPhKQgOhJAlgdQAmgdBDAiQBBAhA6BMQA6BJAOBKQAPBKgmAcQgRANgYAAQgbAAglgSgAG8BZQhDgig6hJQg5hMgPhJQgOhKAlgdQAlgcBDAhQBEAiA6BLQA5BMAOBJQAPBIglAdQgRANgYAAQgcAAgkgSgAlyn3QhDgig5hLQg6hMgPhJQgOhKAlgdQAmgcBDAhQBDAiA6BLQA6BMAOBJQAPBKgmAdQgRANgYAAQgbAAglgSg");
	this.shape.setTransform(-83.3,58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AmmJEQh1hVAqjmQAqjnCvjuQCwjwDMhuQDOhuB1BVQB1BVgqDmQgpDniwDuQivDwjNBuQh0A+hYAAQhEAAgzglg");
	this.shape_1.setTransform(79.6,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai7CKQhNg4AAhQQAAhOBNg4QBNg4BtAAQBrAABNA4QBNA4AABOQAABQhNA4QhNA4hrAAQhtAAhNg4gAvrCFQhMg3AAhOQAAhPBMg5QBOg4BsAAQBtAABOA4QBMA5AABPQAABOhMA3QhOA5htAAQhsAAhOg5gAJ3CEQhNg3ABhOQgBhPBNg5QBOg4BtAAQBtAABMA4QBNA5ABBPQgBBOhNA3QhMA5htAAQhtAAhOg5g");
	this.shape_2.setTransform(-1.4,-79.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// tri
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001100").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_3.setTransform(0,166.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#48BA48").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_4.setTransform(0,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003300").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_5.setTransform(144,-77.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_6.setTransform(-142,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#027502").s().p("AmNOHIsgpYQkhk0EhlyIL4owQGYiaHWCaIMgJYQDMFLjMELItIKAQjDBujIAAQjGAAjNhug");
	this.shape_7.setTransform(-0.1,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// side
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004A00").s().p("AHLRJItuqAQkGkliJmBIAAsgQDMiDDsBbIMeJYQEUEDB8F7IAAMgQhkB6jQAAQgaAAgbgCg");
	this.shape_8.setTransform(-82,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// cube
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#001C00").s().p("Alna6ItwqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhiFLjdENIvALQQi1AgizAAQiyAAi1ggg");
	this.shape_9.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.dice1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkEX4QhBggg1hIQg2hIgMhHQgLhHAmgcQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgArzSNQhBgfg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigRgAPZOlQg5gqAShtQARhtBThwQBThwBjgxQBjgyA5AqQA5AqgSBuQgSBthSBwQhTBwhjAxQg1AbgpAAQgkAAgagUgAzYMjQhBggg1hIQg2hIgMhHQgLhHAmgcQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgAFFMdQg5gqAShtQARhtBThwQBThwBjgxQBjgyA5AqQA5AqgSBuQgSBthSBwQhTBwhjAxQg1AbgpAAQgkAAgagUgAkEL5QhBggg1hIQg2hIgMhHQgLhHAmgcQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgAruGOQhBgfg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigRgAzYAXQhBgdg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBGgmAbQgRANgYAAQgbAAgigRgAh0gwQhEgxAAhGQAAhFBEgxQBEgxBeAAQBgAABDAxQBEAxAABFQAABGhEAxQhDAwhgAAQheAAhEgwgAK+qNQhEgxAAhGQAAhFBEgxQBEgxBgAAQBgAABDAxQBEAxAABFQAABGhEAxQhDAxhgAAQhgAAhEgxgAuuqNQhDgxAAhGQAAhFBDgxQBEgxBgAAQBgAABEAxQBEAxAABFQAABGhEAxQhEAxhgAAQhgAAhEgxgAh0zpQhEgxAAhGQAAhFBEgxQBEgxBeAAQBgAABDAxQBEAxAABFQAABGhEAxQhDAxhgAAQheAAhEgxg");
	this.shape.setTransform(-6.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// tri
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#172E00").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_1.setTransform(0,166.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AAFF39").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_2.setTransform(0,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336700").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_3.setTransform(144,-77.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#69D100").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_4.setTransform(-142,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// top
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#75E602").s().p("AmbOPIsgpYQj0kjD0mDIL4owQGYiaHWCaIMgJYQDWE3jWEfItIKAQjSBejGAAQjIAAi+heg");
	this.shape_5.setTransform(1.3,-76.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// side
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A9400").s().p("AHLRJItuqAQkGkliJmBIAAsgQDMiDDsBbIMeJYQEUEDB8F7IAAMgQhkB6jQAAQgaAAgbgCg");
	this.shape_6.setTransform(-82,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// cube
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C3700").s().p("Alna6ItwqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhiFLjdENIvALQQi1AgizAAQiyAAi1ggg");
	this.shape_7.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.dice0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AoBNBQg6goAQhvQARhvBQh1QBRh1Bhg2QBig3A6AoQA6AogQBvQgQBvhRB1QhQB1hiA2Qg5AggrAAQgfAAgZgRgAB9kLQg6goAQhvQARhvBQh1QBRh1Bhg2QBig3A6AoQA6AogQBvQgQBvhRB1QhQB1hiA2Qg5AggrAAQgfAAgZgRg");
	this.shape.setTransform(82.5,57.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AGyNpQhHgcg5hJQg6hKgLhLQgLhMAqggQApghBHAcQBHAdA5BKQA6BJALBLQALBMgqAhQgWARgeAAQgbAAghgOgAl2ECQhHgcg5hJQg6hKgLhLQgLhKAqggQApghBHAcQBHAdA5BKQA6BHALBLQALBMgqAhQgWARgeAAQgbAAghgOgAGoBnQhHgcg5hJQg6hIgLhLQgLhMAqggQApghBHAcQBHAdA5BKQA6BJALBLQALBKgqAhQgWARgeAAQgbAAghgOgAl7n+QhHgcg5hJQg6hKgLhLQgLhMAqggQApghBHAcQBHAdA5BKQA6BJALBLQALBMgqAhQgWARgeAAQgbAAghgOg");
	this.shape_1.setTransform(-80.9,58.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("An4GBQjSigAAjhQAAjgDSigQDRifEngBQEoABDRCfQDSCgAADgQAADhjSCgQjRCfkoABQkngBjRifg");
	this.shape_2.setTransform(0.5,-79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// tri
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A0013").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_3.setTransform(0,166.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6500C9").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_4.setTransform(-142,-77.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330067").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_5.setTransform(144,-77.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B544FF").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_6.setTransform(0,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7502E6").s().p("AmMOKIsgpYQkekZEemNIL4owQGYiaHWCaIMgJYQDEFLjEELItIKAQjDBojIAAQjGAAjNhog");
	this.shape_7.setTransform(-0.2,-75.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// side
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A0094").s().p("AHLRJItuqAQkGkliJmBIAAsgQDMiDDsBbIMeJYQEUEDB8F7IAAMgQhkB6jQAAQgaAAgbgCg");
	this.shape_8.setTransform(-82,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// cube
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330067").s().p("Alna6ItwqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhiFLjdENIvALQQi1AgizAAQiyAAi1ggg");
	this.shape_9.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


// stage content:
(lib.areadice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dice
	this.instance = new lib.dice0();
	this.instance.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_1 = new lib.dice0();
	this.instance_1.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_2 = new lib.dice0();
	this.instance_2.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_3 = new lib.dice0();
	this.instance_3.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_4 = new lib.dice0();
	this.instance_4.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_5 = new lib.dice0();
	this.instance_5.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_6 = new lib.dice0();
	this.instance_6.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_7 = new lib.dice0();
	this.instance_7.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_8 = new lib.dice1();
	this.instance_8.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_9 = new lib.dice1();
	this.instance_9.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_10 = new lib.dice1();
	this.instance_10.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_11 = new lib.dice1();
	this.instance_11.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_12 = new lib.dice1();
	this.instance_12.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_13 = new lib.dice1();
	this.instance_13.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_14 = new lib.dice1();
	this.instance_14.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_15 = new lib.dice1();
	this.instance_15.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_16 = new lib.dice2();
	this.instance_16.setTransform(39.1,71.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_17 = new lib.dice2();
	this.instance_17.setTransform(39.1,71.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_18 = new lib.dice2();
	this.instance_18.setTransform(39.1,71.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_19 = new lib.dice2();
	this.instance_19.setTransform(39.1,71.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_20 = new lib.dice2();
	this.instance_20.setTransform(18.6,63.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_21 = new lib.dice2();
	this.instance_21.setTransform(18.6,63.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_22 = new lib.dice2();
	this.instance_22.setTransform(18.6,63.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_23 = new lib.dice2();
	this.instance_23.setTransform(18.6,63.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_24 = new lib.dice3();
	this.instance_24.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_25 = new lib.dice3();
	this.instance_25.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_26 = new lib.dice3();
	this.instance_26.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_27 = new lib.dice3();
	this.instance_27.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_28 = new lib.dice3();
	this.instance_28.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_29 = new lib.dice3();
	this.instance_29.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_30 = new lib.dice3();
	this.instance_30.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_31 = new lib.dice3();
	this.instance_31.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_32 = new lib.dice4();
	this.instance_32.setTransform(39.1,71.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_33 = new lib.dice4();
	this.instance_33.setTransform(39.1,71.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_34 = new lib.dice4();
	this.instance_34.setTransform(39.1,71.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_35 = new lib.dice4();
	this.instance_35.setTransform(39.1,71.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_36 = new lib.dice4();
	this.instance_36.setTransform(18.6,63.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_37 = new lib.dice4();
	this.instance_37.setTransform(18.6,63.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_38 = new lib.dice4();
	this.instance_38.setTransform(18.6,63.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_39 = new lib.dice4();
	this.instance_39.setTransform(18.6,63.9,0.085,0.085,0,0,0,0.6,-1.2);

	this.instance_40 = new lib.dice5();
	this.instance_40.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_41 = new lib.dice5();
	this.instance_41.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_42 = new lib.dice5();
	this.instance_42.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_43 = new lib.dice5();
	this.instance_43.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_44 = new lib.dice5();
	this.instance_44.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_45 = new lib.dice5();
	this.instance_45.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_46 = new lib.dice5();
	this.instance_46.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_47 = new lib.dice5();
	this.instance_47.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_48 = new lib.dice6();
	this.instance_48.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_49 = new lib.dice6();
	this.instance_49.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_50 = new lib.dice6();
	this.instance_50.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_51 = new lib.dice6();
	this.instance_51.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_52 = new lib.dice6();
	this.instance_52.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_53 = new lib.dice6();
	this.instance_53.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_54 = new lib.dice6();
	this.instance_54.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_55 = new lib.dice6();
	this.instance_55.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_56 = new lib.dice7();
	this.instance_56.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_57 = new lib.dice7();
	this.instance_57.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_58 = new lib.dice7();
	this.instance_58.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_59 = new lib.dice7();
	this.instance_59.setTransform(39,71.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_60 = new lib.dice7();
	this.instance_60.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_61 = new lib.dice7();
	this.instance_61.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_62 = new lib.dice7();
	this.instance_62.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.instance_63 = new lib.dice7();
	this.instance_63.setTransform(18.5,63.9,0.085,0.085,0,0,0,0,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:71.9}}]}).to({state:[{t:this.instance_1,p:{y:71.9}},{t:this.instance,p:{y:57.9}}]},1).to({state:[{t:this.instance_2,p:{y:71.9}},{t:this.instance_1,p:{y:57.9}},{t:this.instance,p:{y:43.9}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{y:57.9}},{t:this.instance_1,p:{y:43.9}},{t:this.instance,p:{y:29.9}}]},1).to({state:[{t:this.instance_4,p:{y:63.9}},{t:this.instance_3},{t:this.instance_2,p:{y:57.9}},{t:this.instance_1,p:{y:43.9}},{t:this.instance,p:{y:29.9}}]},1).to({state:[{t:this.instance_5,p:{y:63.9}},{t:this.instance_4,p:{y:49.9}},{t:this.instance_3},{t:this.instance_2,p:{y:57.9}},{t:this.instance_1,p:{y:43.9}},{t:this.instance,p:{y:29.9}}]},1).to({state:[{t:this.instance_6,p:{y:63.9}},{t:this.instance_5,p:{y:49.9}},{t:this.instance_4,p:{y:35.9}},{t:this.instance_3},{t:this.instance_2,p:{y:57.9}},{t:this.instance_1,p:{y:43.9}},{t:this.instance,p:{y:29.9}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6,p:{y:49.9}},{t:this.instance_5,p:{y:35.9}},{t:this.instance_4,p:{y:21.9}},{t:this.instance_3},{t:this.instance_2,p:{y:57.9}},{t:this.instance_1,p:{y:43.9}},{t:this.instance,p:{y:29.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_8,p:{y:71.9}}]},2).to({state:[{t:this.instance_9,p:{y:71.9}},{t:this.instance_8,p:{y:57.9}}]},1).to({state:[{t:this.instance_10,p:{y:71.9}},{t:this.instance_9,p:{y:57.9}},{t:this.instance_8,p:{y:43.9}}]},1).to({state:[{t:this.instance_11},{t:this.instance_10,p:{y:57.9}},{t:this.instance_9,p:{y:43.9}},{t:this.instance_8,p:{y:29.9}}]},1).to({state:[{t:this.instance_12,p:{y:63.9}},{t:this.instance_11},{t:this.instance_10,p:{y:57.9}},{t:this.instance_9,p:{y:43.9}},{t:this.instance_8,p:{y:29.9}}]},1).to({state:[{t:this.instance_13,p:{y:63.9}},{t:this.instance_12,p:{y:49.9}},{t:this.instance_11},{t:this.instance_10,p:{y:57.9}},{t:this.instance_9,p:{y:43.9}},{t:this.instance_8,p:{y:29.9}}]},1).to({state:[{t:this.instance_14,p:{y:63.9}},{t:this.instance_13,p:{y:49.9}},{t:this.instance_12,p:{y:35.9}},{t:this.instance_11},{t:this.instance_10,p:{y:57.9}},{t:this.instance_9,p:{y:43.9}},{t:this.instance_8,p:{y:29.9}}]},1).to({state:[{t:this.instance_15},{t:this.instance_14,p:{y:49.9}},{t:this.instance_13,p:{y:35.9}},{t:this.instance_12,p:{y:21.9}},{t:this.instance_11},{t:this.instance_10,p:{y:57.9}},{t:this.instance_9,p:{y:43.9}},{t:this.instance_8,p:{y:29.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_16,p:{y:71.9}}]},2).to({state:[{t:this.instance_17,p:{y:71.9}},{t:this.instance_16,p:{y:57.9}}]},1).to({state:[{t:this.instance_18,p:{y:71.9}},{t:this.instance_17,p:{y:57.9}},{t:this.instance_16,p:{y:43.9}}]},1).to({state:[{t:this.instance_19},{t:this.instance_18,p:{y:57.9}},{t:this.instance_17,p:{y:43.9}},{t:this.instance_16,p:{y:29.9}}]},1).to({state:[{t:this.instance_20,p:{y:63.9}},{t:this.instance_19},{t:this.instance_18,p:{y:57.9}},{t:this.instance_17,p:{y:43.9}},{t:this.instance_16,p:{y:29.9}}]},1).to({state:[{t:this.instance_21,p:{y:63.9}},{t:this.instance_20,p:{y:49.9}},{t:this.instance_19},{t:this.instance_18,p:{y:57.9}},{t:this.instance_17,p:{y:43.9}},{t:this.instance_16,p:{y:29.9}}]},1).to({state:[{t:this.instance_22,p:{y:63.9}},{t:this.instance_21,p:{y:49.9}},{t:this.instance_20,p:{y:35.9}},{t:this.instance_19},{t:this.instance_18,p:{y:57.9}},{t:this.instance_17,p:{y:43.9}},{t:this.instance_16,p:{y:29.9}}]},1).to({state:[{t:this.instance_23},{t:this.instance_22,p:{y:49.9}},{t:this.instance_21,p:{y:35.9}},{t:this.instance_20,p:{y:21.9}},{t:this.instance_19},{t:this.instance_18,p:{y:57.9}},{t:this.instance_17,p:{y:43.9}},{t:this.instance_16,p:{y:29.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_24,p:{y:71.9}}]},2).to({state:[{t:this.instance_25,p:{y:71.9}},{t:this.instance_24,p:{y:57.9}}]},1).to({state:[{t:this.instance_26,p:{y:71.9}},{t:this.instance_25,p:{y:57.9}},{t:this.instance_24,p:{y:43.9}}]},1).to({state:[{t:this.instance_27},{t:this.instance_26,p:{y:57.9}},{t:this.instance_25,p:{y:43.9}},{t:this.instance_24,p:{y:29.9}}]},1).to({state:[{t:this.instance_28,p:{y:63.9}},{t:this.instance_27},{t:this.instance_26,p:{y:57.9}},{t:this.instance_25,p:{y:43.9}},{t:this.instance_24,p:{y:29.9}}]},1).to({state:[{t:this.instance_29,p:{y:63.9}},{t:this.instance_28,p:{y:49.9}},{t:this.instance_27},{t:this.instance_26,p:{y:57.9}},{t:this.instance_25,p:{y:43.9}},{t:this.instance_24,p:{y:29.9}}]},1).to({state:[{t:this.instance_30,p:{y:63.9}},{t:this.instance_29,p:{y:49.9}},{t:this.instance_28,p:{y:35.9}},{t:this.instance_27},{t:this.instance_26,p:{y:57.9}},{t:this.instance_25,p:{y:43.9}},{t:this.instance_24,p:{y:29.9}}]},1).to({state:[{t:this.instance_31},{t:this.instance_30,p:{y:49.9}},{t:this.instance_29,p:{y:35.9}},{t:this.instance_28,p:{y:21.9}},{t:this.instance_27},{t:this.instance_26,p:{y:57.9}},{t:this.instance_25,p:{y:43.9}},{t:this.instance_24,p:{y:29.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_32,p:{y:71.9}}]},2).to({state:[{t:this.instance_33,p:{y:71.9}},{t:this.instance_32,p:{y:57.9}}]},1).to({state:[{t:this.instance_34,p:{y:71.9}},{t:this.instance_33,p:{y:57.9}},{t:this.instance_32,p:{y:43.9}}]},1).to({state:[{t:this.instance_35},{t:this.instance_34,p:{y:57.9}},{t:this.instance_33,p:{y:43.9}},{t:this.instance_32,p:{y:29.9}}]},1).to({state:[{t:this.instance_36,p:{y:63.9}},{t:this.instance_35},{t:this.instance_34,p:{y:57.9}},{t:this.instance_33,p:{y:43.9}},{t:this.instance_32,p:{y:29.9}}]},1).to({state:[{t:this.instance_37,p:{y:63.9}},{t:this.instance_36,p:{y:49.9}},{t:this.instance_35},{t:this.instance_34,p:{y:57.9}},{t:this.instance_33,p:{y:43.9}},{t:this.instance_32,p:{y:29.9}}]},1).to({state:[{t:this.instance_38,p:{y:63.9}},{t:this.instance_37,p:{y:49.9}},{t:this.instance_36,p:{y:35.9}},{t:this.instance_35},{t:this.instance_34,p:{y:57.9}},{t:this.instance_33,p:{y:43.9}},{t:this.instance_32,p:{y:29.9}}]},1).to({state:[{t:this.instance_39},{t:this.instance_38,p:{y:49.9}},{t:this.instance_37,p:{y:35.9}},{t:this.instance_36,p:{y:21.9}},{t:this.instance_35},{t:this.instance_34,p:{y:57.9}},{t:this.instance_33,p:{y:43.9}},{t:this.instance_32,p:{y:29.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_40,p:{y:71.9}}]},2).to({state:[{t:this.instance_41,p:{y:71.9}},{t:this.instance_40,p:{y:57.9}}]},1).to({state:[{t:this.instance_42,p:{y:71.9}},{t:this.instance_41,p:{y:57.9}},{t:this.instance_40,p:{y:43.9}}]},1).to({state:[{t:this.instance_43},{t:this.instance_42,p:{y:57.9}},{t:this.instance_41,p:{y:43.9}},{t:this.instance_40,p:{y:29.9}}]},1).to({state:[{t:this.instance_44,p:{y:63.9}},{t:this.instance_43},{t:this.instance_42,p:{y:57.9}},{t:this.instance_41,p:{y:43.9}},{t:this.instance_40,p:{y:29.9}}]},1).to({state:[{t:this.instance_45,p:{y:63.9}},{t:this.instance_44,p:{y:49.9}},{t:this.instance_43},{t:this.instance_42,p:{y:57.9}},{t:this.instance_41,p:{y:43.9}},{t:this.instance_40,p:{y:29.9}}]},1).to({state:[{t:this.instance_46,p:{y:63.9}},{t:this.instance_45,p:{y:49.9}},{t:this.instance_44,p:{y:35.9}},{t:this.instance_43},{t:this.instance_42,p:{y:57.9}},{t:this.instance_41,p:{y:43.9}},{t:this.instance_40,p:{y:29.9}}]},1).to({state:[{t:this.instance_47},{t:this.instance_46,p:{y:49.9}},{t:this.instance_45,p:{y:35.9}},{t:this.instance_44,p:{y:21.9}},{t:this.instance_43},{t:this.instance_42,p:{y:57.9}},{t:this.instance_41,p:{y:43.9}},{t:this.instance_40,p:{y:29.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_48,p:{y:71.9}}]},2).to({state:[{t:this.instance_49,p:{y:71.9}},{t:this.instance_48,p:{y:57.9}}]},1).to({state:[{t:this.instance_50,p:{y:71.9}},{t:this.instance_49,p:{y:57.9}},{t:this.instance_48,p:{y:43.9}}]},1).to({state:[{t:this.instance_51},{t:this.instance_50,p:{y:57.9}},{t:this.instance_49,p:{y:43.9}},{t:this.instance_48,p:{y:29.9}}]},1).to({state:[{t:this.instance_52,p:{y:63.9}},{t:this.instance_51},{t:this.instance_50,p:{y:57.9}},{t:this.instance_49,p:{y:43.9}},{t:this.instance_48,p:{y:29.9}}]},1).to({state:[{t:this.instance_53,p:{y:63.9}},{t:this.instance_52,p:{y:49.9}},{t:this.instance_51},{t:this.instance_50,p:{y:57.9}},{t:this.instance_49,p:{y:43.9}},{t:this.instance_48,p:{y:29.9}}]},1).to({state:[{t:this.instance_54,p:{y:63.9}},{t:this.instance_53,p:{y:49.9}},{t:this.instance_52,p:{y:35.9}},{t:this.instance_51},{t:this.instance_50,p:{y:57.9}},{t:this.instance_49,p:{y:43.9}},{t:this.instance_48,p:{y:29.9}}]},1).to({state:[{t:this.instance_55},{t:this.instance_54,p:{y:49.9}},{t:this.instance_53,p:{y:35.9}},{t:this.instance_52,p:{y:21.9}},{t:this.instance_51},{t:this.instance_50,p:{y:57.9}},{t:this.instance_49,p:{y:43.9}},{t:this.instance_48,p:{y:29.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_56,p:{y:71.9}}]},2).to({state:[{t:this.instance_57,p:{y:71.9}},{t:this.instance_56,p:{y:57.9}}]},1).to({state:[{t:this.instance_58,p:{y:71.9}},{t:this.instance_57,p:{y:57.9}},{t:this.instance_56,p:{y:43.9}}]},1).to({state:[{t:this.instance_59},{t:this.instance_58,p:{y:57.9}},{t:this.instance_57,p:{y:43.9}},{t:this.instance_56,p:{y:29.9}}]},1).to({state:[{t:this.instance_60,p:{y:63.9}},{t:this.instance_59},{t:this.instance_58,p:{y:57.9}},{t:this.instance_57,p:{y:43.9}},{t:this.instance_56,p:{y:29.9}}]},1).to({state:[{t:this.instance_61,p:{y:63.9}},{t:this.instance_60,p:{y:49.9}},{t:this.instance_59},{t:this.instance_58,p:{y:57.9}},{t:this.instance_57,p:{y:43.9}},{t:this.instance_56,p:{y:29.9}}]},1).to({state:[{t:this.instance_62,p:{y:63.9}},{t:this.instance_61,p:{y:49.9}},{t:this.instance_60,p:{y:35.9}},{t:this.instance_59},{t:this.instance_58,p:{y:57.9}},{t:this.instance_57,p:{y:43.9}},{t:this.instance_56,p:{y:29.9}}]},1).to({state:[{t:this.instance_63},{t:this.instance_62,p:{y:49.9}},{t:this.instance_61,p:{y:35.9}},{t:this.instance_60,p:{y:21.9}},{t:this.instance_59},{t:this.instance_58,p:{y:57.9}},{t:this.instance_57,p:{y:43.9}},{t:this.instance_56,p:{y:29.9}}]},1).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.914)").s().p("AgxBkIgCAAIg8gVIgBgBIhGgxIgBgBIgKgKIgBgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADgCICThHIAAgfIANgGIACgBIBnAAIAAACQAbADAgAPQAgAbAaAfQAJAUgJATQgWAcgeAYQgWASgrAKIAAACg");
	this.shape.setTransform(46.5,78.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.914)").s().p("AhABkIgCAAIg8gVIgBgBIhGgxIgBgBIgKgKIgBgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADgCIDahsIACgBIBpAAIAAAIQAOAFAPAHQAgAbAaAfQAJAUgJATQgWAcgeAYQgOALgVAIIAAALg");
	this.shape_1.setTransform(48,78.8);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.914)").s().p("AhPBkIgCAAIg8gVIgBgBIhGgxIgBgBIgKgKIgBgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADgCIDchsIABgBIBoAAIAAACQAbADAgAPQAgAbAaAfQAJAUgJATQgWAcgeAYQgWASgrAKIAAACg");
	this.shape_2.setTransform(49.5,78.8);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.914)").s().p("AheBkIgCAAIg8gVIgBgBIhGgxIgBgBIgKgKIgBgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADgCIDchsIACgBIB5AAQAhACAmASQAgAbAaAfQAJAUgJATQgWAcgeAYQgYATgyALg");
	this.shape_3.setTransform(51,78.8);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(4).to({_off:true},3).wait(3).to({_off:false},0).wait(4).to({_off:true},3).wait(3).to({_off:false},0).wait(4).to({_off:true},3).wait(3).to({_off:false},0).wait(4).to({_off:true},3).wait(3).to({_off:false},0).wait(4).to({_off:true},3).wait(3).to({_off:false},0).wait(4).to({_off:true},3).wait(3).to({_off:false},0).wait(4).to({_off:true},3).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,256.9,41.1,31.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;