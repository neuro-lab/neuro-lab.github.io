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
			showlegend: false,
		    geo : {
		        resolution : 50,
	            showland: true,
	            landcolor: '#f8f8f8',
	            countrycolor: getCssValue('--color-card-title-bar-background'),
		    }

		};
		//
		this.eventObj = null;
		//
		this.data = [{
	        type : 'scattergeo',
	        mode : 'markers',
	        locations : [],
	        marker : {
	        	size : [],
	            color : [],
	            line : {
		            color : '#888',
	            }
	        }		}];
		this.serie = this.data[0];
	}

	onAttach(parent, lang) {		
		parent.style.outline = '1px solid ' + getCssValue('--color-card-grid-foreground');
		//Plotly.newPlot(parent, this.data, this.layout, this.config);
	}

	onLang(parent, obj, lang) {
		if (this.eventObj === null)
			return;
		Plotly.update(parent, this.data, this.layout);
	}

	onResize(parent, obj) {
		Plotly.Plots.resize(parent);
	}

	onEvent(parent, obj, eventName, data0, lang) {
		parent.innerHTML = '';
		this.eventObj = JSON.parse(data0);
		//
		this.layout['geo']['scope'] = this.eventObj['scope'];
		this.serie['locations'].push(...this.eventObj['locations']);
		this.serie.marker['size'].push(...this.eventObj['marker']['size']);
		this.serie.marker['color'] = getCssValue('--color-card-data-series-0-background');
		//
		Plotly.newPlot(parent, this.data, this.layout, this.config);
	}
}

/* EOF */
