/*
 * File:        HelloWorldPlugin.js
 * Type:        application/javascript
 * Description: 'Hello World!' Plugin plugin for NĖURO
 * 
 * WARNING! This is example file. You can delete it prior production usage.
 */

class HelloWorldPlugin {
	onAttach(parent, lang) {
		this.textEl = document.createElement('div');
		this.textEl.style.margin = 'auto';
		this.textEl.style.fontSize ='3rem';
		parent.style.display = 'flex';
		parent.style.background = '#eeeeee';
		parent.appendChild(this.textEl);
	}

	onEvent(parent, obj, eventName, data, lang) {
		let eventObj = JSON.parse(data);
		let hello_message = eventObj['hello_message'];
		this.textEl.textContent = hello_message;
	}
}
