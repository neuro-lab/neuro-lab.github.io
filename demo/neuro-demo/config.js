/*
 * File:        config.js
 * Type:        application/javascript
 * Description: NĖURO Configuration File
 */

/**
 * Section name: sys_properties
 * Contains common settings
 */
sys_properties = {

	/*
	 * Zoom percentage
	 * Default: 100
	 */
	"zoom_pct": 100,

    /**
     * URL of help file
     */
    "help_url" : "https://neuro-lab.github.io",

    /**
     * Ordered list of available languages
     */
    "langs" : [ 'en', 'ru',
    //        'he'
    ],

    /**
     * Placeholder for search field
     */
    "search_placeholder" : {
        en : 'Search',
        ru : 'Поиск'
    },

    /**
     * Used as:
     * Application name
     */
    "name" : {
        en : "Acme Inc. Performance Dashboard",
        ru : "Acme Inc. Экспресс мониторинг"
    },

    /**
     * Used as:
     * 1. Browser window title;
     * 2. Dashboard Header text
     */
    "title" : {
        en : "Acme Inc.",
        ru : "Acme Inc."
    },

    /**
     * Used as:
     * Status text online
     */
    "status_text_online" : {
        en : "Online",
        ru : "Онлайн"
    },

    /**
     * Used as:
     * Status text online
     */
    "status_text_offline" : {
        en : "Offline",
        ru : "Офлайн"
    },

    /**
     * Grayscale filter
     * Default: false
     */
    "grayscale" : false,

    /**
     * Display header
     * Default: true
     */
    "header" : true,

    /**
     * Display footer
     * Default: true
     */
    "footer" : false,

    /**
     * Display group_headers
     * Default: true
     */
    "group_headers" : false,

    /**
     * Display card_headers
     * Default: true
     */
    "card_headers" : true,

    /**
     * Check config changed interval in seconds
     * Default value: 0 (no check)
     */
    "check_config_changed_interval_sec" : 2,

    /**
     * Stand-by timeout in seconds
     * Default value: 300 (5 minutes)
     */
    "stand_by_timeout_sec" : 3, // 5 minutes

    /**
     * Default card height in pixels
     */
    "default_card_height_px" : 350,

    /**
     * Default group width in pixels
     */
    "default_group_width_px" : 500,
};

/**
 * Section name: sys_resources
 * List of third party CSS and/or JavaScript files (Put all your libraries here!)
 */

sys_resources = [ //
"assets/leaflet/leaflet.css", //
"assets/leaflet/leaflet.js", //
"assets/plotly/plotly.js", //
"assets/calendar/packages/core/main.css", //
"assets/calendar/packages/daygrid/main.css", //
"assets/calendar/packages/timegrid/main.css", //
"assets/calendar/packages/list/main.css", //
"assets/calendar/packages/core/main.js", //
"assets/calendar/packages/interaction/main.js", //
"assets/calendar/packages/daygrid/main.js", //
"assets/calendar/packages/timegrid/main.js", //
"assets/calendar/packages/list/main.js", //
"assets/jquery/jquery-2.1.1.min.js", //
"assets/flipclock/flipclock.css", //
"assets/flipclock/flipclock.min.js", //
"plugins/Counter.js", //
"plugins/Map.js", //
"plugins/PieChart.js", //
"plugins/AbstractBarChart.js", //
"plugins/BarChartVertical.js", //
"plugins/BarChartHorizontal.js", //
"plugins/TimeSeries.js", //
"plugins/Table.js", //
"plugins/AbstractList.js", //
"plugins/List.js", //
"plugins/ListWithScrollbar.js", //
"plugins/Image.js", //
"plugins/Histogram.js", //
"plugins/Calendar.js", //
"plugins/Frame.js", //
"plugins/LineChart.js", //
"plugins/LineChartFilled.js", //
"plugins/Scattergeo.js", //
"plugins/HelloWorldPlugin.js", //
];

/**
 * Section name: sys_eventHandler
 */

sys_eventHandler = function(eventName, data) {
	if (eventName == 'temperature') {
		let series = JSON.parse(data)['series'];
		let topTemperature = series[0]['y'].toFixed(2);
		return {
		    statusColor : "pink",
		    icon : 'icon512.png',
		    title : {
		        en : "Temperature",
		        ru : "Температура"
		    },
		    message : {
		        en : "Top Lid Temperature is: " + topTemperature + " &deg;C &times; 10<sup>3</sup>",
		        ru : "Температура верхней крышки: " + topTemperature + " &deg; C&times; 10<sup>3</sup>"
		    }
		}
	}
	if (eventName == 'weather') {
		let o = JSON.parse(data);
		let main = o['main'];
		let temp = main['temp'] + Math.random() * 145;
		let pressure = main['pressure'] + Math.random() * 175;
		let humidity = main['humidity'] + Math.random() * 400;
		if (temp > 410) {
			return {
			    "notification" : true,
			    "title" : "Abc",
			    statusColor : "#DDD",
			    icon : "logo.png",
			    message : 'You should see this: pressure: <b>' + pressure + '</b>, humidity: ' + humidity
			};
		} else {
			return {
			    console : '*** \u001b[1m' + '\u001b[31m' + 'df gdhgjkh sdfkgh jksd gsdhjfkg jdfgkjd' + '\u001b[32m' + " ***",
			    statusColor : "#DDD",
			    icon : "logo.png",
			    message : 'You should see this: pressure: <b>' + pressure + '</b>, humidity: ' + humidity
			};
		}
	} else if (eventName == 'zzz') {
		return {
		    statusColor : "green",
		    icon : "icon512.png",
		    message : 'WSS ssssssssssssssssssssssssssssssssssssssssssssssssssss: ' + data
		};
	} else if (eventName == 'rrr') {
		return {
		    statusColor : "#e0ffff",
		    icon : "icon512.png",
		    message : 'SSE ' + JSON.parse(data).fld1
		};
	} else if (eventName == 'kkk') {
		return {
		    "url" : "https://textbelt.com/text?phone=+972544755740&message=Hello%20my%20world2&key=textbelt",
		    "method" : "GET",
		    "audio" : "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3",
		    "volume" : .3,
		    "notification" : true,
		    "title" : "Abc",
		    statusColor : "orange",
		    icon : "icon192x192.png",
		    message : 'KKKKKKKKKK: <b>' + data + '</b>'
		};
	} else if (eventName == 'urg') {
		let val = JSON.parse(data)['val'];
		let image;
		if (val == 'A') {
			image = {
			    ru : "data/signs/E2212-live-test-sign.png",
			    en : "data/signs/E2212-live-test-sign.png"
			}
		} else if (val == 'B') {
			image = {
			    ru : "data/signs/G3507.png",
			    en : "data/signs/G3507.png"
			}
		} else if (val == 'C') {
			image = {
			    ru : "data/signs/F3770.png",
			    en : "data/signs/F3770.png"
			}
		}
		return {
		    statusColor : "#ff00ff",
		    icon : "icon512.png",
		    message : image,
		};
	} else if (eventName == 'fin') {
		return {
		    statusColor : "#ff00ff",
		    icon : "icon512.png",
		    message : 'ZZZZZZ ' + JSON.parse(data)
		};
	}
	return {
	    statusColor : "pink",
	    icon : 'icon192x192.png',
	    message : {
	        en : "bbbbbb",
	        ru : "БББББББББ"
	    }
	};

};

/**
 * Section name: sys_eventProviders
 * List of Event Sources URL(s)
 */

sys_eventProviders = [ 
{
    "type" : "FILE",
    "events" : [ 'hello_world' ],
    "url" : "data/dataHelloWorld.js",
    //"interval" : 3000,
}, {
    "type" : "FILE",
    "events" : [ 'dataScattergeo' ],
    "url" : "data/dataScattergeo.js",
}, {
    "type" : "FILE",
    "events" : [ 'cal1' ],
    "url" : "data/dataCalender1.js",
}, {
    "type" : "FILE",
    "events" : [ 'counter' ],
    "url" : "data/dataCounter.js",
    "interval" : 5000,
}, {
    "type" : "FILE",
    "events" : [ 'cal2' ],
    "url" : "data/dataCalender2.js",
}, {
    "type" : "FILE",
    "events" : [ 'cal3' ],
    "url" : "data/dataCalender3.js",
}, {
    "type" : "FILE",
    "events" : [ 'linechart' ],
    "url" : "data/dataLineChart.js",
}, {
    "type" : "FILE",
    "events" : [ 'frame' ],
    "url" : "data/dataFrame.js",
//		"interval" : 6000,
}, {
    "type" : "FILE",
    "events" : [ 'img' ],
    "url" : "data/dataIMG.js",
}, {
    "type" : "FILE",
    "events" : [ 'imageCity' ],
    "url" : "data/dataImageCity.js",
}, {
    "type" : "FILE",
    "events" : [ 'map' ],
    "url" : "data/dataMap.js",
}, {
    "type" : "FILE",
    "events" : [ 'map2' ],
    "url" : "data/dataMap2.js",
}, {
    "type" : "FILE",
    "events" : [ 'map3' ],
    "url" : "data/dataMap3.js",
}, {
    "type" : "FILE",
    "events" : [ 'dataTable1' ],
    "url" : "data/dataTable1.js",
//		"interval" : 3000,
}, {
    "type" : "FILE",
    "events" : [ 'histogram' ],
    "url" : "data/dataHistogram.js",
//	"interval" : 3000,
}, {
    "type" : "FILE",
    "events" : [ 'dataTable2' ],
    "url" : "data/dataTable2.js",
    "interval" : 3000,
}, {
    "type" : "FILE",
    "events" : [ 'list' ],
    "url" : "data/dataList.js",
    "interval" : 3000,
}, {
    "type" : "FILE",
    "events" : [ 'temperature' ],
    "url" : "data/dataTimeSeries.js",
    "interval" : 400,
}, {
    //}, {
    "type" : "FILE",
    "events" : [ 'bbb' ],
    "url" : "data/dataBar.js",
//"interval" : 1000,
}, {
    //}, {
    "type" : "FILE",
    "events" : [ 'barHorizontal' ],
    "url" : "data/dataBarHorizontal.js",
//"interval" : 1000,
}, {
    "type" : "FILE",
    "events" : [ 'ppp', 'my', 'ray', 'rrr', 'message2' ],
    "url" : "data/dataPie.js",
//"interval" : 1000,

//},{
//	"type" : "FETCH",
//    "events" : [ 'weather', 'test', 'my', 'ray', 'rrr', 'message2' ],
//    "url" : "https://api.openweathermap.org/data/2.5/weather?q=Jerusalem,il&appid=9560a952271066031f22dde9abbf46cc",
//    "interval" : 5000,
//    "method" : "GET"
//}, {
//    "type" : "WSS",
//    "events" : [ 'zzz' ],
//    "url222" : "wss://echo.websocket.org/",
//        "url" : "ws://localhost:8080/"
//}, {
//        "type" : "FETCH",
//        "events" : [ 'fin' ],
//        "url" : "https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL",
//        "interval" : 2000,
//        "method" : "GET"
//}, {
//    "type" : "FILE",
//    "events" : [ 'test', 'my', 'ray', 'rrr', 'message2' ],
//    "url" : "http://localhost:8080/test.txt",
//    "interval" : 3000,
//}, {
//    "type" : "FILE",
//    "events" : [ 'kkk'],
//    "url" : "/home/qsecofr/Desktop/dataKKK.js",
//    "interval" : 9995000,
//}, {
//    "type" : "222FILE",
//    "events" : [ 'test', 'my', 'ray', 'rrr', 'message2' ],
//    "url" : "/home/qsecofr/git/neural-dashboard-neural-dashboard.github.io/my_pull_source2.js",
//    "interval" : 9992000,
//}, {
//    "type" : "222SSE",
//    "events" : [ 'test', 'my', 'ray', 'rrr', 'message2' ],
//    "url" : "http://localhost:8081/broker/events",
} ];

/**
 * Section name: sys_groups
 */

sys_groups = [ {
    "title" : {
        en : "F71-KW System",
        ru : "Система F71-KW"
    },
    //"width" : 540,
    "minimizable" : true,
    "cards" : [
    {
            "title" : {
            	en : "Hello World",
                ru : "Привет, Мир",
            },
            "class" : "HelloWorldPlugin",
            "events" : [ 'hello_world' ],
            "tags" : [ 'mainframe' ]
        }, {
        "title" : {
            ru : "Амплитуда сигнала",
            en : "Signal amplitude"
        },
        "class" : "LineChartFilled",
        "events" : [ 'linechart' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : {
            ru : "Внешняя память",
            en : "External Memory"
        },
        "class" : "LineChart",
        "events" : [ 'linechart' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : {
            ru : "Сервер ITR-24. Внешняя память",
            en : "Server ITR-24. External Memory"
        },
        "class" : "Table",
        "events" : [ 'dataTable1' ],
        "tags" : [ 'mainframe' ]
    } ]
}, {
    "title" : {
        en : "F72-KW System",
        ru : "Система F72-KW"
    },
    //"width" : 600,
    "minimizable" : true,
    "cards" : [ {
        "title" : {
            ru : "Календарь",
            en : "Event Calendar"
        },
        "class" : "Calendar",
        "events" : [ 'cal1' ],
        "tags" : [ 'memort', 'performance' ],
        "height" : 350,
    }, {
        "title" : {
            en : "BA Market Capitalization",
            ru : "BA Капитализация рынка"
        },
        "class" : "BarChartHorizontal",
        "events" : [ 'barHorizontal' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : {
            ru : "Карта точек доступа",
            en : "Access points Map"
        },
        "class" : "Map",
        "maximizeOnClick" : true,
        "events" : [ 'map' ],
        "tags" : [ 'memort', 'performance' ]
    }, ]
}, {
    "title" : {
        en : "F73-KW System",
        ru : "Система F73-KW"
    },
    //"width" : 400,
    "minimizable" : true,
    "cards" : [ {
        "title" : {
            ru : "Счётчик событий",
            en : "Event Count"
        },
        "class" : "Counter",
        "events" : [ 'counter' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : "Frame",
        "class" : "Frame",
        "events" : [ 'frame' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : "MN-1200ATK Station Webcam",
        "class" : "Image",
        "events" : [ 'img' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : "KZ20 Molecular Groups",
        "class" : "Table",
        "events" : [ 'dataTable2' ],
        "tags" : [ 'mainframe' ]
    } ]
}, {
    "title" : {
        en : "F74-KW System",
        ru : "Система F74-KW"
    },
    //"width" : 400,
    "minimizable" : true,
    "cards" : [ {
        "title" : "External Lid Events",
        "class" : "List",
        "events" : [ 'list' ],
        "tags" : [ 'mainframe' ],
    }, {
        "title" : {
            en : "Lid Temperature",
            ru : "Температура крышки"
        },
        "class" : "TimeSeries",
        "events" : [ 'temperature' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : {
            en : "Sensor 005045621 Control value",
            ru : "Сенсор 005045621 контрольные показатели"
        },
        "class" : "Histogram",
        "events" : [ 'histogram' ],
        "tags" : [ 'mainframe' ]
    },

    ]
}, {
    "title" : {
        en : "F75-KW System",
        ru : "Система F75-KW"
    },
    //"width" : 400,
    "minimizable" : true,
    "cards" : [ {
        "title" : {
            en : "Market Capitalization",
            ru : "Капитализация рынка"
        },
        "class" : "BarChartVertical",
        "events" : [ 'bbb' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : {
            en : "Total by country",
            ru : "Всего по стране"
        },
        "class" : "PieChart",
        "events" : [ 'ppp' ],
        "tags" : [ 'ppp', 'weather' ]
    }, ]
}, {
    "title" : {
        en : "F76-KW System",
        ru : "Система F76-KW"
    },
    //"width" : 500,
    "minimizable" : true,
    "cards" : [ {
        "title" : {
            ru : "Scattergeo сигнала",
            en : "Scattergeo amplitude"
        },
        "class" : "Scattergeo",
        "events" : [ 'dataScattergeo' ],
        "tags" : [ 'mainframe' ]
    }, {
        "title" : {
            ru : "Зона Q. Карта",
            en : "Q-Zone Map"
        },
        "class" : "Map",
        "maximizeOnClick" : true,
        "events" : [ 'map2' ],
        "tags" : [ 'memort', 'performance' ],
    }, {
        "title" : {
            ru : "Календарь",
            en : "Event Calendar"
        },
        "class" : "Calendar",
        "events" : [ 'cal2' ],
        "tags" : [ 'memort', 'performance' ],
        "height" : 350,
    }, ]
}, {
    "title" : {
        en : "F77-KW System",
        ru : "Система F77-KW"
    },
    //"width" : 500,
    "minimizable" : true,
    "cards" : [ {
        "title" : {
            ru : "Календарь",
            en : "Event Calendar"
        },
        "class" : "Calendar",
        "events" : [ 'cal3' ],
        "tags" : [ 'memort', 'performance' ],
        "height" : 350,
    }, {
        "title" : {
            ru : "Зона R. Карта",
            en : "R-Zone Map"
        },
        "class" : "Map",
        "events" : [ 'map3' ],
        "tags" : [ 'memort', 'performance' ]
    }, {
        "title" : "Airport Terminal Area",
        "class" : "Image",
        "events" : [ 'imageCity' ],
        "tags" : [ 'mainframe' ]
    }, ]
},

];