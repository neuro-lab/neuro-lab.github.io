/*
 * File:        Table.js
 * Type:        application/javascript
 * Description: Table plugin for NĖURO
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

class Table {
	isSelfHeight() {
		return true;
	}

	onAttach(parent, lang) {
		let tableHolder = document.createElement('div');
		parent.appendChild(tableHolder);
		//
		this.table = document.createElement('table');
		this.table.style.borderCollapse = 'collapse';
		this.table.style.width = '100%';
		tableHolder.appendChild(this.table);
	}

	onLang(parent, obj, lang) {
		let trs = this.table.querySelectorAll('tr');
		for (let r = 0; r < trs.length; r++) {
			let tr = trs[r];
			let tds = tr.querySelectorAll('td');
			let cols = this.rows[r];
			for (let c = 0; c < cols.length; c++) {
				let col = cols[c];
				let td = tds[c];
				let value = col['value'];
				if (value !== undefined && !Array.isArray(value))
					td.innerHTML = getString(value, lang);
			}
		}
	}

	onEvent(parent, obj, eventName, data, lang) {
		this.eventObj = JSON.parse(data);
		let config = this.eventObj['config'];
		this.rows = this.eventObj['series'];
		//
		this.table.innerHTML = '';
		let leftHeader = this.rows[0][0]['value'] === undefined;
		for (let r = 0; r < this.rows.length; r++) {
			let even = r % 2 == 0;
			let tr = document.createElement('tr');
			if (r != 0) {
				if (even) {
					tr.style.background = getCssValue('--color-card-table-odd-rows-background');
					tr.style.color = getCssValue('--color-card-table-odd-rows-foreground');
				}
			}
			if (r == this.rows.length - 1) {
				if (!even)
					this.table.style.borderBottom = '1px solid ' + getCssValue('--color-card-table-odd-rows-background');
			}
			this.table.appendChild(tr);
			let cols = this.rows[r];
			for (let c = 0; c < cols.length; c++) {
				let col = cols[c];
				let value = col['value'];
				let style = col['style'];
				let td = document.createElement('td');
				tr.appendChild(td);
				if (r == 0) {
					if (style !== undefined)
						td.setAttribute('style', style);
					td.style.height = '40px';
					td.style.background = getCssValue('--color-card-table-header-background');
					td.style.color = getCssValue('--color-card-table-header-foreground');
					if (c != cols.length -1)
						td.style.borderInlineEnd = '1px solid ' + getCssValue('--color-card-table-header-grid-foreground');
				} else {
					if (style !== undefined)
						td.setAttribute('style', style);
					if (c != cols.length -1)
						td.style.borderInlineEnd = '1px solid ' + getCssValue('--color-card-grid-foreground');
					td.style.height = '16px';
				}
				if (c == 0 && leftHeader) {
					td.style.background = getCssValue('--color-card-table-header-background');
					td.style.color = getCssValue('--color-card-table-header-foreground');
					td.style.borderBottom = '1px solid ' + getCssValue('--color-card-table-header-grid-foreground');
				}
				if (value !== undefined && value !== null) {
					td.style.padding = '8px';
					if (Array.isArray(value)) {
						let arr = new Array(value.length);
						for (let i = 0; i < cols.length; i++)
							arr[i] = i;
						let data = [{
								x: arr,
								y: value,
								type: 'line',
								fill: 'tozeroy',
								marker: { size: 1 },
								line: {shape: 'spline', smoothing: 1, dash: 'line'},
							}];

						let config = {
								responsive: true,
								displayModeBar: false,
								staticPlot: true,
							};
						let layout = {
							showlegend: false,
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
							plot_bgcolor:"transparent",
							paper_bgcolor:"transparent",
							shovermode: false,
							title: false,
							margin: {
								l: 0,
								r: 0,
								b: 0,
								t: 0,
								pad: 0,
							},
							xaxis: {
								showticklabels: false,
								gridcolor: 'transparent',
									zeroline: false,
								},
							yaxis: {
									showticklabels: false,
									gridcolor: 'transparent',
									zeroline: false,
								}
						};

						let span = document.createElement('div');
						span.style.height = td.style.height;
						span.style.margin = '0';
						span.style.padding = '0';
						span.style.maxWidth = '100%';
						td.appendChild(span);
						//
						Plotly.newPlot(span, data, layout, config);
						td.style.textAlign = 'center';
					} else
						td.innerHTML = getString(value, lang);;
				}
			}
		}
	}
}

/* EOF */
