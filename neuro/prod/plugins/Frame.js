/*
 * File:        Frame
 * Type:        application/javascript
 * Description: Frame plugin for NĖURO
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

class Frame {
	constructor(options) {
	}

	isInteractive(maximized) {
		return maximized;
	}

	onAttach(parent, lang) {
		const t = this;
		//
		parent.style.setProperty('overflow-x', 'hidden', 'important')
		parent.style.setProperty('overflow-y', 'hidden', 'important');
		//
		this.frame = document.createElement('iframe');
		this.frame.setAttribute('frameborder', '0');
		this.frame.setAttribute('scrolling', 'no');
		this.frame.style.transformOrigin = '0 0';
		parent.appendChild(this.frame);
		//
		this.correctSize(parent);
		//
		parent.style.border = '1px solid ' + getCssValue('--color-card-grid-foreground');
		parent.parentElement.querySelector('.glass-pane').addEventListener('click', (e) => {
			let src = t.frame.getAttribute('src');
	 		let a = document.createElement('a');
	 		a.setAttribute('href', makeAbsoluteUrl(src));
	 		a.setAttribute('target', '_blank');
	 		a.click();
		});
		//
		window.addEventListener('online', function(e) {
			let src = t.frame.getAttribute('src');
			t.frame.removeAttribute('src');
			setTimeout(function() {
				t.frame.src = src;
			}, 100);
		});
	}

	onResize(parent, obj) {
		const t = this;
		setTimeout(function() {
			let w = parent.getBoundingClientRect().width;
			let r = w / t.width;
			t.frame.style.height = parent.getBoundingClientRect().height / r + 'px';
			t.frame.style.transform = 'scale(' + r + ')';
		}, 400);
	}
	
	onEvent(parent, obj, eventName, data, lang) {
		this.eventObj = JSON.parse(data);
		//
		let src = this.eventObj['url'];
		this.frame.setAttribute('src', src);
		//
		this.width = this.eventObj['width_px'];
		this.correctSize(parent);
	}

	correctSize(parent) {
		if (this.width === undefined)
			this.width = 1920;
		this.frame.style.width = this.width + 'px';
		if (!parent.style.height.endsWith('px'))
			parent.style.height = parent.getBoundingClientRect().width / (1920/1080) + 'px';
	}
}

/* EOF */
