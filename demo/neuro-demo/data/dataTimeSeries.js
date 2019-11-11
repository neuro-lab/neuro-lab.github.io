event="temperature"
data=JSON.stringify(
	{
		title: {en: 'Temperature, &deg;C x 10<sup>3</sup>', ru: 'Температура, &deg;C &times; 10<sup>3</sup>'},
		series: [
			{
				name: {en: 'Top', ru: 'Верхняя'},
				color: '#CD7EAF',
				y: 1000 + getRandomInt(200),
			},
			{
				name: {en: 'Middle', ru: 'Средняя'},
				y: getRandomInt(100),
				color: '#3BA99C',
			},
			{
				name: {en: 'Bottom', ru: 'Нижняя'},
				y: 400 + getRandomInt(200),
				color: '#666666',
			},
		]
	}
);

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}