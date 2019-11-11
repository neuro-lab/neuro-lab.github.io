event="dataTable2"
r1 = Math.random();
r2 = Math.random();

randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 20));


data=JSON.stringify(
{
	config: {
	},
	series: [
			[
				{
					value: 'LEVEL',
					style: 'text-align: center;'
				},
				{
					value: 'AB',
					style: 'text-align: center;'
				},
				{
					value: 'AC',
					style: 'text-align: center;'
				},
				{
					value: 'AD',
					style: 'text-align: center;'
				},
				{
					value: 'AE',
					style: 'text-align: center;'
				},
				{
					value: 'ZUM',
					style: 'text-align: center;'
				},
			],
			[
				{
					value: 1,
					style: 'text-align: right;'
				},
				{
					value: 80,
					style: 'text-align: right;'
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
				{
					value: 206,
					style: 'text-align: right;'
				},
			],
			[
				{
					value: 2,
					style: 'text-align: right;'
				},
				{
					value: 34,
					style: 'text-align: right;'
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
					value: 20,
					style: 'text-align: right;'
				},
				{
					value: 112,
					style: 'text-align: right;'
				},
			],
			[
				{
					value: 3,
					style: 'text-align: right;'
				},
				{
					value: -12,
					style: 'text-align: right; color: red;'
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
				{
					value: 892,
					style: 'text-align: right;'
				},
			],
			[
				{
					value: 4,
					style: 'text-align: right;'
				},
				{
					value: 144,
					style: 'text-align: right;'
				},
				{
					value: 783,
					style: 'text-align: right;'
				},
				{
					value: 824,
					style: 'text-align: right;'
				},
				{
					value: 113,
					style: 'text-align: right;'
				},
				{
					value: 126,
					style: 'text-align: right;'
				},
			],
			[
				{
					value: 5,
					style: 'text-align: right;'
				},
				{
					value: 18,
					style: 'text-align: right;'
				},
				{
					value: 221,
					style: 'text-align: right;'
				},
				{
					value: 605,
					style: 'text-align: right;'
				},
				{
					value: 501,
					style: 'text-align: right;'
				},
				{
					value: 980,
					style: 'text-align: right;'
				},
			],
//			[
//				{
//					value: 6,
//					style: 'text-align: right;'
//				},
//				{
//					value: 882,
//					style: 'text-align: right; color: red;'
//				},
//				{
//					value: 61,
//					style: 'text-align: right; color: LightBlue;'
//				},
//				{
//					value: 71,
//					style: 'text-align: right;'
//				},
//				{
//					value: 18,
//					style: 'text-align: right;'
//				},
//				{
//					value: 892,
//					style: 'text-align: right;'
//				},
//			],

	]
}
);

