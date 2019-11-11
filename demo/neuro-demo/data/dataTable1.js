event="dataTable1"
r1 = Math.random();
r2 = Math.random();

randomArr = Array.from({length: 4}, () => Math.floor(Math.random() * 40));


data=JSON.stringify(
{
	config: {
	},
	series: [
			[
				{
				},
				{
					value: 'RAM,<br>Gb',
				},
				{
					value: {en: 'Level,<br>points', ru: 'Порог,<br>тчк.'},
				},
				{
					value: 'IN,<br>Mb/sec',
				},
				{
					value: 'OUT,<br>Mb/sec',
				},
			],
			[
				{
					value: {en: 'Prod.', ru: 'Прод.'}
				},
				{
					value: Array.from({length: 4}, () => Math.floor(Math.random() * 40)),
				},
				{
					value: 789,
					style: 'text-align: right;'
				},
				{
					value: 619,
					style: 'text-align: right;'
				},
				{
					value: 21,
					style: 'text-align: right;'
				},
			],
			[
				{
					value: {en: 'Test1', ru: 'Тест1'}
				},
				{
					value: Array.from({length: 4}, () => Math.floor(Math.random() * 40)),
				},
				{
					value: -6,
					style: 'text-align: right; color: red;'
				},
				{
					value: 571,
					style: 'text-align: right;'
				},
				{
					value: 4,
					style: 'text-align: right;'
				},
			],
			[
				{
					value: {en: 'Test2', ru: 'Тест2'}
				},
				{
					value: Array.from({length: 4}, () => Math.floor(Math.random() * 40)),
				},
				{
					value: 0,
					style: 'text-align: right; color: LightBlue;'
				},
				{
					value: 71,
					style: 'text-align: right;'
				},
				{
					value: 18,
					style: 'text-align: right;'
				},
			],
			[
				{
					value: {en: 'Total', ru: 'Всего'},
					style: 'font-weight: bold;'
				},
				{
					value: Array.from({length: 4}, () => Math.floor(Math.random() * 40)),
				},
				{
					value: 783,
					style: 'text-align: right; font-weight: bold;'
				},
				{
					value: 1824,
					style: 'text-align: right; font-weight: bold;'
				},
				{
					value: 113,
					style: 'text-align: right; font-weight: bold;'
				},
			],
	]
}
);

