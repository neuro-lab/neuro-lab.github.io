k = 4*Math.random() + 9;
event="bbb"
data=JSON.stringify(
	{
		title: {en: 'USD (millions)', ru: 'МЛН долларов'},
		series: [
			{
				name: {en: 'Italy', ru: 'Италия'},
				//color: 'red',
				x: ['1975', '1976', '1977'],
				y: [100,400 + k, 500 - k],
			},
			{
				name: {en: 'Japan', ru: 'Япония'},
				color: '#69D1C5',
				x: ['1975', '1976', '1977'],
				y: [80,270 + k, 700 - k],
			}
		]
	}
);

