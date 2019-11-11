event="dataScattergeo"
data=JSON.stringify(
	{
        scope : 'europe',
        resolution : 50,
        series: [
        	{
        		name: "AB-testing",
        		color: 'red',
        		locations : [ 'FRA', 'DEU', 'RUS', 'ESP' ],
        		marker : {
        			size : [ 10, 20, 15, 10 ],
        		},
        	},
        	{
        		name: "performance",
        		color: 'blue',
        		locations : [ 'NOR', 'ITA' ],
        		marker : {
        			size : [ 15, 10 ],
        		},
        	},

        ]
	}
);

