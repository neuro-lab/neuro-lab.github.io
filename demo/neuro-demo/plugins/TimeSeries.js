/*
 * File:        TimeSeries.js
 * Type:        application/javascript
 * Description: Time Series plugin for NĖURO
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

function createArray(start, stop, step) {
	let arr = new Array(Math.ceil((stop - start + 1)/step) );
	let val = start;
	for (let i = 0; i < arr.length; i++) {
		arr[i] = val;
		val += step;
	}
	return arr;
}
const xArrray = createArray(0, 60, 1.5);
class TimeSeries {
	constructor() {
		this.first = true;
		this.k = 0;
		this.full = false;
		//
		this.config = {
				responsive: true,
				displayModeBar: false,
				staticPlot: true,
		};
		//
		this.layout = {
				legend: {
					"orientation": "h",
					xanchor: "left",
					y: 1.2,
				},
				colorway: [getCssValue('--color-card-data-series-0-background'), getCssValue('--color-card-data-series-1-background'), getCssValue('--color-card-data-series-2-background')],
				plot_bgcolor:"transparent",
				paper_bgcolor:"transparent",
				shovermode: false,
				title: false,
				margin: {
					l: 70,
					r: 20,
					b: 20,
					t: 20,
					pad: 0,
				},
				xaxis: {
						tickmode: 'array',
						showticklabels: false,
						tickvals: xArrray,
						rangemode: 'tozero',
						fixedrange: true,
						zeroline: false,
						gridcolor: 'transparent',
					},
				yaxis: {
					gridcolor: getCssValue('--color-card-grid-foreground'),
						linewidth: 5,
						rangemode: 'tozero',
						fixedrange: true,
						zeroline: false,
						linecolor: 'transparent',
					}
		};
		this.eventObj = null;
		this.traces = [];
	}

	onAttach(parent, lang) {
		parent.style.outline = '1px solid ' + getCssValue('--color-card-grid-foreground');
		Plotly.newPlot(parent, this.traces, this.layout, this.config);
	}

	onResize(parent, obj) {
		Plotly.Plots.resize(parent);
	}

	onLang(parent, obj, lang) {
		if (this.eventObj === null)
			return;
		this.layout['yaxis']['title'] = getString(this.title, lang);
		//
		for (let i = 0; i < this.traces.length; i++)
			this.traces[i]['name'] = getString(this.eventObj['series'][i]['name'], lang);
		//
		Plotly.update(parent, this.traces, this.layout);
	}

	/*
	 * accept data as array of values for each serie
	 */
	onEvent(parent, obj, eventName, data, lang) {
		this.eventObj = JSON.parse(data);
		this.title = this.eventObj['title'];
		this.series = this.eventObj['series'];
		//
		this.layout['yaxis']['title'] = getString(this.title, lang);
		//
		this.lastValues = new Array(this.series.length);
		//
		if (this.traces.length == 0) {
			for (let i = 0; i < this.series.length; i++) {
				let serie = this.series[i];
				let trace = {
						y: new Array(xArrray.length),
						name: getString(serie['name'], lang),
						hoverinfo: 'skip',
						hovermode: false,
						mode:'lines',
						opacity: 1,
						line: {shape: 'spline', smoothing: 1, dash: 'line'},
				};
				let color = serie['color'];
				if (color !== undefined)
					trace['line']['color'] = color;
				this.traces.push(trace);
			}
			
		}
		//
		function shiftArrayToRight(arr, n) {
		    for (var i = 0; i < n; i++)
		        arr.unshift(arr.pop());
		}
		//
		if (this.k == xArrray.length) {
			this.k = 0;
			this.full = true;
		}
		//
		if (this.full)
			for (let i = 0; i < this.traces.length; i++)
				shiftArrayToRight(this.traces[i]['y'], 1);
		//
		for (let i = 0; i < this.series.length; i++)
			this.traces[i]['y'][this.k] = this.series[i]['y'];
		if (!this.full)
			this.k++;
		Plotly.update(parent, this.traces, this.layout);
	}
}

/* EOF */
