/*
 * File:        AbstractBarChart.js
 * Type:        application/javascript
 * Description: AbstractBarChart plugin for NĖURO
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

class AbstractBarChart {
	/*
	 * Options are:
	 * 
	 * title:       Axis title
	 * orientation: Bar Chart orientation ('h' - horizontal, 'v' - vertical (default)
	 */
	constructor(options) {
		this.orientation = options.orientation;
		//
		this.config = {
			responsive: true,
			displayModeBar: false,
			staticPlot: true,
		};
		//
		this.layout = {
			plot_bgcolor:"transparent",
			paper_bgcolor:"transparent",
			legend: {
					"orientation": "h",
					xanchor: "left",
					y: 1.1,
				},
			margin: {
				r: 20,
				t: 20,
			},
			title: false,
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
			barmode: 'group',
			xaxis: {
				zeroline: false,
				fixedrange: true,
			},
			yaxis: {
				zeroline: false,
				fixedrange: true,
			}
		};
		//
		this.eventObj = null;
		this.traces = [];
	}

	onAttach(parent, lang) {
		parent.style.outline = '1px solid ' + getCssValue('--color-card-grid-foreground');
		Plotly.newPlot(parent, this.traces, this.layout, this.config);
	}

	onLang(parent, obj, lang) {
		if (this.eventObj === null)
			return;
		this.layout[this.orientation == 'v' ? 'yaxis' : 'xaxis']['title'] = getString(this.title, lang);
		//
		for (let i = 0; i < this.traces.length; i++) {
			let trace = this.traces[i];
			trace['name'] = getString(this.array[i]['name'], lang);
			//
			for (let k = 0; k < this.array[i]['x'].length; k++)
				this.traces[i]['x'][k] = getString(this.array[i]['x'][k], lang);
		}
		Plotly.update(parent, this.traces, this.layout);
	}

	onResize(parent, obj) {
		Plotly.Plots.resize(parent);
	}

	onEvent(parent, obj, eventName, data, lang) {
		this.eventObj = JSON.parse(data);
		//
		this.title = this.eventObj['title'];
		this.array = this.eventObj['series'];
		//
		let axis;
		if (this.orientation == 'v') {
			axis = 'yaxis';
			this.layout['margin']['l'] = 70;
			this.layout['margin']['b'] = 40;
		} else {
			axis = 'xaxis';
			this.layout['margin']['l'] = 40;
			this.layout['margin']['b'] = 70;
		}
		this.layout[axis]['title'] = getString(this.title, lang);
		this.layout[axis]['gridcolor'] = getCssValue('--color-card-grid-foreground');
		//
		this.traces.push(...this.array);
		for (let i = 0; i < this.traces.length; i++) {
			let trace = {};
			trace['marker'] = {color: this.array[i]['color']};
			trace['type'] = 'bar';
			trace['orientation'] = this.orientation;
			trace['name'] = getString(this.array[i]['name'], lang);
			trace['hoverinfo'] = 'skip';
			//
			trace['x'] = [];
			for (let k = 0; k < this.array[i]['x'].length; k++)
				trace['x'].push(getString(this.array[i]['x'][k], lang));
			//
			trace['y'] = [];
			for (let k = 0; k < this.array[i]['y'].length; k++)
				trace['y'].push(this.array[i]['y'][k]);
			//
			this.traces[i] = trace;
		}
		//
		Plotly.update(parent, this.traces, this.layout);
	}
}

/* EOF */
