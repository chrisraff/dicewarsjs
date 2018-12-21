(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 840,
	height: 840,
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



(lib.YOUWIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("A4kFoQhfgdg2hLQhFhfAAiiQAAidA5haQAuhJBbggQBEgZBhAAQCbAABVA8QBIAyAdBfQAVBFAABoQAADOhuBeQhbBPifAAIAAAAQhSAAg9gTgA4ojAQg1BBAAB+QAAB2AcA3QAuBWB9AAQBuAAAwhHQApg+AAh8QAAiOg5g/QgwgzheAAIAAAAQhdAAg1A/gAqNFzQjWAAhChpQghgzAAh0IAAnOICSAAIAAG0IAAAiQAABAAZAjQAnA1BnAAQBcAAAjgpQAkgpAAhoIAAm0ICTAAIAAG4IAAAkQAABsgtA5QhJBdjAAAIAAAAgEAkdAFrIAAh/ICTAAIAAB/gAfTFrIk5onIAAInIiTAAIAArWIC/AAIEqIKIAAoKICQAAIAALWgATQFrIAArWICcAAIAALWgALyFrIiZocIgEAAIiIIcIi1AAIjvrWICdAAICmIvIAEAAICNovICxAAIClI2ICco2ICXAAIjdLWgEgieAFrIgClBIkPmVICnAAICyEXIC1kXICsAAIkTGVIAAFBgEAkdACvIAAoaICTAAIAAIag");
	this.shape.setTransform(252,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3pG2IAAAAIgBAAQizgXhciaQg8hkgHh3QgIiAAth2Ii1EJIAAEuQAAAZgSASIAAAAQgRARgZAAIiWAAQgZABgRgSQgSgSAAgYIgBkwIkGmGQgMgSADgXQACgWASgPQARgPAWAAICnAAQAPAAAOAHIABABQANAIAIAMIAAAAICADJICCjJIAAAAQAIgNANgHIABgBIAAAAIAAAAQANgHAPAAICtAAQAWAAARAPIAAAAQARAPADAWIAAABQACAMgDALQAjgfAvgSQCLg3CYANIACABQDrAZBPDcIABACIAAABIAGAYIAAjGQAAgZASgRIAAAAQARgSAZAAICSAAQAZAAARASIABAAQARARAAAZIAAG0IAAAjQAAAmAMAXIABAAIAAABIAAABIAAgBQAcAdBCAAQA5AAAZgUQAVgfAAhLIAAm0QgBgZASgRIAAAAQASgSAZAAICTAAQAZAAARASIABAAQARARAAAZIAAG5IAAAkQAACBg3BFIgCADQhVB1jkAAQj/AAhMiFIAAAAQgjgzgGhpIgDANIAAAAQgwDFjAA8QhYAdhbAAQghAAghgEgA3zibQhKCDAsCSIABACQACAJAFAGIABACQAvBFBWgMIACAAQBSgHAXhOQAriUhKiCQgOgNgTgHIgBAAQhMgZhCArIAAAAQgHAFgFAHIABgBIgBABgAHNGnIi1AAQgUAAgQgLIABAAQgQgLgGgTIgBgBIjsrVQgGgTAGgTIABgBQAGgRAMgLIABAAQAPgMAUAAICdAAQAUAAAQAMQAQAMAGATIBpFmIBZljIABAAIAAgBQAFgTAQgNIACgBQAPgMAUAAICxAAQAUAAAQAMQAQAMAGATIBqFtIBjlqIAAgBQAFgUAQgMIABAAQAQgNAUAAICXAAQATAAAQALIABABIABABIAAAAQAQgNAVAAICcAAQAZAAARASIABAAQARARAAAZIAALWQAAAZgRASIgBAAQgRARgZAAIicAAQgYAAgSgRIAAAAQgSgSAAgZIAAo1IiyJHQgFATgQALQgQAMgUAAIi3AAQgUABgQgNIAAAAQgQgMgGgTIAAAAIhelOIhSFLIgBABIAAAAQgFAUgQANIAAAAQgQAMgUAAIgBAAgEAmwAGnIiTAAQgZAAgSgRIAAAAQgSgSABgZIAAh/QgBgQAJgOQgJgNABgRIAAobQgBgZASgRIAAAAQASgSAZAAICTAAQAZAAARASIABAAQARARAAAZIAAIbQAAARgIANQAIAOAAAQIAAB/QAAAZgRASIgBAAQgRARgZAAIAAAAgEAiAAGnIitAAQgQAAgNgIIgBAAIAAAAQgOgIgIgOIAAgBIjIliIAAFFQAAAZgSASIAAAAQgSARgYAAIiUAAQgZAAgRgRIAAAAQgSgSAAgZIAArWQAAgZASgRIAAAAQARgSAZAAIDAAAQAPAAAOAIIABABIAAAAQAOAIAIANIAAACIC5FGIAAkqQAAgZASgRIAAAAQARgSAZAAICQAAQAZAAARASIABAAQARARAAAZIAALWQAAAZgRASIgBAAQgRARgZAAIAAAAg");
	this.shape_1.setTransform(251.9,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// レイヤー 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.502)").s().p("A3oHAIgBAAIgCAAIgBAAQi3gYheieQg+hmgHh5QgGhfAXhbIiNDPIAAErQAAAdgVAVIAAAAQgUAUgdAAIiWAAQgdABgUgVQgVgVAAgcIgBktIkEmDQgPgWAEgaQADgaAUgRQAUgSAaAAICnAAQASAAAQAJIABAAIABABQANAIAJAMIABACIB4C8IB5i8IABgBQAKgOAOgIIABgBIABAAIABgBQAPgHAQAAICtAAQAZAAAUARIABABQAUARADAaIAAAAIAAADQAfgWAkgPQCOg4CaAOIADABQDgAZBVDEIAAiJQAAgdAVgUIAAAAQAUgVAdAAICSAAQAdAAAUAVIABAAQAUAUAAAdIAAG0IAAAjQAAAjALAVQAaAZA8AAQA0AAAWgRQATgeAAhFIAAm0QAAgdAUgUIAAAAQAVgVAdAAICTAAQAdAAAUAVIABAAQAUAUAAAdIAAG5IAAAkQAACEg4BHIgDAEIAAABQhXB4jqAAQkGAAhOiKIAAgBQgagmgKhEQg7CqixA4QhZAdhdAAQggAAghgEgA2EC8IACAAIAAAAQBLgGAVhIQAqiPhHh+QgMgLgRgGIABAAIgBAAIAAAAQhHgWg9AnIgBABQgGADgDAFIAAAAQhIB/ArCOIAAgBIAAADQACAHAEAGIAAgBIABACIAAAAQArBBBRgMgAHNGxIi1AAQgXAAgTgNIgBgBQgRgNgHgUIAAgBIgBgCIABABIjtrVQgHgWAHgWIABgCQAHgTAQgNIABgBQASgNAWAAICdAAQAXAAATAOQATAOAGAXIBfFCIBRk/IAAgBIAAAAQAGgXATgPIACgBIAAAAQASgOAXAAICxAAQAYAAASAOQATAOAGAXIBgFKIBalIIAAgBQAGgXATgOIACgCQASgNAXAAICXAAQAUAAARALQARgLAUAAICcAAQAdAAAUAVIABAAQAUAUAAAdIAALWQAAAdgUAVIgBAAQgUAUgdAAIicAAQgdAAgUgUIAAAAQgVgVAAgdIAAnyIieIHQgHAWgSANQgTAOgXAAIi3AAQgYABgSgPIAAAAQgTgOgGgXIgBgCIhTknIhKEnIAAAAIAAABQgGAWgRAOIgCACQgTAOgXAAIgBAAgEAkdAGxQgdAAgVgUIAAAAQgUgVAAgdIAAh/QAAgQAGgOQgGgOAAgQIAAobQAAgdAUgUIAAAAQAVgVAdAAICTAAQAdAAAUAVIABAAQAUAUAAAdIAAIbQAAAQgHAOQAHAOAAAQIAAB/QAAAdgUAVIgBAAQgUAUgdAAgAfTGxQgSAAgQgJIAAAAIgCgCQgQgJgIgPIgBgBIi1lBIAAEfQAAAdgVAVIAAAAQgVAUgcAAIiUAAQgdAAgUgUIAAAAQgVgVAAgdIAArWQAAgdAVgUIAAAAQAUgVAdAAIDAAAQASAAAQAKIAAAAIACABQAPAJAJAPIABACICmElIAAkEQAAgdAVgUIAAAAQAUgVAdAAICQAAQAdAAAUAVIABAAQAUAUAAAdIAALWQAAAdgUAVIgBAAQgUAUgdAAg");
	this.shape_2.setTransform(251.9,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// レイヤー 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.502)").s().p("A3oHAIgBAAIgCAAIgBAAQi3gYheieQg+hmgHh5QgGhfAXhbIiNDPIAAErQAAAdgVAVIAAAAQgUAUgdAAIiWAAQgdABgUgVQgVgVAAgcIgBktIkEmDQgPgWAEgaQADgaAUgRQAUgSAaAAICnAAQASAAAQAJIABAAIABABQANAIAJAMIABACIB4C8IB5i8IABgBQAKgOAOgIIABgBIABAAIABgBQAPgHAQAAICtAAQAZAAAUARIABABQAUARADAaIAAAAIAAADQAfgWAkgPQCOg4CaAOIADABQDgAZBVDEIAAiJQAAgdAVgUIAAAAQAUgVAdAAICSAAQAdAAAUAVIABAAQAUAUAAAdIAAG0IAAAjQAAAjALAVQAaAZA8AAQA0AAAWgRQATgeAAhFIAAm0QAAgdAUgUIAAAAQAVgVAdAAICTAAQAdAAAUAVIABAAQAUAUAAAdIAAG5IAAAkQAACEg4BHIgDAEIAAABQhXB4jqAAQkGAAhOiKIAAgBQgagmgKhEQg7CqixA4QhZAdhdAAQggAAghgEgA2EC8IACAAIAAAAQBLgGAVhIQAqiPhHh+QgMgLgRgGIABAAIgBAAIAAAAQhHgWg9AnIgBABQgGADgDAFIAAAAQhIB/ArCOIAAgBIAAADQACAHAEAGIAAgBIABACIAAAAQArBBBRgMgAHNGxIi1AAQgXABgTgOIgBgBQgRgNgHgUIAAgBIgBgCIABABIjtrVQgHgWAHgWIABgCQAHgTAQgNIABgBQASgNAWAAICdAAQAXAAATAOQASAOAHAXIBfFCIBRk/IAAgBIAAAAQAGgXATgPIACgBIAAAAQASgOAXAAICxAAQAYAAASAOQATAOAGAXIBgFKIBalIIAAgBQAGgXATgOIACgCQASgNAXAAICXAAQAUAAARALQARgLAUAAICcAAQAdAAAUAVIABAAQAUAUAAAdIAALWQAAAdgUAVIgBAAQgUAUgdAAIicAAQgdAAgUgUIAAAAQgVgVAAgdIAAnyIieIHQgHAWgSANQgTAOgXAAIi3AAQgYABgSgPIAAAAQgTgOgGgXIgBgCIhTknIhKEnIAAAAIAAABQgGAWgRAOIgCACQgTAOgXAAIgBAAgEAkdAGxQgdAAgVgUIAAAAQgUgVAAgdIAAh/QAAgQAGgOQgGgOAAgQIAAobQAAgdAUgUIAAAAQAVgVAdAAICTAAQAdAAAUAVIABAAQAUAUAAAdIAAIbQAAAQgHAOQAHAOAAAQIAAB/QAAAdgUAVIgBAAQgUAUgdAAgAfTGxQgSAAgQgJIAAAAIgCgCQgQgJgIgPIgBgBIi1lBIAAEfQAAAdgVAVIAAAAQgVAUgcAAIiUAAQgdAAgUgUIAAAAQgVgVAAgdIAArWQAAgdAVgUIAAAAQAUgVAdAAIDAAAQASAAAQAKIAAAAIACABQAPAJAJAPIABACICmElIAAkEQAAgdAVgUIAAAAQAUgVAdAAICQAAQAdAAAUAVIABAAQAUAUAAAdIAALWQAAAdgUAVIgBAAQgUAUgdAAg");
	this.shape_3.setTransform(254.1,48.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-2.4,512.3,96.3);


(lib.symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("EAojAHbIjBlJIAAgOIDJFXgEAhhAHbIAAufIEIAAQCcAAA+APQA8AOAtAhQAUAPAQATIgQgOQgtghg8gOQg+gPicAAIkIAAIAAOLgAaoHbIgqiSIAPAAIApCSgAPlHbIFAufIE+AAIAHAUIkxAAIk5OLgAHPHbIhzmMIgThJIAIgeIAKApIAVBSIBuF4gAg8HbIkGufID/AAIAFAUIjwAAIEAOLgAx8HbIAAufII6AAIAAAUIomAAIAAOLgEgpAAHbIAAufID/AAIAAAUIjrAAIAAOLgEg5nAHbIAAufIDCAAQDYAABaAUQBaAVBEAvQAkAaAeAfQgWgUgYgRQhEgvhagVQhagUjYAAIjCAAIAAOLgEAvlAFsIBzi9IATAVIhxC7IgVgTgEggVAD6Qg3hqAAiFQAAhoAjhXQAjhYBFhHQBChEBUgiQBSghBmAAQA9AAA7AOQA8APA8AdIAAALQgygXgygMQg7gOg9AAQhmAAhSAhQhUAihCBEQhFBHgjBYQgjBXAABoQAACFA3BqQAeA5AsAvQg6g2gkhGgEAzbAEjQgugbgvgxQAlAjAkAVQA3AgA2AAQAzAAAhgcQAhgbAAgqQAAgigPgWIAHAFQAcAZAAAuQAAAqghAbQghAcgzAAQg2AAg3gggA70DeIgEgEQBAA5BfAAQA7AAA0gaQAzgcA0g6IAAApQgqArgpAWQg0Aag7AAQhrAAhEhJgAtxEfIAAgUIEvAAIAAAUgEg1YAEfIAAgUIAXAAQCVAABEg9QBFg9AAiGQAAhzg1g+IAEAEQBFA+AACDQAACGhFA9QhEA9iVAAgABLBZIAEgQIAUhRIB1m8IDMAAIAFAUIi9AAIh1G6IgUBTIgMA4IgMg8gAVbCUIAGgUIDiAAIhekxIgMgtIgHgdIAHgfIAUBQIAMAtIBeExgAI/BTIAIgoQAHggAGgVIBtm6IEAAAIgGAUIjmAAIhtG4QgGAXgHAgIgQBRIgMg9gEAliAAFIAAgSIAbAAQBSAAAmgcQAmgcAAg7QAAg2gVgeIAGAFQAjAdAABGQAAA7gmAcQgmAahSAAgEAxLgALQg4g7AAhnQAAiFBZhUQBZhUCPAAQBMAABGAVQBEAUA+AqIgDAFQgzgfg4gQQhGgVhMAAQiPAAhZBUQhZBUAACFQAABhAyA4IgOgLgEA2YgBWIgLgDQhIgTgYgVQgJgHgFgJQAaATBAARIALADQCbAqAxAyIAJAKQg2gtiLglgAtxhDIAAgUIEcAAIAAAUgA2MiVIAJAJIAAABIgJgKg");
	this.shape.setTransform(-10.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9C00").s().p("EAxpAHGQhQghhKhGIBzi8QA4BAA3AfQA3AgA3AAQAyAAAigbQAggbAAgqQAAgvgcgYQgcgahlgbQiIgkg4g5Qg5g7AAhnQAAiGBZhTQBahVCOAAQBMAABGAVQBFAUA9AqIhPC3QgsglgtgTQgtgTgtAAQguAAgcAXQgcAVAAAiQAAAjAZAVQAYAVBIATIALADQCbAqAxAyQAhAhASAwQARAwAAA6QAACUhhBaQhhBaijAAQhgAAhQgigA8VHUQhBgSg2glQhohGg2hqQg3hqAAiDQgBhqAkhXQAihXBFhIQBChDBUgiQBSgiBmAAQA9AAA8APQA7AOA8AeIAAEUQgzg5g0gbQg0gbg7AAQhtAAhDBLQhEBKgBB2QAABwBGBJQBEBKBrAAQA7AAA0gbQA0gbAzg7IAAEWQg8Adg7APQg8AOg9AAQhMAAhAgSgEAoNAHPIjUlsIAAFsIjuAAIAAugIEJAAQCbAAA+APQA9AOAsAiQAzAmAaA7QAbA7AABHQAABsg1BDQg0BChnAWID+F3gEAk5gAZIAvAAQBRAAAmgcQAmgcAAg8QAAhGgjgdQgkgehTAAIgyAAgAaSHPIgvinIloAAIgwCnIj8AAIFAugIE+AAIFBOggAWfj5IgQA8IheExID8AAIhekxIgMgtIgUhQIgQBBgAG5HPIhymNIgWhQIgKgqIgJAlQgOA8gHAZIhyGNIjpAAIkGugID/AAIBpG9IAQBCIANBHIANg4IAThRIB1m9IDNAAIB0G6QAJAcAGAgIAPBLIARhSQAGgeAGgXIBtm6IEAAAIkGOggAySHPIAAugII6AAIAADMIlCAAIAAChIEvAAIAADGIkvAAIAACdIFCAAIAADQgEgpWAHPIAAugIEAAAIAAOggEg59AHPIAAugIDCAAQDYAABbAVQBZAUBEAwQBYA9AuBhQAuBgAAB6QAAB6guBgQguBghYA+QhDAvhXAUQhWAUi2AAgEg2CAD/IArAAQCVAABFg9QBEg+AAiEQAAiFhEg+QhFg+iVAAIgrAAg");
	this.shape_1.setTransform(-8.2,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// レイヤー 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C57900").s().p("EAxSAH+QhZglhThOQgQgPgCgVQgDgVAMgSIByi8QAKgRASgHQARgIAUAEQASAFANAOQAxA4AwAbIAAABQAoAXAnAAQAbAAASgNIABAAQAKgJAAgOQAAgRgIgJIAAAAQgYgShQgWQidgqg/hGQhKhHAAiCQAAihBthkQBohlCoAAQBVAABOAYIAAAAQBNAWBGAwQARAMAHAVQAFAUgIAUIhQC3QgIARgQAKQgQAKgUgBQgTgCgOgNQgjgeglgPIAAAAQgjgOghgBQgXAAgOAKIAAABQgFADgBAEQAAAGAFAEIAAABQATANA2AOIALADIABABQCwAvA3A8IAAABQApArAWA7QAVA5gBBFQABCvh1BrQhvBqi9AAQhtAAhagmgA8lIOQhLgVg+gqIABAAQh1hPg+h3IAAAAQg9h2gBiTQAAh2AohhIAAAAQAnhiBNhQIAAgBQBLhMBfgnQBdgmByAAQBEAABDARQBBAPBDAhQAPAHAKAPQAIAPABARIAAEUQAAATgLAPQgLAPgRAHQgRAHgTgEQgSgFgMgNQgsgxgrgXQgmgUgtAAQhRAAgzA3Qg0A7AABdQAABXA1A5IAAAAQAzA3BQAAQAsAAAngUIABAAQAqgYAsgwQAMgOASgFQATgEARAGQARAHALAPQALAQAAASIAAEWQgBARgIAPQgKAOgPAIQhDAghBAQQhDAQhEAAQhVAAhHgUgEAoNAILQgPAAgOgIQgOgIgIgOIhmitIAACPQAAAZgRARQgRASgZAAIjuAAQgZAAgRgSQgSgRAAgZIAAugQAAgZASgRQARgSAZAAIEJAAQClAABCARIgBAAQBKARA2ApQA/AvAhBJQAgBGABBVQAACDhCBQQgpA2hDAfIDRE0QAMATgCAWQgDAXgRAPQgSAPgWAAgEAl0gBVQAvgCAYgOQAOgOAAgaQAAgkgNgQIgBgBQgWgOgxgCgAaSILQgUAAgQgMQgQgNgFgTIgjh7IkOAAIgjB7QgGAUgQAMQgQAMgUAAIj8AAQgTAAgQgMQgQgMgGgSQgGgTAGgTIFBufQAGgSAQgLQAQgMASAAIE+AAQATAAAQAMQAQALAGASIFBOfQAGATgFATQgHASgQAMQgQAMgTAAgAWCA4IBaAAIgtiRgAG5ILQgTAAgRgMQgQgMgFgTIhYkwIhWEvQgGATgQANQgQAMgVAAIjpAAQgUAAgQgMQgRgNgEgTIkGufQgGgTAHgSQAGgSAPgLQAQgLATAAID/AAQAVAAAQANQARANAFAUIBOFOIBYlPQAFgUARgMQAQgNAUAAIDNAAQAUAAAQANQAQAMAFAUIBYFLIBSlKQAEgUAQgNQARgNAUAAIEAAAQATAAAQALQAPALAGASQAHASgFATIkGOfQgGATgQANQgRAMgTAAgAySILQgZAAgRgSQgRgRAAgZIAAugQAAgZARgRQARgSAZAAII6AAQAZAAARASQASARAAAZIAADMQAAAZgSASQgRARgZAAIkHAAIAAApID0AAQAZAAASASQARARAAAZIAADGQAAAZgRARQgSASgZAAIj0AAIAAAlIEHAAQAZAAARARQASASAAAZIAADQQAAAZgSARQgRASgZAAgEgpWAILQgZAAgSgSQgRgRAAgZIAAugQAAgZARgRQASgSAZAAIEAAAQAYAAASASQARARAAAZIAAOgQAAAZgRARQgSASgYAAgEg59AILQgZAAgRgSQgRgRgBgZIAAugQABgZARgRQARgSAZAAIDCAAQDiAABeAWQBlAXBNA3QBmBGA0BvIAAAAQA0BrAACJQAACIg0BsQg0BuhmBHQhMA1hhAYIgBAAQhbAVi/AAgEg1FADDQBrgEA0gqQAxgwAAhlQAAhmgxgwQg0grhrgDg");
	this.shape_2.setTransform(-8.2,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// レイヤー 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#875300").s().p("EAwAAHlQhXgjhRhKQgPgOgCgUQgDgUALgRIBwi0QAJgPASgIQARgHASAEQASAFANANQAwA1AuAaIABABQAmAWAmAAQAbAAARgNIABAAQAKgIAAgNQAAgRgHgIIgBAAQgXgRhOgVQiZgog+hCQhHhEAAh9QAAiYBphfQBmhgCkgBQBTABBMAVIgBAAQBLAWBFAuQARALAGATQAFAUgIAUIhNCtQgIARgQAKQgQAJgTgBQgTgCgOgNQgigcgkgPIAAAAQgigNggAAQgWgBgNAKIgBAAQgFADAAAFQgBAFAFAEIAAABQATANA0ANIALACIABABQCrAtA1A6IABAAQAoAqAVA3QAUA2AABCQAACnhxBmQhtBli3gBQhrAAhXgkgA72H1QhIgUg9gpIABABQhyhMg8hxIAAAAQg8hxAAiLQAAhxAmhcIAAAAQAmhdBMhNIAAAAQBJhJBcglQBagkBvAAQBDAABBAQQA/AOBCAgQAOAHAJAOQAJAOAAAQIAAEIQAAARgKAPQgKAOgRAHQgRAGgSgEQgRgEgNgNQgqgugqgWQgmgTgrgBQhQAAgxA1QgzA5AABXQAABTA0A3IAAAAQAyA0BOAAQArAAAmgTIABAAQApgXAqgtQAMgOASgEQASgFARAGQAQAGALAPQAKAPAAASIAAEIQAAARgJAOQgJANgOAHQhCAfg/APQhBAQhDAAQhSAAhGgTgEAnKAHxQgPABgNgIQgOgIgIgNIhjikIAACHQAAAZgRAQQgRAQgYAAIjnAAQgZAAgRgQQgRgQAAgZIAAtyQAAgZARgQQARgRAZAAIEBAAQChAABBAQIgBAAQBIAQA0AnQA9AtAhBGQAfBDABBQQAAB9hABMQgpAzhAAeIDLElQAMASgDAWQgDAVgQAPQgRANgWAAgEAk1gBRQAugCAYgOQANgNAAgYQAAgjgNgPIAAgBQgWgOgwgBgAZmHxQgTAAgQgLQgQgLgFgTIgih1IkGAAIgjB1QgFATgQALQgQALgTAAIj1AAQgTAAgQgLQgQgLgFgRQgGgSAGgSIE5tzQAFgRAQgLQAPgLATAAIE1AAQASAAAQALQAPALAGARIE5NzQAGASgFASQgGARgQALQgPALgTAAgAVeA1IBXAAIgsiKgAGuHxQgUAAgPgLQgQgMgFgRIhWkiIhUEhQgFATgQALQgQALgUAAIjjAAQgTAAgQgLQgQgLgFgTIj/tzQgFgRAGgRQAGgSAPgLQAPgKATAAID5AAQAUAAAQANQAQAMAFATIBME9IBVk+QAGgTAPgMQAQgMAUAAIDHAAQAUAAAQAMQAPAMAGATIBUE7IBQk7QAEgSARgMQAQgNAUAAID4AAQATAAAPAKQAPALAGASQAHARgFARIkANzQgFATgQALQgQALgTAAgAxzHxQgYAAgSgQQgRgQAAgZIAAtyQAAgZARgQQASgRAYAAIIrAAQAYAAARARQARAQAAAZIAADBQAAAZgRAQQgRAQgYABIkAAAIAAAnIDuAAQAYAAARARQARAQAAAYIAAC8QAAAYgRARQgRAQgYAAIjuAAIAAAkIEAAAQAYAAARAQQARAQAAAYIAADGQAAAZgRAQQgRAQgYAAgEgoRAHxQgZAAgRgQQgRgQAAgZIAAtyQAAgZARgQQARgRAZAAID5AAQAYAAARARQARAQAAAZIAANyQAAAZgRAQQgRAQgYAAgEg4cAHxQgYAAgRgQQgRgQAAgZIAAtyQAAgZARgQQARgRAYAAIC8AAQDdAABbAVQBjAWBLA0QBjBDAyBpIABABQAyBlAACDQAACCgyBnQgzBohjBEQhKAyhgAWQhZAVi5gBgEgztAC6QBpgEAzgoQAvguAAhgQAAhhgvguQgzgphpgDg");
	this.shape_3.setTransform(-8.3,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// レイヤー 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A2D00").s().p("EAvNAHTQhVgihPhIQgPgNgDgTQgDgTAMgQIBtitQAKgPARgHQARgIASAFQASAEAMANQAvAyAuAZIAAABQAmAVAlAAQAbAAARgMIAAAAQAKgIAAgMQAAgQgHgIIAAgBQgXgQhNgUQiWgmg9hAQhGhBAAh4QAAiSBnhcQBlhdChAAQBRABBLAVIAAAAQBJAVBEArQAQALAGATQAGATgIASIhMCoQgIAPgQAKQgQAJgSgCQgTgCgNgLQgigcgjgOIgBAAQghgMgfAAQgWAAgNAIIgBABQgEADgBAEQAAAFAEAEIAAABQATAMAzANIALACIABABQCoArA0A3IABABQAoAoAUA1QAUA0AAA/QAAChhvBiQhrBhi0AAQhqgBhWgigA7ZHiQhHgTg8gnIABAAQhwhJg7htIAAABQg7hsAAiHQAAhsAmhZIAAAAQAkhaBLhJIAAAAQBIhGBbgkQBZgiBtgBQBBABBAAPQA/AOBAAeQAOAGAJAOQAJAOAAAPIAAD9QAAARgKAPQgKANgRAGQgRAHgRgFQgRgDgMgMQgqgtgpgVQglgTgrAAQhOAAgxAzQgyA2AABUQAABQAzA0IAAAAQAxAzBNAAQAqAAAmgSIABAAQAogWAqgtQALgMASgFQARgDARAFQAQAGALAPQAKAOAAAQIAAD/QAAAPgJAOQgJANgOAHQhAAeg/AOQhAAPhBAAQhRAAhFgSgEAmhAHeQgPABgNgIQgNgHgIgNIhhidIAACCQAAAXgRAPQgRARgYgBIjjAAQgYABgRgRQgRgPAAgXIAAtRQAAgYARgQQARgQAYAAID9AAQCeABBAAPIgBAAQBHAPAzAlQA8AsAgBDQAfBAABBNQAAB5g/BJQgoAyg/AbIDIEbQAMARgDAVQgDAUgRAOQgQANgVAAgEAkPgBOQAtgBAXgNQANgNAAgXQAAgjgNgOIAAAAQgWgNgugCgAZLHeQgTABgPgLQgQgMgFgRIghhxIkCAAIgiBxQgGARgPAMQgQALgTgBIjxAAQgTAAgPgKQgQgLgFgRQgFgRAFgRIE0tRQAFgRAQgKQAPgLASAAIEwAAQASAAAPALQAQAKAGARIEzNRQAGARgFARQgGARgPALQgQAKgSAAgAVHAzIBWAAIgriEgAGnHeQgUABgPgLQgPgLgGgSIhUkWIhTEWQgFARgPAMQgQALgTgBIjgAAQgTABgPgLQgQgMgFgRIj7tSQgFgQAGgQQAGgSAPgJQAPgLASAAID1AAQAUAAAPANQAQAMAFARIBLEyIBUkzQAFgRAQgMQAPgMAUAAIDEAAQATAAAQAMQAPAMAFARIBTEwIBPkvQAEgSAQgLQAQgNAUAAID0AAQASAAAQALQAOAJAGASQAHAQgFAQIj8NSQgFARgPAMQgQALgTgBgAxhHeQgXABgSgRQgQgPAAgXIAAtRQAAgYAQgQQASgQAXAAIIiAAQAYAAARAQQAQAQAAAYIAAC6QAAAYgQAPQgRAQgYAAIj8AAIAAAmIDqAAQAYAAARAQQARAQAAAXIAAC0QAAAXgRAQQgRARgYgBIjqAAIAAAjID8AAQAYgBARARQAQAPAAAXIAAC/QAAAXgQAPQgRARgYgBgEgnnAHeQgYABgRgRQgRgPAAgXIAAtRQAAgYARgQQARgQAYAAID1AAQAYAAAQAQQARAQAAAYIAANRQAAAXgRAPQgQARgYgBgEg3hAHeQgYABgRgRQgQgPAAgXIAAtRQAAgYAQgQQARgQAYAAIC5AAQDZAABaAVQBhAUBKAzQBhBAAyBlIAAABQAyBiAAB9QAAB9gyBjQgyBkhhBBQhJAwheAWQhYAUi2gBgEgy3ACzQBngEAygnQAugsAAhcQAAhdgugsQgygnhngDg");
	this.shape_4.setTransform(-8.3,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.2,-53.9,754,109.7);


(lib.td3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkEX4QhBggg1hIQg2hIgMhHQgLhHAmgcQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgArzSNQhBgfg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigRgAPZOlQg5gqAShtQARhtBThwQBThwBjgxQBjgyA5AqQA5AqgSBuQgSBthSBwQhTBwhjAxQg1AbgpAAQgkAAgagUgAzYMjQhBggg1hIQg2hIgMhHQgLhHAmgcQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgAFFMdQg5gqAShtQARhtBThwQBThwBjgxQBjgyA5AqQA5AqgSBuQgSBthSBwQhTBwhjAxQg1AbgpAAQgkAAgagUgAkEL5QhBggg1hIQg2hIgMhHQgLhHAmgcQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgAruGOQhBgfg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigRgAzYAXQhBgdg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBGgmAbQgRANgYAAQgbAAgigRgAh0gwQhEgxAAhGQAAhFBEgxQBEgxBeAAQBgAABDAxQBEAxAABFQAABGhEAxQhDAwhgAAQheAAhEgwgAK+qNQhEgxAAhGQAAhFBEgxQBEgxBgAAQBgAABDAxQBEAxAABFQAABGhEAxQhDAxhgAAQhgAAhEgxgAuuqNQhDgxAAhGQAAhFBDgxQBEgxBgAAQBgAABEAxQBEAxAABFQAABGhEAxQhEAxhgAAQhgAAhEgxgAh0zpQhEgxAAhGQAAhFBEgxQBEgxBeAAQBgAABDAxQBEAxAABFQAABGhEAxQhDAxhgAAQheAAhEgxg");
	this.shape.setTransform(-6.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#130B00").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_1.setTransform(0,166.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB132").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_2.setTransform(0,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D07200").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_3.setTransform(-142,-77.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E3C00").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_4.setTransform(144,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// レイヤー 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E67F02").s().p("AmhN+IsgpYQkJk0EJlyIL4owQGYiaHWCaIMgJYQEDFUkDECItIKAQjDCAjGAAQjIAAjNiAg");
	this.shape_5.setTransform(1.9,-74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// レイヤー 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#945100").s().p("AHLRaItuqAQkHkliJmBIAAsgQDDjsD1DEQHZCyFFGmQGmDmgWGYIAAMgQgHCMi7AAQhGAAhggUg");
	this.shape_6.setTransform(-81.9,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#371E00").s().p("AsEP9Qi6ltC6mzQg4m8HIjCQEOm6I4jGQD1jSCbD6IAANIQhiFJjeENIu+LQQhCANg3AAQiwAAg/iFg");
	this.shape_7.setTransform(77.4,56.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.td2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AkXFJQhkgxhWhxQhWhwgUhsQgVhuA5grQA4grBlAxQBkAxBWBwQBWBvAUBuQAVBug4ArQgbAUgkAAQgpAAg2gagAF7DJQhkgxhWhwQhWhugUhvQgVhuA5grQA4grBlAxQBkAyBWBwQBWBwAUBsQAVBug4ArQgbAUgkAAQgpAAg2gag");
	this.shape.setTransform(-83,58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AoeN3QglgbANhLQAOhMA5hQQA5hRBCgnQBCgmAmAaQAlAbgNBLQgOBMg5BRQg4BQhDAnQgnAWgdAAQgUAAgQgKgAERELQgmgbAOhLQAOhMA4hQQA5hPBCgnQBDgmAmAaQAlAbgOBLQgNBKg5BRQg5BQhCAnQgoAWgdAAQgUAAgPgKgAohBzQgmgbAOhLQAOhKA4hQQA5hRBCgnQBDgmAmAaQAlAbgOBLQgNBMg5BRQg5BOhCAnQgoAWgdAAQgUAAgPgKgAEJnwQgmgbAOhLQAOhMA4hQQA5hRBCgnQBDgmAmAaQAlAbgOBLQgNBMg5BRQg5BQhCAnQgoAWgdAAQgUAAgPgKg");
	this.shape_1.setTransform(80.5,59.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj7MPQhEg0ABhIQgBhHBEg0QBEgyBhAAQBeAABEAyQBDA0AABHQAABIhDA0QhEAyheAAQhhAAhEgygADvGfQhDg0AAhIQAAhHBDg0QBEgyBgAAQBgAABFAyQBEA0gBBHQABBIhEA0QhFAzhggBQhgABhEgzgAwnCzQhDg0AAhHQAAhGBDg0QBEgzBgABQBhgBBEAzQBEA0gBBGQABBHhEA0QhEAyhhAAQhgAAhEgygALfA3QhDg0AAhGQAAhHBDg0QBEgyBgAAQBhAABEAyQBEA0gBBHQABBGhEA0QhEAzhhgBQhgABhEgzgAo/izQhEg0ABhHQgBhIBEg0QBEgzBhABQBggBBEAzQBDA0AABIQAABHhDA0QhEAyhgAAQhhAAhEgygAhboYQhDgyAAhJQAAhIBDgyQBEg0BeAAQBhAABEA0QBEAygBBIQABBJhEAyQhEA0hhAAQheAAhEg0g");
	this.shape_2.setTransform(-0.9,-79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0166").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_3.setTransform(-142,-77.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33001A").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_4.setTransform(0,166.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF5BC5").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_5.setTransform(0,46.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#620031").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_6.setTransform(144,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// レイヤー 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF2396").s().p("AmVOHIsgpYQkYkQEYmWIL4owQGYiaHWCaIMgJYQDiFLjiELItIKAQjIBujGAAQjIAAjIhug");
	this.shape_7.setTransform(0.6,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// レイヤー 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97004C").s().p("AHLRXItuqAQkGkliJmBIAAsgQCdjXEbCvQIdBPEBIJQFoDdAoGhIAAMgQgPCIjBAAQhCAAhXgQg");
	this.shape_8.setTransform(-82,59.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// base
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C001E").s().p("AsaPwQhhl1BhmrQAmmpFqjVQFWnIHwi4QDsicCkDEIAANJQhiFIjeENIu+LQQhOAMg9AAQjPAAgOiEg");
	this.shape_9.setTransform(79.6,58);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.td1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deme
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlTS6QhEghg5hMQg6hLgOhKQgPhKAmgcQAlgdBDAhQBEAiA5BLQA6BMAOBJQAPBKgmAdQgRANgXAAQgcAAgkgSgAGoOlQh1hWAqjmQAqjmCvjwQCvjuDPhuQDOhvB1BWQB1BVgqDkQgqDmivDwQivDxjPBuQh0A+hYAAQhEAAgzglgAyDJjQhDghg6hMQg5hLgPhKQgOhKAlgcQAlgdBEAhQBDAiA6BLQA5BMAPBJQAOBKglAdQgRANgYAAQgcAAgkgSgArsIPQhDghg6hLQg5hMgPhKQgOhJAlgdQAlgcBEAhQBDAhA6BMQA5BLAPBKQAOBKglAcQgRANgYAAQgcAAgkgSgAlPG3QhEghg5hMQg6hLgOhKQgPhKAmgcQAlgdBDAhQBEAiA5BLQA6BMAOBJQAPBKgmAdQgRANgXAAQgcAAgkgSgAx/iZQhDghg6hMQg5hLgPhKQgOhKAlgcQAlgdBEAhQBDAiA6BLQA5BMAPBJQAOBKglAdQgRANgYAAQgcAAgkgSgAiVt+QhNg4AAhQQAAhPBNg5QBNg4BrAAQBtAABNA4QBNA5AABPQAABQhNA4QhNA4htAAQhrAAhNg4gAvFuCQhNg4AAhQQAAhPBNg5QBNg4BtAAQBtAABNA4QBNA5AABPQAABQhNA4QhNA4htAAQhtAAhNg4gAKduDQhNg4AAhQQAAhPBNg5QBNg4BtAAQBtAABNA4QBNA5AABPQAABQhNA4QhNA4htAAQhtAAhNg4g");
	this.shape.setTransform(-5.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#172E00").s().p("AlnAsQD5AQBuiGQB+B3DqgBQi1AfizAAQiyAAi1gfg");
	this.shape_1.setTransform(0,166.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AAFF39").s().p("AmOk/QGOBQGPhQQknEghoFeQh6l7kUkDg");
	this.shape_2.setTransform(0,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#69D100").s().p("ADclmQidF5CdEsQjqhajMCDQCsmmEKkog");
	this.shape_3.setTransform(-142,-77.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336700").s().p("AjGEYQBzkOhzlJQD1EBCYF9QjAiKjNBjg");
	this.shape_4.setTransform(144,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// レイヤー 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#75E602").s().p("AmYONIsgpYQj/ktD/l5IL4owQGYiaHWCaIMgJYQDVE3jVEfItIKAQjIBijGAAQjIAAjIhig");
	this.shape_5.setTransform(1,-76.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// レイヤー 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A9400").s().p("AHLRTItuqAQkGkliJmBIAAsgQC4i8EACUQHvDUEvGEQFYD5A4GFIAAMgQhHCCi2AAQgyAAg6gKg");
	this.shape_6.setTransform(-82,60.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C3700").s().p("AsRPzQiFl1CFmrQAjlxFtkNINGqAQDQicDADEIAANIQhiFJjeENIu+LQQgtAGgoAAQi/AAhUh+g");
	this.shape_7.setTransform(78.7,57.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-176.8,328,350.9);


(lib.BT_GRAPH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AolF8QiCAAABiDIAAnxQgBiDCCAAIRKAAQCDAAAACDIAAHxQAACDiDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AolGPQiWABAAiXIAAnxQAAiWCWgBIRKAAQCWABAACWIAAHxQAACXiWgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// レイヤー 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AolGZQigAAAAigIAAnxQAAihCgAAIRKAAQCgAAAAChIAAHxQAACgigAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-41,142,82);


(lib.titledice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.td2();
	this.instance.setTransform(135.1,192.7,0.544,0.544,-24.2,0,0,56.8,13.9);

	this.instance_1 = new lib.td3();
	this.instance_1.setTransform(295,132.7,0.469,0.469,23.4,0,0,0,-1.4);

	this.instance_2 = new lib.td1();
	this.instance_2.setTransform(175,58,0.339,0.339,-15,0,0,-0.2,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// レイヤー 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq5XHIpDh5IgEgCQjHhYieilIgDgFIizmNQgBgDgBgEQgIj8BDjSIABgEID9m9IADgFQCtisEUgdIAHAAIISB3IADABQC4BKCkCfIAEAGIC5GeIACAGQAaC+gxC7IgCAEIk8I7QgCAFgEACQioByjEAyIgEABIgFgBgANMK+QiqgpiShgQgEgDgCgEIkEm4IgCgEQg6iwAMjEIACgHICWlYIAEgGQCciYCthQIAEgBIGvhjIAGAAQDTAKCzCfIAEAFIDpGXIABADQA8CggGDGIgCAFIicFpIgDAFQhrB/iWBMIgEACIoiCDIgFAAIgFAAgAidkAIlXiFIgEgCQhzhLhRh2IgDgGIhGkFQgBgEABgEQATidBAh8IACgDIDHj6IAEgEQB9haCwAJQADAAADACIE4B+IADACQBrA/BWB0QACADABAEIBKETIAAAFQgDB5gyBwIgDAEIj7E/QgDAEgEACQhxA1iAAMIgCAAIgHgBg");
	this.shape.setTransform(193.4,145.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF6600","#FFFF00"],[0,1],0,0,0,0,0,208.2).s().p("AnfLCQgDgMgJgJIAAAAQgJgJgNgBIABAAQgNgCgLAFIAAAAIt8G+IG+t8IAAAAQAGgMgDgNIAAgBQgDgMgJgJIgBAAQgKgJgMgCIgBAAIwXhXIPAmyIAAAAQALgFAHgLIAAABQAGgLAAgMQgBgMgHgKInAp0IOQBbQALABALgFQAKgFAGgKQAGgJAAgMIAAmzIIeEPIAAAAQAMAGAMgCQAMgCAIgJIAAAAIFtltIFsJKQAGAMANAEIgBAAQANAGAMgEIABAAIMVjHImlH6IAAgBQgJALAAANIAAABQgBANAIALIAAABQAIAKANAFIAAAAIN/EMItcFwIAAAAQgLAEgGAKIgBAAQgGAKAAAMIAAAAQAAAMAGAKIAAAAIHvMOIt1liQgNgFgNAEIAAAAQgNADgIALIAAAAQgIALAAANIAAMIImspXQgHgKgNgEIAAgBQgMgEgMAEIAAAAQgMAEgIAKIoiLbg");
	this.shape_1.setTransform(185,155.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// レイヤー 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AnyK8IvoH0IHzvpIyvhkIRLnxInzq9IPoBkIAAnzIJWEsIGQmRIGGJ2IONjlInzJYIPoEsIvCGbIIxN2IvomPIAAOEInzq9IpXMhg");
	this.shape_2.setTransform(183,157.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// レイヤー 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.753)").s().p("AnyK8IvoHzIHzvoIywhkIRMnyInzq7IPoBkIAAn1IJWEtIGQmRIGGJ2IONjlInzJXIPoEtIvCGbIIxN2IvomPIAAOEInzq8IpXMgg");
	this.shape_3.setTransform(184,168.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-11.1,441,339.3);


(lib.btn_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.BT_GRAPH("synched",0);
	this.instance.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 102, 102, 102, 0)];
	this.instance.cache(-73,-43,146,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-41,142,82);


(lib.btn_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3
	this.instance = new lib.BT_GRAPH("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-41,142,82);


// stage content:
(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{btn:0,press:1,win:2,ban:5,title:7,d00:17,d01:18,d02:19,d03:20,d04:21,d05:22,d10:23,d11:24,d12:25,d13:26,d14:27,d15:28,d20:29,d21:30,d22:31,d23:32,d24:33,d25:34,d30:35,d31:36,d32:37,d33:38,d34:39,d35:40,d40:41,d41:42,d42:43,d43:44,d44:45,d45:46,d50:47,d51:48,d52:49,d53:50,d54:51,d55:52,d60:53,d61:54,d62:55,d63:56,d64:57,d65:58,d70:59,d71:60,d72:61,d73:62,d74:63,d75:64,shadow:65});

	// レイヤー 2
	this.instance = new lib.YOUWIN();
	this.instance.setTransform(-2.9,-2.3,1,1,0,0,0,253.1,45.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmiDbQhlAAABhkIAAjuQgBhjBlgBINFAAQBkABAABjIAADuQAABkhkAAgAnfh3IAADuQAAA8A9ABINFAAQA8gBABg8IAAjuQgBg7g8AAItFAAQg9AAAAA7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AmiC0Qg9gBAAg8IAAjuQAAg7A9AAINFAAQA8AAABA7IAADuQgBA8g8ABg");

	this.instance_1 = new lib.symbol();
	this.instance_1.setTransform(431.8,110.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AoBNBQg6goAQhvQARhvBQh1QBRh1Bhg2QBjg3A6AoQA5AogQBvQgQBvhQB1QhRB1hiA2Qg5AggrAAQgfAAgZgRgAB9kLQg6goAQhvQARhvBQh1IAJgMQBNhsBcgzQBjg3A6AoQA5AogQBvIgEAXQgUBkhIBpQhRB1hiA2Qg5AggrAAQgfAAgZgRg");
	this.shape_2.setTransform(81.5,57.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AGyNpQhHgcg5hJQg6hKgLhLQgLhMAqggQApghBHAcQBGAdA6BKQA6BJALBLQALBMgqAhQgWARgeAAQgbAAghgOgAl2ECQhHgcg5hJQg6hKgLhLQgLhKAqggQApghBHAcQBGAdA6BKQA6BHALBLQALBMgqAhQgWARgeAAQgbAAghgOgAGoBnQhHgcg5hJQg6hIgLhLQgLhMAqggQApghBHAcQBGAdA6BKQA6BJALBLQALBKgqAhQgWARgeAAQgbAAghgOgAl7n+QhHgcg5hJQg6hKgLhLQgLhMAqggQApghBHAcQBGAdA6BKQA6BJALBLQALBMgqAhQgWARgeAAQgbAAghgOg");
	this.shape_3.setTransform(-81.9,58.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("An4GBQjSigAAjhQAAjhDSifQDRifEngBQEoABDRCfQDRCfABDhQgBDhjRCgQjRCfkoAAQknAAjRifg");
	this.shape_4.setTransform(-0.5,-78.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AmmJEQh1hVAqjmQAqjmCvjuQCvjxDMhuQA0gbAvgQQBzgmBQAmQAQAIAOAKQB1BVgqDnQgqDmivDuQivDwjNBvQh0A9hYAAQhEAAgzglg");
	this.shape_5.setTransform(80.6,64.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("Al5EZQhKgmg+hUQg+hUgNhRQgOhSAsgfQArggBLAlQBKAlA+BTQA+BUANBSQAOBSgsAgQgUAPgaAAQggAAgogUgAAfDDQhIglg+hUQg+hTgNhSQgOhSAsggQArggBLAlQBIAlA+BVQA+BSANBSQAOBTgsAgQgUAOgaAAQggAAgogUgAG5BzQhKglg+hSQg+hVgNhSQgOhSAsggQArggBLAlQBKAlA+BVQA+BUANBQQAOBTgsAgQgUAOgaAAQggAAgogUg");
	this.shape_6.setTransform(-82.8,60.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhJLcQhhgOhLg5QhkhMAAhsQAAhrBkhNQBlhMCPAAQCOAABkBMQBmBNgBBrQABBshmBMQgSAOgTALQhZA0h0AAQglAAgjgGgAjxkkQhkhNgBhrQABhsBkhMQBlhNCOAAQCOAABmBNQBkBMABBsQgBBrhkBNQhmBMiOAAQiOAAhlhMg");
	this.shape_7.setTransform(-0.6,-76.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AG4NcQhDgig6hLQg6hMgOhJQgPhKAmgdQAlgcBDAhQBEAiA6BLQA5BLAOBKQAPBKglAdQgRANgYAAQgcAAgkgSgAl2EFQhDgig5hLQg6hMgPhJQgOhIAlgdQAmgcBDAhQBDAiA6BJQA6BLAOBKQAOBKglAdQgRANgXAAQgcAAglgSgAAfCxQhBghg5hMQg6hJgPhKQgOhKAlgcQAmgdBDAiQBBAhA6BMQA6BJAOBKQAOBJglAdQgRANgXAAQgcAAglgSgAG8BZQhDgig6hJQg6hMgOhJQgPhKAmgdQAlgcBDAhQBEAiA6BLQA5BLAOBKQAPBIglAdQgRANgYAAQgcAAgkgSgAlyn3QhDgig5hLQg6hMgPhJQgOhKAlgdQAmgcBDAhQBDAiA6BLQA6BLAOBKQAOBKglAdQgRANgXAAQgcAAglgSg");
	this.shape_8.setTransform(-84.3,58.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AmmJEQh1hVAqjmQAqjnCvjuQCvjwDMhuQDPhuB1BVQB1BVgqDmQgqDmivDvQivDwjNBuQh0A+hYAAQhEAAgzglg");
	this.shape_9.setTransform(78.6,59);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai7CKQhNg4AAhQQAAhOBNg4QBNg4BtAAQBrAABNA4QBNA4AABOQAABQhNA4QhNA4hrAAQhtAAhNg4gAvrCFQhMg3AAhOQAAhPBMg5QBOg4BtAAQBsAABOA4QBMA5AABPQAABOhMA3QhOA5hsAAQhtAAhOg5gAJ4CEQhOg3AAhOQAAhPBOg5QBNg4BtAAQBtAABMA4QBOA5AABPQAABOhOA3QhMA5htAAQhtAAhNg5g");
	this.shape_10.setTransform(-2.4,-79.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("ACCFSQg5gqAShtQARhtBThuQBThxBjgxQBjgxA5AqQA5AqgSBtQgSBrhSBwQhTBxhjAxQg1AagpAAQgjAAgbgTgAoQDKQg5gqAShtQARhrBThwQBThxBjgxQBjgxA5AqQA5AqgSBtQgSBthSBuQhTBxhjAxQg1AagpAAQgjAAgbgTg");
	this.shape_11.setTransform(77.9,59.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AIFObQhBgfg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigRgAAWIxQg/ggg1hIQg2hIgMhHQgLhIAmgbQAlgcBBAfQA/AgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgAnNDGQhBgfg1hJQg2hIgMhFQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BGALBHQAMBHgmAcQgRANgYAAQgbAAgigRgAIFCcQhBgfg1hJQg2hGgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBFQAMBHgmAcQgRANgYAAQgbAAgigRgAAbjMQg/ggg1hIQg2hIgMhHQgLhIAmgbQAlgcBBAfQA/AgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgAnNpDQhBggg1hIQg2hIgMhHQgLhIAmgbQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQg");
	this.shape_12.setTransform(-85.5,60.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguMAQhAgKgygkQhDgwAAhGQAAhGBDgwQBEgyBeAAQBgAABEAyQBEAwAABGQAAAzgkAnQgOAPgSANQhEAyhgAAQgYAAgYgEgAKSB1QhDgxAAhEQAAhFBDgwQBEgyBgAAQBgAABEAyQBEAwAABFQAABEhEAxQhEAyhggBQhgABhEgygAvZB1QhEgxAAhEQAAhFBEgwQBEgyBgAAQBgAABDAyQBEAwAABFQAABEhEAxQhDAyhggBQhgABhEgygAignkQhDgyAAhFQAAhGBDgwQBEgyBeAAQBgAABEAyQBEAwAABGQAABFhEAyQhEAxhggBQheABhEgxg");
	this.shape_13.setTransform(-3.2,-77.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("Al4EYQhKglg9hSQg9hSgNhPQgOhRAqgeQApgfBJAkQBJAlA9BQQA9BSAOBRQAOBQgqAfQgTAPgaAAQgeAAgngUgAAcC/QhHgkg9hTQg9hQgOhRQgOhRAqgfQAqgfBJAlQBHAlA9BSQA9BQAOBRQANBQgpAfQgTAPgaAAQgeAAgogUgAG8BrQhJglg9hQQg9hSgOhRQgOhQAqgfQAqggBJAlQBJAkA9BTQA9BSAOBPQANBRgpAeQgTAPgaAAQgeAAgogUg");
	this.shape_14.setTransform(-82.8,60.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AooOzQglgdAQhMQAQhKA8hOQA8hOBFgjQBEgjAlAdQAlAcgQBLQgQBMg8BOQg8BNhEAjQgmATgcAAQgXAAgRgMgAouHnQgmgdARhMQAQhKA8hOQA7hOBFgjQBEgjAmAdQAlAcgQBLQgRBMg7BOQg8BNhFAjQgmATgcAAQgXAAgQgMgAEOFXQglgdAQhMQAQhKA8hOQA8hOBFghQBEgjAlAdQAlAcgQBJQgQBMg8BOQg8BNhEAjQgmATgcAAQgXAAgRgMgAooAXQglgbAQhMQAQhKA8hOQA8hOBFgjQBEgjAlAdQAlAcgQBLQgQBMg8BOQg8BNhEAhQgmATgcAAQgXAAgRgMgAEOh3QglgdAQhLQAQhLA8hOQA8hOBFgjQBEgiAlAcQAlAdgQBLQgQBLg8BOQg8BOhEAiQgmAUgcAAQgXAAgRgNgAEJo5QglgdAQhMIACgGQARhIA5hKQA8hOBFgjQBEgjAlAdQAlAcgQBLQgQBMg8BOIgGAIQg5BHhBAhQgmATgcAAQgXAAgRgMg");
	this.shape_15.setTransform(80.7,60.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/MFQg2gMgqgfQhEgyAAhHQAAhGBEgyQBDgxBdAAQBgAABDAxQBEAyAABGQgBAugcAlQgPAUgYASQhDAxhgAAQghAAgfgGgAKKBxQhCgxAAhFQAAhGBCgyQBEgyBfAAQBgAABDAyQBEAyAABGQAABFhEAxQhDAzhgAAQhfAAhEgzgAifBxQhEgxAAhFQAAhGBEgyQBDgyBdAAQBgAABDAyQBEAyAABGQAABFhEAxQhDAzhgAAQhdAAhDgzgAvQBxQhDgxABhFQgBhGBDgyQBEgyBfAAQBgAABDAyQBEAyAABGQAABFhEAxQhDAzhgAAQhfAAhEgzgAiknpQhDgxAAhGQAAhHBDgyQBEgyBgAAQBdAABDAyQBDAyAABHQAABGhDAxQhDAzhdAAQhgAAhEgzg");
	this.shape_16.setTransform(-1.5,-77.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AkXFJQhlgyhVhwQhWhwgUhsQgVhuA4grQA5grBlAxQBkAxBWBwQBVBuAVBvQAVBug5ArQgaAUgkAAQgpAAg2gagAF7DJQhlgxhVhwQhWhvgUhuQgVhuA4grQA5grBlAxQBkAxBWBxQBVBwAVBsQAVBug5ArQgaAUgkAAQgpAAg2gag");
	this.shape_17.setTransform(-83.9,58.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AoeN3QglgbANhLQAOhMA5hQQA5hRBCgnQBCgmAmAaQAlAbgNBLQgOBMg5BRQg4BQhDAnQgnAWgeAAQgUAAgPgKgAERELQgmgbAOhLQAOhMA4hQQA5hPBCgnQBDgmAmAaQAlAbgOBLQgNBKg5BRQg5BQhCAnQgoAWgdAAQgUAAgPgKgAohBzQgmgbAOhLQAOhKA4hQQA5hRBCgnQBDgmAmAaQAlAbgOBLQgNBMg5BRQg5BOhCAnQgoAWgdAAQgUAAgPgKgAEJnwQgmgbAOhLQAGgkARgmQASgoAdgqQA5hRBCgnQBDgmAmAaQAlAbgOBLQgKA3ggA5QgMAWgQAXQg5BQhCAnQgoAWgdAAQgUAAgPgKg");
	this.shape_18.setTransform(79.5,59.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Aj7MPQhEg0ABhIQgBhHBEg0QBEgyBhAAQBeAABEAyQBDA0AABHQAAAbgJAYQgQAogqAhQg7ArhMAGIgbABQhhAAhEgygADvGfQhEg0AAhIQAAhHBEg0QBEgyBgAAQBgAABEAyQBEA0AABHQAABIhEA0QhEAzhggBQhgABhEgzgAwnCzQhDg0AAhHQAAhGBDg0QBEgzBgABQBggBBFAzQBEA0gBBGQABBHhEA0QhFAyhgAAQhgAAhEgygALfA3QhDg0AAhGQAAhHBDg0QBEgyBgAAQBgAABFAyQBEA0gBBHQABBGhEA0QhFAzhggBQhgABhEgzgAo/izQhEg0ABhHQgBhIBEg0QBEgzBhABQBggBBEAzQBDA0AABIQAABHhDA0QhEAyhgAAQhhAAhEgygAhboYQhDgyAAhJQAAhIBDgyQBEg0BeAAQBgAABFA0QBEAygBBIQABBJhEAyQhFA0hgAAQheAAhEg0g");
	this.shape_19.setTransform(-1.9,-79);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Al0VuQhGgcg6hJQg6hKgKhLQgMhMAqggQAqghBHAcQBGAdA6BKQA5BJALBLQALBMgqAhQgWARgeAAQgaAAgigOgAE4U+Qg6goAQhuQARhvBQh1QBRh1Bhg3QBjg2A6AoQA5AogQBvQgQBuhQB1QhRB1hiA3Qg4AfgrAAQggAAgZgRgAyeMHQhGgcg6hJQg6hKgKhLQgMhMAqggQAqghBHAcQBGAdA6BKQA5BJALBLQALBMgqAhQgWARgeAAQgaAAgigOgAl+JsQhGgcg6hJQg6hKgKhLQgMhMAqggQAqghBHAcQBGAdA6BKQA5BJALBLQALBMgqAhQgWARgeAAQgaAAgigOgAO4DwQg6goAQhuQARhtBQh1IAJgMQBNhsBcg0QBjg2A6AoQA5AogQBvIgEAXQgUBjhIBnQhRB1hiA3Qg4AfgrAAQggAAgZgRgAyjAFQhGgag6hJQg6hKgKhLQgMhMAqggQAqghBHAcQBGAdA6BKQA5BJALBLQALBMgqAfQgWARgeAAQgaAAgigOgAnxnZQjSifAAjiQAAjiDSifQDRigEmAAQEpAADRCgQDRCfABDiQgBDijRCfQjRCgkpAAQkmAAjRigg");
	this.shape_20.setTransform(-1.2,7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AGzVBQh1hVAqjmQAqjnCvjwQCvjwDOhuQDPhuB1BVQB1BVgqDmQgqDmivDxQivDwjPBuQh0A+hYAAQhEAAgzglgAyAPwQhKglg+hUQg+hVgNhSQgOhSAsggQArggBLAlQBKAlA+BVQA+BUANBSQAOBTgsAgQgUAOgbAAQgfAAgogUgArmObQhKgmg+hUQg+hUgNhTQgOhSAsgfQArggBLAlQBKAlA+BVQA+BUANBSQAOBSgsAgQgUAPgbAAQgfAAgogUgAlMNLQhKgmg+hUQg+hUgNhTQgOhSAsgfQArggBLAlQBKAlA+BVQA+BUANBSQAOBSgsAgQgUAPgbAAQgfAAgogUgAgZBYQhigOhKg5QhlhKAAhsQAAhrBlhNQBkhMCOAAQCPAABlBMQBlBNAABrQAABshlBKQgTAOgTALQhZA0h1AAQgmAAgggGgAjBuoQhlhNAAhrQAAhsBlhMQBkhNCOAAQCPAABlBNQBlBMAABsQAABrhlBNQhlBMiPAAQiOAAhkhMg");
	this.shape_21.setTransform(-5.3,-12.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AlUS6QhDgig5hLQg6hMgPhJQgOhKAlgdQAmgcBDAhQBDAiA6BLQA6BLAOBKQAOBKglAdQgRANgXAAQgcAAglgSgAGoOkQh1hVAqjmQAqjmCvjwQCvjvDOhuQDPhuB1BVQB1BVgqDlQgqDmivDwQivDwjPBvQh0A+hYAAQhEAAgzgmgAyDJjQhDgig6hLQg6hMgOhJQgPhKAmgdQAlgcBDAhQBEAiA6BLQA5BLAOBKQAPBKglAdQgRANgYAAQgcAAgkgSgArsIPQhDghg6hMQg6hLgOhKQgPhKAmgcQAlgdBDAiQBEAhA6BMQA5BLAOBKQAPBJglAdQgRAOgYAAQgcAAgkgTgAlQG3QhDgig5hLQg6hMgPhJQgOhKAlgdQAmgcBDAhQBDAiA6BLQA6BLAOBKQAOBKglAdQgRANgXAAQgcAAglgSgAx/iZQhDgig6hLQg6hMgOhJQgPhKAmgdQAlgcBDAhQBEAiA6BLQA5BLAOBKQAPBKglAdQgRANgYAAQgcAAgkgSgAiWt/QhNg4AAhPQAAhQBNg4QBNg4BrAAQBtAABNA4QBNA4AABQQAABPhNA4QhNA5htAAQhrAAhNg5gAvFuDQhNg4AAhPQAAhQBNg4QBNg4BtAAQBtAABNA4QBNA4AABQQAABPhNA4QhNA5htAAQhtAAhNg5gAKduEQhNg4AAhPQAAhQBNg4QBNg4BtAAQBtAABNA4QBNA4AABQQAABPhNA4QhNA5htAAQhtAAhNg5g");
	this.shape_22.setTransform(-6.2,23.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AkEX4QhBggg1hIQg2hIgMhHQgLhIAmgbQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgArzSNQhBgfg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigRgAPZOlQg5gqAShtQARhtBThwQBThwBjgxQBjgyA5AqQA5AqgSBuQgSBthSBwQhTBwhjAxQg1AbgpAAQgkAAgagUgAzYMjQhBggg1hIQg2hIgMhHQgLhIAmgbQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgAFFMdQg5gqAShtQARhtBThwQBThwBjgxQBjgyA5AqQA5AqgSBuQgSBthSBwQhTBwhjAxQg1AbgpAAQgjAAgbgUgAkEL5QhBggg1hIQg2hIgMhHQgLhIAmgbQAlgcBBAfQBBAgA1BIQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigQgAruGOQhBgfg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBHgmAcQgRANgYAAQgbAAgigRgAzYAXQhBgdg1hJQg2hIgMhHQgLhHAmgcQAlgcBBAgQBBAfA1BJQA2BIALBHQAMBGgmAbQgRANgYAAQgbAAgigRgAgDgDQhAgKgxgjQhEgxAAhGQAAhFBEgxQBEgxBeAAQBgAABDAxQBEAxAABFQAAAzgkAoQgNAPgTANQhDAwhgAAQgbAAgWgDgAK+qNQhEgxAAhGQAAhFBEgxQBEgxBgAAQBgAABDAxQBEAxAABFQAABGhEAxQhDAxhgAAQhgAAhEgxgAuuqNQhDgxAAhGQAAhFBDgxQBEgxBgAAQBgAABEAxQBEAxAABFQAABGhEAxQhEAxhgAAQhgAAhEgxgAh0zpQhEgxAAhGQAAhFBEgxQBEgxBeAAQBgAABDAxQBEAxAABFQAABGhEAxQhDAxhgAAQheAAhEgxg");
	this.shape_23.setTransform(-7.6,-0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AEKYIQgmgdARhMQAQhKA8hOQA7hOBFgjQBEgjAmAdQAlAcgQBLQgRBMg7BOQg8BNhFAjQgmAUgcAAQgXAAgQgNgAEDQ8QglgdAQhMQAQhKA8hOQA8hOBFgjQBEgjAlAdQAlAcgQBLQgQBMg8BOQg8BNhEAjQgmAUgcAAQgXAAgRgNgARCOsQgmgdARhMQAQhKA8hOQA7hOBFgjQBEgjAmAdQAlAcgQBLQgRBMg7BOQg8BNhFAjQgmAUgcAAQgXAAgQgNgAynNyQhKgkg9hTQg9hSgNhRQgOhQAqgfQApgfBJAkQBJAlA9BSQA9BTAOBQQAOBRgqAfQgTAOgZAAQgfAAgngUgAsRMZQhJgkg9hTQg9hSgOhRQgOhQAqgfQAqgfBJAkQBJAlA9BSQA9BTAOBQQANBRgpAfQgTAOgaAAQgeAAgogUgAlxLFQhJgkg9hTQg9hSgOhRQgOhQAqgfQAqgfBJAkQBJAlA9BSQA9BTAOBQQANBRgpAfQgTAOgaAAQgeAAgogUgAEKJsQgmgdARhMQAQhKA8hOQA7hOBFgjQBEgjAmAdQAlAcgQBLQgRBMg7BOQg8BNhFAjQgmAUgcAAQgXAAgQgNgARCHcQgmgdARhLQAQhLA8hOQA7hOBFgjQBEgiAmAcQAlAdgQBLQgRBLg7BOQg8BOhFAiQgmAUgcAAQgXAAgQgNgAQ9AaQgmgbARhMIABgGQARhHA6hLQA7hOBFgjQBEgjAmAdQAlAcgQBLQgRBMg7BOIgGAIQg6BHhBAfQgmAUgcAAQgXAAgQgNgAhCgCQg2gMgqggQhDgxAAhHQAAhGBDgyQBDgyBfAAQBeAABDAyQBEAyAABGQAAAugcAlQgQAUgYARQhDAwheAAQgiAAgggEgAKIqWQhDgxAAhHQAAhGBDgyQBDgyBgAAQBfAABDAyQBEAyAABGQAABHhEAxQhDAyhfAAQhgAAhDgygAiiqWQhDgxAAhHQAAhGBDgyQBDgyBfAAQBeAABDAyQBEAyAABGQAABHhEAxQhDAyheAAQhfAAhDgygAvSqWQhDgxAAhHQAAhGBDgyQBDgyBgAAQBfAABDAyQBEAyAABGQAABHhEAxQhDAyhfAAQhgAAhDgygAimzyQhDgxAAhHQAAhGBDgyQBDgyBgAAQBdAABDAyQBEAyAABGQAABHhEAxQhDAyhdAAQhgAAhDgyg");
	this.shape_24.setTransform(-1.3,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AEUYLQgmgbAOhLQAOhMA4hQQA5hRBCgnQBDgmAmAaQAlAbgOBLQgNBMg5BRQg5BQhCAnQgoAWgdAAQgUAAgPgKgAxGPWQhlgxhVhwQhWhxgUhuQgVhuA4grQA5grBlAxQBkAxBWBxQBVBwAVBuQAVBug5ArQgaAUgkAAQgpAAg2gagAREOfQglgbANhLQAOhMA5hQQA5hRBCgnQBCgmAmAaQAlAbgNBLQgOBMg5BRQg4BQhDAnQgnAWgeAAQgUAAgPgKgAmyNXQhlgyhVhwQhWhwgUhuQgVhuA4grQA5grBlAxQBkAxBWBwQBVBwAVBvQAVBug5ArQgaAUgkAAQgpAAg2gagAEQMHQglgbANhLQAOhMA5hQQA5hRBCgnQBCgmAmAaQAlAbgNBLQgOBMg5BRQg4BQhDAnQgnAWgeAAQgUAAgPgKgAQ8CiQglgbANhLQAHgkAQgkQASgoAegqQA5hRBCgnQBCgmAmAaQAlAbgNBLQgKA3ghA5QgMAUgQAXQg4BQhDAnQgnAWgeAAQgUAAgPgKgAj2A7QhEgzAAhGQAAhIBEgzQBEgzBgAAQBeAABEAzQBEAzAABIQAAAagJAYQgQAngrAgQg6ArhMAHIgcABQhgAAhEgzgAD0kzQhEgzAAhIQAAhIBEgzQBEgzBgAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQhgAAhEgzgAwiofQhEgzAAhIQAAhIBEgzQBEgzBgAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQhgAAhEgzgALkqbQhEgzAAhIQAAhIBEgzQBEgzBgAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQhgAAhEgzgAo6uHQhEgzAAhIQAAhIBEgzQBEgzBgAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQhgAAhEgzgAhWzrQhEgzAAhIQAAhIBEgzQBEgzBeAAQBgAABEAzQBEAzAABIQAABIhEAzQhEAzhgAAQheAAhEgzg");
	this.shape_25.setTransform(-2.4,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.instance_1}]},2).to({state:[]},4).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},6).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// レイヤー 5
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0A0013").s().p("AhFBKQiRgFiQgZQC1AMBshEQApgaAcgkQB+B3DqgBQi0Afi0AAIhFgBg");
	this.shape_26.setTransform(-1,166.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B544FF").s().p("AhFCLQh5kHjRjDQCmAhCkAGQDqAIDqgvQknEghoFeQgdhdgohXg");
	this.shape_27.setTransform(-1,46.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6500C9").s().p("ADclmQidF5CdEsQjrhajLCDQCsmmEKkog");
	this.shape_28.setTransform(-143,-77.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#330067").s().p("AjGEYQBzkNhzlKQD1EBCYF9QjAiKjNBjg");
	this.shape_29.setTransform(143,-77.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#172E00").s().p("AhFBKQiRgFiQgZQC1AMBshEQApgaAcgkQB+B3DqgBQi0Afi0AAIhFgBg");
	this.shape_30.setTransform(-1,166.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AAFF39").s().p("AhFCLQh5kHjRjDQCmAhCkAGQDqAIDqgvQknEghoFeQgdhdgohXg");
	this.shape_31.setTransform(-1,46.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#69D100").s().p("ADclmQidF5CdEsQjrhajLCDQCsmmEKkog");
	this.shape_32.setTransform(-143,-77.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#336700").s().p("AjGEYQBzkNhzlKQD1EBCYF9QjAiKjNBjg");
	this.shape_33.setTransform(143,-77.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#001100").s().p("AhFBKQiRgFiQgZQC1AMBshEQApgaAcgkQB+B3DqgBQi0Afi0AAIhFgBg");
	this.shape_34.setTransform(-1,166.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#48BA48").s().p("AhFCLQh5kHjRjDQCmAhCkAGQDqAIDqgvQknEghoFeQgdhdgohXg");
	this.shape_35.setTransform(-1,46.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#006600").s().p("ADclmQidF5CdEsQjrhajLCDQCsmmEKkog");
	this.shape_36.setTransform(-143,-77.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003300").s().p("AjGEYQBzkNhzlKQD1EBCYF9QjAiKjNBjg");
	this.shape_37.setTransform(143,-77.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#33001A").s().p("AhFBKQiRgFiQgZQC1AMBshEQApgaAcgkQB+B3DqgBQi0Afi0AAIhFgBg");
	this.shape_38.setTransform(-1,166.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF5BC5").s().p("AhFCLQh5kHjRjDQCmAhCkAGQDqAIDqgvQknEghoFeQgdhdgohXg");
	this.shape_39.setTransform(-1,46.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0166").s().p("ADclmQidF5CdEsQjrhajLCDQCsmmEKkog");
	this.shape_40.setTransform(-143,-77.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#620031").s().p("AjGEYQBzkNhzlKQD1EBCYF9QjAiKjNBjg");
	this.shape_41.setTransform(143,-77.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#130B00").s().p("AhFBKQiRgFiQgZQC1AMBshEQApgaAcgkQB+B3DqgBQi0Afi0AAIhFgBg");
	this.shape_42.setTransform(-1,166.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFB132").s().p("AhFCLQh5kHjRjDQCmAhCkAGQDqAIDqgvQknEghoFeQgdhdgohXg");
	this.shape_43.setTransform(-1,46.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D07200").s().p("ADclmQidF5CdEsQjrhajLCDQCsmmEKkog");
	this.shape_44.setTransform(-143,-77.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6E3C00").s().p("AjGEYQBzkNhzlKQD1EBCYF9QjAiKjNBjg");
	this.shape_45.setTransform(143,-77.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#002020").s().p("AhFBKQiRgFiQgZQC1AMBshEQApgaAcgkQB+B3DqgBQi0Afi0AAIhFgBg");
	this.shape_46.setTransform(-1,166.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#39FFFF").s().p("AhFCLQh5kHjRjDQCmAhCkAGQDqAIDqgvQknEghoFeQgdhdgohXg");
	this.shape_47.setTransform(-1,46.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00D0D0").s().p("ADclmQidF5CdEsQjrhajLCDQCsmmEKkog");
	this.shape_48.setTransform(-143,-77.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#006A6A").s().p("AjGEYQBzkNhzlKQD1EBCYF9QjAiKjNBjg");
	this.shape_49.setTransform(143,-77.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2E2E00").s().p("AhFBKQiRgFiQgZQC1AMBshEQApgaAcgkQB+B3DqgBQi0Afi0AAIhFgBg");
	this.shape_50.setTransform(-1,166.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF7A").s().p("AhFCLQh5kHjRjDQCmAhCkAGQDqAIDqgvQknEghoFeQgdhdgohXg");
	this.shape_51.setTransform(-1,46.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D3D300").s().p("ADclmQidF5CdEsQjrhajLCDQCsmmEKkog");
	this.shape_52.setTransform(-143,-77.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#626200").s().p("AjGEYQBzkNhzlKQD1EBCYF9QjAiKjNBjg");
	this.shape_53.setTransform(143,-77.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2A0000").s().p("AhFBKQiRgFiQgZQC1AMBshEQApgaAcgkQB+B3DqgBQi0Afi0AAIhFgBg");
	this.shape_54.setTransform(-1,166.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF5858").s().p("AhFCLQh5kHjRjDQCmAhCkAGQDqAIDqgvQknEghoFeQgdhdgohXg");
	this.shape_55.setTransform(-1,46.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C30000").s().p("ADclmQidF5CdEsQjrhajLCDQCsmmEKkog");
	this.shape_56.setTransform(-143,-77.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5C0000").s().p("AjGEYQBzkNhzlKQD1EBCYF9QjAiKjNBjg");
	this.shape_57.setTransform(143,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},17).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},6).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},6).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},6).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},6).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},6).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},6).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},6).to({state:[]},6).wait(1));

	// レイヤー 6
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7502E6").s().p("AgsPlQjIgOilhCIsgpYQjfkjDfmDIL4owQGYiaHWCaIMgJYQC5FBi5EVItIKAQjNBSiyAAQgYAAgagCg");
	this.shape_58.setTransform(0.1,-76.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#75E602").s().p("AguPiQjIgRilg6IsgpYQjhktDhl5IL4owQGYiaHWCaIMgJYQDDFJjDENItIKAQjHBOiuAAQgdAAgfgDg");
	this.shape_59.setTransform(0.3,-77.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#027502").s().p("AgiPmQjIgYilg8IsgpYQkHk/EHlnIL4owQGYiaHWCaIMgJYQC6FBi6EVItIKAQjABYipAAQgmAAgigEg");
	this.shape_60.setTransform(-0.9,-76.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF2396").s().p("Ag0PtQjFgbiehIIsgpYQjqktDql5IL4owQGYiaHWCaIMgJYQC9FCi9EUItIKAQjNBoipAAQgjAAgigFg");
	this.shape_61.setTransform(-0.1,-75.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E67F02").s().p("AgmPrQjHgXihhHIsgpYQkAktEAl5IL4owQGYiaHWCaIMgJYQCuFJiuENItIKAQjKBiirAAQggAAghgEg");
	this.shape_62.setTransform(-1,-76.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#02E6E6").s().p("AgfPqQjJgRiphJIsgpYQj+kjD+mDIL4owQGYiaHWCaIMgJYQC4FJi4ENItIKAQjGBcixAAQgaAAgbgCg");
	this.shape_63.setTransform(-0.7,-76.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F5F50F").s().p("AgrPmQjIgXilg9IsgpYQjhkjDhmDIL4owQGYiaHWCaIMgJYQC2FBi2EVItIKAQjBBYipAAQgjAAgkgEg");
	this.shape_64.setTransform(-0.1,-76.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D50202").s().p("AgpPlQjIgRilg/IsgpYQjqktDql5IL4owQGYiaHWCaIMgJYQC4FJi4ENItIKAQjJBSivAAQgcAAgdgCg");
	this.shape_65.setTransform(-0.2,-76.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58}]},17).to({state:[{t:this.shape_59}]},6).to({state:[{t:this.shape_60}]},6).to({state:[{t:this.shape_61}]},6).to({state:[{t:this.shape_62}]},6).to({state:[{t:this.shape_63}]},6).to({state:[{t:this.shape_64}]},6).to({state:[{t:this.shape_65}]},6).to({state:[]},6).wait(1));

	// レイヤー 1
	this.instance_2 = new lib.btn_normal();

	this.instance_3 = new lib.btn_over();

	this.instance_4 = new lib.titledice();
	this.instance_4.setTransform(284.1,398.6,1,1,0,0,0,197.6,153.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4A0094").s().p("AHMRfItvqAQkGkliJmBIAAsgQDCjbD2CzQHsDNExGLQD4CjBCC7QBDC5AUBnIAAMgQgeAlgpAZQhcA7iRAAQgaAAgagBg");
	this.shape_66.setTransform(-83,58.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4A9400").s().p("AHMRaItvqAQkGkliJmBIAAsgQCTjGElCeQG/CgFeG4QEICjA8C7QA9C5AQBnIAAMgQgeAkgpAaQhcA7iRAAQgaAAgagBg");
	this.shape_67.setTransform(-83,59.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#004A00").s().p("AHMRUItvqAQkGkliJmBIAAsgQCwiwEICIQH7CDEiHVQEQCUA5DBQA6C+AOBrIAAMgQgeAlgpAaQhcA7iRAAQgaAAgagCg");
	this.shape_68.setTransform(-83,60);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#97004C").s().p("AHMRfItvqAQkGkliJmBIAAsgQC5jdD/C1QHuCvEvGpQD/CdBBC9QBAC7ARBpIAAMgQgeAlgpAaQhcA7iRAAQgaAAgagCg");
	this.shape_69.setTransform(-83,58.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#945100").s().p("AHMRUItvqAQkGkliJmBIAAsgQCOivEqCHQHQCVFNHDQEHC7A9CzQA+CwAPBgIAAMgQgeAlgpAZQhcA8iRAAQgaAAgagCg");
	this.shape_70.setTransform(-83,60);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#009494").s().p("AHMRcItvqAQkGkliJmBIAAsgQCdjOEbCmQHTCDFKHVQEIDDA8CvQA9CuAQBeIAAMgQgeAlgpAZQhcA7iRAAQgaAAgagBg");
	this.shape_71.setTransform(-83,59.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#949400").s().p("AHMRcItvqAQkGkliJmBIAAsgQCdjOEbCmQG1CXFoHBQD8CeBEC7QBDC5AOBsIAAMgQgeAlgpAZQhcA7iRAAQgaAAgagBg");
	this.shape_72.setTransform(-83,59.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#890000").s().p("AHMRbItvqAQkGkliJmBIAAsgQC6jKD+CiQHXCqFGGuQEKC6A6CzQA7CxASBgIAAMgQgeAlgpAZQhcA7iRAAQgaAAgagBg");
	this.shape_73.setTransform(-83,59.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.486)").s().p("AviP0Qg/AAgyglIt2qdQgjgcgUgoQgUgoAAgrIAAmPQAAgwAWgpQAXgrAogZIN2pBQAwghA3AAMAhKAAAQA9AAAyAjILwIXQAjAZAXArQAUAoAAAuIAAG6QAAAmgPAlQgPAkgcAbIrFKdQg3AyhMAAg");
	this.shape_74.setTransform(73,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},5).to({state:[]},4).to({state:[{t:this.shape_66}]},6).to({state:[{t:this.shape_67}]},6).to({state:[{t:this.shape_68}]},6).to({state:[{t:this.shape_69}]},6).to({state:[{t:this.shape_70}]},6).to({state:[{t:this.shape_71}]},6).to({state:[{t:this.shape_72}]},6).to({state:[{t:this.shape_73}]},6).to({state:[{t:this.shape_74}]},6).wait(1));

	// レイヤー 4
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#CCCCCC").ss(4,1,1).p("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");
	this.shape_75.setTransform(409.1,434.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1C0037").s().p("AhFbZQiRgFiQgaItxqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhhFLjeENIvALQQi0Agi0AAIhFgBg");
	this.shape_76.setTransform(-1,-1.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1C3700").s().p("AhFbZQiRgFiQgaItxqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhhFLjeENIvALQQi0Agi0AAIhFgBg");
	this.shape_77.setTransform(-1,-1.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#001C00").s().p("AhFbZQiRgFiQgaItxqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhhFLjeENIvALQQi0Agi0AAIhFgBg");
	this.shape_78.setTransform(-1,-1.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3C001E").s().p("AhFbZQiRgFiQgaItxqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhhFLjeENIvALQQi0Agi0AAIhFgBg");
	this.shape_79.setTransform(-1,-1.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#371E00").s().p("AhFbZQiRgFiQgaItxqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhhFLjeENIvALQQi0Agi0AAIhFgBg");
	this.shape_80.setTransform(-1,-1.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#003737").s().p("AhFbZQiRgFiQgaItxqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhhFLjeENIvALQQi0Agi0AAIhFgBg");
	this.shape_81.setTransform(-1,-1.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373700").s().p("AhFbZQiRgFiQgaItxqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhhFLjeENIvALQQi0Agi0AAIhFgBg");
	this.shape_82.setTransform(-1,-1.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#330000").s().p("AhFbZQiRgFiQgaItxqAQkGkliJmDIAAseQCsmnEMkpIL3owQGYiaHXCaIMgJYQD3EBCYF/IAANGQhhFLjeENIvALQQi0Agi0AAIhFgBg");
	this.shape_83.setTransform(-1,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_75}]},7).to({state:[]},4).to({state:[{t:this.shape_76}]},6).to({state:[{t:this.shape_77}]},6).to({state:[{t:this.shape_78}]},6).to({state:[{t:this.shape_79}]},6).to({state:[{t:this.shape_80}]},6).to({state:[{t:this.shape_81}]},6).to({state:[{t:this.shape_82}]},6).to({state:[{t:this.shape_83}]},6).to({state:[]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(349,379,142,82);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;