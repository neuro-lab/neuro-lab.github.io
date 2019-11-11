/*
 * File:        Counter.js
 * Type:        application/javascript
 * Description: Counter plugin for NĖURO
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

class Counter {
	constructor() {
		this.num = null;
	}

	onAttach(parent, lang) {
		this.wrapperEl = document.createElement('div');
		this.wrapperEl.classList.add('clock');
		parent.style.overflowX = 'hidden';
		parent.style.border = '1px solid ' + getCssValue('--color-card-grid-foreground');
		parent.appendChild(this.wrapperEl);
	}

	onEvent(parent, obj, eventName, data, lang) {
		let newNum = JSON.parse(data);
		if (this.num == null) {
			this.num = newNum;
			this.clock = new FlipClock($('.clock'), newNum, {
				clockFace: 'Counter'
			});
		} else {
			let dif = newNum - this.num;
			for (let i = 0; i < dif; i++)
				this.clock.increment();
		}
	}
}

/* EOF */
