/*
 * File:        Scattergeo.js
 * Type:        application/javascript
 * Description: Scattergeo plugin for NĖURO
 */

/*
MIT License

Copyright (c) 2019 Nėuro Lab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Home:   https://neuro-lab.github.io
E-Mail: neuro.lab.team@gmail.com

*/

class Scattergeo {
	constructor() {
		this.config = {
			responsive: true,
			displayModeBar: false,
			staticPlot: true,
		};
		this.layout = {
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0,
				pad: 0,
			},
			plot_bgcolor:"transparent",
			paper_bgcolor:"transparent",
			annotations: [],
			showlegend: true,
		    geo : {
		        resolution : 50,
	            showland: true,
	            landcolor: '#f8f8f8',
	            countrycolor: getCssValue('--color-card-title-bar-background'),
		    },
			colorway : [
				getCssValue('--color-card-data-series-0-background'),
				getCssValue('--color-card-data-series-1-background'),
				getCssValue('--color-card-data-series-2-background'),
				getCssValue('--color-card-data-series-3-background'),
				getCssValue('--color-card-data-series-4-background'),
				getCssValue('--color-card-data-series-5-background'),
				getCssValue('--color-card-data-series-6-background'),
				getCssValue('--color-card-data-series-7-background'),
				getCssValue('--color-card-data-series-8-background'),
				getCssValue('--color-card-data-series-9-background'),
			],


		};
		//
		this.eventObj = null;
		//
		this.traces = [];
	}

	onAttach(parent, lang) {		
		parent.style.outline = '1px solid ' + getCssValue('--color-card-grid-foreground');
	}

	onLang(parent, obj, lang) {
		if (this.eventObj === null)
			return;
		Plotly.update(parent, this.traces, this.layout);
	}

	onResize(parent, obj) {
		Plotly.Plots.resize(parent);
	}

	onEvent(parent, obj, eventName, data, lang) {
		parent.innerHTML = '';
		this.eventObj = JSON.parse(data);
		this.series = this.eventObj['series']; 
		//
		this.layout['geo']['scope'] = this.eventObj['scope'];
		for (let i = 0; i < this.series.length; i++) {
			let trace = {
					name : getString(this.series[i]['name'], lang),
			        type : 'scattergeo',
			        mode : 'markers',
			        locations : this.series[i]['locations'],
			        marker : {
			        	size : this.series[i]['marker']['size'],
			            //color : this.series[i]['color'],
			            line : {
				            color : '#888',
			            },
			        },
			};
			this.traces.push(trace);
		}
		//
		Plotly.newPlot(parent, this.traces, this.layout, this.config);
	}
}

/* EOF */
