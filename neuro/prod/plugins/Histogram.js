/*
 * File:        Histogram.js
 * Type:        application/javascript
 * Description: Histogram plugin for NĖURO
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

class Histogram {
	constructor() {
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
				l: 70,
				r: 20,
				b: 70,
				t: 20,
				pad: 0,
			},
			bargap: 0.05,
			bargroupgap: 0.2,
			barmode: "overlay",
			xaxis: {
				zeroline: false,
				fixedrange: true,

			},
			yaxis: {
				zeroline: false,
				fixedrange: true,
				gridcolor: getCssValue('--color-card-grid-foreground'),
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

			annotations: [],
			showlegend: true,
		};
		//
		this.eventObj = null;
		this.series = [];

	}

	onAttach(parent, lang) {
		parent.style.outline = '1px solid ' + getCssValue('--color-card-grid-foreground');
		Plotly.newPlot(parent, this.series, this.layout, this.config);
	}

	onLang(parent, obj, lang) {
		if (this.eventObj === null)
			return;
		this.layout['xaxis']['title'] = getString(this.x_title, lang);
		this.layout['yaxis']['title'] = getString(this.y_title, lang);
		Plotly.update(parent, this.series, this.layout);
	}

	onResize(parent, obj) {
		Plotly.Plots.resize(parent);
	}

	onEvent(parent, obj, eventName, data, lang) {
		this.eventObj = JSON.parse(data);
		this.x_title = this.eventObj['x_title'];
		this.y_title = this.eventObj['y_title'];
		this.array = this.eventObj['series'];
		//
		this.layout['xaxis']['title'] = getString(this.x_title, lang);
		this.layout['yaxis']['title'] = getString(this.y_title, lang);
		//
		this.series.length = 0;
		for (let i = 0; i < this.array.length; i++) {
			let serie = {
				type: "histogram",
				name: this.array[i]['name'],
				hoverinfo: 'skip',
				hovermode: false,
				autobinx: false,
				opacity: 0.5,
				xbins: {size: 0.1},
				x: this.array[i]['x'],
				y: this.array[i]['y'],
			};
			let color = this.array[i]['color'];
			if (color !== undefined)
				serie['marker'] = {color: color};
			this.series.push(serie);
		}
		Plotly.update(parent, this.series, this.layout);
	}
}

/* EOF */
