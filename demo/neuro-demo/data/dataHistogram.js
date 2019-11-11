event = "histogram"

var x1 = [];
var x2 = [];
var y1 = [];
var y2 = [];
for (var i = 1; i < 500; i++) {
	k = Math.random();
	x1.push(k * 5);
	x2.push(k * 10);
	y1.push(k);
	y2.push(k * 2);
}

data = JSON.stringify(
	{
		x_title: {en: "packs", ru: 'упаковки'},
		y_title: {en: 'NIS (millions)', ru: 'МЛН долларов'},
		series: [{
		  x: x1,
		  y: y1,
		  name: 'control',
		  color: '#3BA99C',
		},{
		  x: x2,
		  y: y2, 
		  name: "experimental", 
		}]
	}
);
