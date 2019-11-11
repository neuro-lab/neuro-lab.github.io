/*
 * File:        PieChart.js
 * Type:        application/javascript
 * Description: PieChart plugin for NĖURO
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

class PieChart {
	constructor() {
		this.config = {
			responsive: true,
			displayModeBar: false,
			staticPlot: true,
		};
		this.layout = {
			legend: {
				"orientation": "h",
				xanchor: "left",
				y: 1.2,
			},
			margin: {
				l: 40,
				r: 40,
				b: 30,
				t: 20,
				pad: 0,
			},
			colorway : [getCssValue('--color-card-data-series-0-background'), getCssValue('--color-card-data-series-1-background'), getCssValue('--color-card-data-series-2-background')],
			plot_bgcolor:"transparent",
			paper_bgcolor:"transparent",
			annotations: [],
			showlegend: true,
		};
		//
		this.series = null;
		//
		this.data = [{}];
		this.serie = this.data[0];
		this.serie.labels = [];
		this.serie.values = [];
		this.serie.type = 'pie';
		this.serie.hole = .6;
		this.serie.textposition = 'outside';
		this.serie.hoverinfo = 'skip';
		this.serie.hovermode = false;
		this.serie['marker'] = {colors: []};
	}

	onAttach(parent, lang) {		
		parent.style.outline = '1px solid ' + getCssValue('--color-card-grid-foreground');
		Plotly.newPlot(parent, this.data, this.layout, this.config);
	}

	onLang(parent, obj, lang) {
		if (this.series === null)
			return;
		this.serie.labels = [];
		for (let i = 0; i < this.series.length; i++) {
			let name = getString(this.series[i]['name'], lang);
			this.serie.labels.push(name);
		}
		Plotly.update(parent, [this.serie], this.layout);
	}

	onResize(parent, obj) {
		Plotly.Plots.resize(parent);
	}

	onEvent(parent, obj, eventName, data, lang) {
		this.series = JSON.parse(data);
		//
		for (let i = 0; i < this.series.length; i++) {
			let name = getString(this.series[i]['name'], lang);
			let value = this.series[i]['y'];
			let color = this.series[i]['color'];
			this.serie.labels.push(name);
			this.serie.values.push(value);
			if (color !== undefined)
				this.serie['marker']['colors'].push(color);
		}
		Plotly.update(parent, this.data, this.layout);
	}
}

/* EOF */
