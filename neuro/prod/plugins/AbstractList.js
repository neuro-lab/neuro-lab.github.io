/*
 * File:        AbstractList.js
 * Type:        application/javascript
 * Description: AbstractList plugin for NĖURO
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

class AbstractList {
	/*
	 * Options are:
	 * 
	 * showScrollbarY: show scrollbar
	 * maxItems:       Maximal value for items count
	 */
	constructor(options) {
		this.showScrollbarY = options.showScrollbarY;
	}

	onAttach(parent, lang) {
		this.wrapperEl = document.createElement('div');
		this.wrapperEl.style.display = 'flex';
		this.wrapperEl.style.flexDirection = 'column-reverse';
		parent.style.overflowY = 'auto';
		parent.style.border = '1px solid ' + getCssValue('--color-card-grid-foreground');
		parent.appendChild(this.wrapperEl);
	}

	onLang(parent, obj, lang) {
		for (let i = 0; i < this.wrapperEl.childNodes.length; i++) {
			let itemEl = this.wrapperEl.childNodes[i];
			//
			let titleEl = itemEl.querySelector("div[data-title]");
			let titleObj = JSON.parse(titleEl.getAttribute('data-title'));

			titleEl.setAttribute('data-title', JSON.stringify(titleObj));
			titleEl.innerHTML = getString(titleObj, lang);
			//
			let messageEl = itemEl.querySelector("div[data-message]");
			let messageObj = JSON.parse(messageEl.getAttribute('data-message'));
			messageEl.innerHTML = getString(messageObj, lang);
		}
	}

	onEvent(parent, obj, eventName, data, lang) {
		this.eventObj = JSON.parse(data);
		//
		this.series = this.eventObj['series'];
		this.maxItems = this.eventObj['maxItems'];
		//
		if (!this.showScrollbarY)
			parent.style.overflowY = 'hidden';
		for (let i = 0; i < this.series.length; i++) {
			if (this.wrapperEl.childNodes.length == this.maxItems)
				this.wrapperEl.removeChild(this.wrapperEl.firstChild);
			let serie = this.series[i];
			//
			let itemEl = document.createElement('div');
			itemEl.style.display = 'flex';
			itemEl.style.height = '0';
			itemEl.style.padding = '.5rem';
			itemEl.style.borderBottom = '1px solid ' + getCssValue('--color-card-grid-foreground');
			itemEl.style.transition = 'transform 0.3s ease-out';
			itemEl.style.transform = 'scaleY(0)';
			//
			let iconEl = document.createElement('img');
			iconEl.style.width = '3.3rem';
			iconEl.style.height = '3.3rem';
			iconEl.style.paddingInlineEnd = '.5rem';
			iconEl.setAttribute('src', serie['icon']);
			itemEl.appendChild(iconEl);
			//
			let bodyEl = document.createElement('div');
			bodyEl.style.flexDirection = 'column';
			bodyEl.style.flexGrow = '1';
			bodyEl.style.display = 'flex';
			itemEl.appendChild(bodyEl);
			//
			let statusEl = document.createElement('div');
			statusEl.style.width = '.5rem';
			statusEl.style.background = serie['color'];
			statusEl.style.paddingInlineStart = '.5rem';
			itemEl.appendChild(statusEl);
			//
			let titleEl = document.createElement('div');
			let titleObj = serie['title'];
			titleEl.setAttribute('data-title', JSON.stringify(titleObj));
			titleEl.style.fontWeight = 'bold';
			titleEl.style.color = '#666';
			titleEl.innerHTML = getString(titleObj, lang);
			bodyEl.appendChild(titleEl);
			//
			let messageEl = document.createElement('div');
			let messageObj = serie['message'];
			messageEl.setAttribute('data-message', JSON.stringify(messageObj));
			messageEl.style.color = '#666';
			messageEl.innerHTML = getString(serie['message'], lang);
			bodyEl.appendChild(messageEl);
			//
			let timeEl = document.createElement('small');
			timeEl.style.alignSelf = 'flex-end';
			timeEl.style.fontSize = '.5rem';
			timeEl.style.paddingInlineEnd = '.5rem';
			timeEl.innerHTML = new Date().toISOString();
			bodyEl.appendChild(timeEl);
			//
			this.wrapperEl.appendChild(itemEl);
			//
			setTimeout(function() {
				itemEl.style.height = 'auto';
				itemEl.style.transform = 'scaleY(1)';
			}, 100);
		}
	}
}

/* EOF */
