k = 4*Math.random() + 9;
event="barHorizontal"
data=JSON.stringify(
	{
		title: {en: 'USD (millions)', ru: 'МЛН долларов'},
		series: [
			{
				name: {en: 'Italy', ru: 'Италия'},
				//color: 'red',
				y: ['I ', 'II ', 'III ', 'IV '],
				x: [100, 400 + k, 250 - k, 300 - k],
			},
			{
				name: {en: 'Japan', ru: 'Япония'},
				//color: 'red',
				y: ['I ', 'II ', 'III ', 'IV '],
				x: [90, 500 + k, 50 - k, 400 - 2 * k],
			},
			{
				name: {en: 'USA', ru: 'США'},
				//color: 'red',
				y: ['I ', 'II ', 'III ', 'IV '],
				x: [190, 100 + k, 150 - k, 800 - 50 * k],
			},
		]
	}
);

