event="list"
r1 = Math.random();
r2 = Math.random();
data=JSON.stringify(
	{
		maxItems: 20,
		series: [
			{
				title: {en: "Bottom lid closed", ru: "Нижняя крышка закрыта"},
				message: {en: "Average close time: 217 sec.", ru: "Среднее время закрытия: 217 сек."},
				icon: "data/icons/icon-2.svg",
				color: "pink",
			},
		]
	}
);

