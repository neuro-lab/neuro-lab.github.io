/*
 * File:        Map.js
 * Type:        application/javascript
 * Description: Map plugin for NĖURO
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

class Map {
	isInteractive(maximized) {
		return maximized;
	}

	onAttach(parent, lang) {
		parent.style.setProperty('overflow-x', 'hidden', 'important')
		parent.style.setProperty('overflow-y', 'hidden', 'important');
	}

	onResize(parent, obj) {
		const t = this;
		setTimeout(function() {
			if (t.map !== undefined)
				t.map.invalidateSize();
		}, 400);
	}
	
	onEvent(parent, obj, eventName, data, lang) {
		parent.innerHTML = '';
		let eventObj = JSON.parse(data);
		let series = eventObj['series'];
		
		let options = {
			attributionControl: false,
			zoomControl: false,
			dragging: false,
		}
		options['zoom'] = eventObj['zoom'];
		options['center'] = eventObj['center'];
		//
		this.map = L.map(parent, options);
		L.tileLayer(
				'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		}).addTo(this.map);
		
		for (let i = 0; i < series.length; i++)
			L.marker(series[i]).addTo(this.map);
	}
}

/* EOF */
