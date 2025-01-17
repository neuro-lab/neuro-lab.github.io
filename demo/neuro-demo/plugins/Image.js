/*
 * File:        Image
 * Type:        application/javascript
 * Description: Image plugin for NĖURO
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

class Image {
	isInteractive(maximized) {
		return maximized;
	}

	isSelfHeight() {
		return true;
	}

	onAttach(parent, lang) {
		this.img = document.createElement('img');
		this.img.style.display = 'block';
		this.img.style.maxWidth = '100%';
		this.img.style.width = '100%';
		parent.appendChild(this.img);
	}

	onEvent(parent, obj, eventName, data, lang) {
		this.eventObj = JSON.parse(data);
//		let config = this.eventObj['config'];
//		let background = config['background'];
//		if (background !== undefined)
//			parent.style.background = background;
		let src = this.eventObj['url'];
		this.img.setAttribute('src', src);
	}
}
