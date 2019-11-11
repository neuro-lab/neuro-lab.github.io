event = "linechart"

var x1 = [];
var x2 = [];
var y1 = [];
var y2 = [];
for (var i = 1; i < 20; i++) {
	k = Math.random();
	//x1.push(k * 5);
	x1.push(i);
	//x2.push(k * 10);
	x2.push(i);
	y1.push(k);
	y2.push(k * 2 + 1);
}

data = JSON.stringify(
	{
		x_title: {en: "packs", ru: 'упаковки'},
		y_title: {en: 'NIS (millions)', ru: 'МЛН долларов'},
		series: [
			{
				x: x1,
				y: y1,
				name: {en: 'Top', ru: 'Верхняя'},
				//color: "rgba(0, 0, 255, 0.5)",
				//color: "red", 
			},{
				x: x2,
				y: y2,
				name: {en: 'Bottom', ru: 'Нижняя'},
				//color: '#3BA99C',
			},
		]
	}
);
