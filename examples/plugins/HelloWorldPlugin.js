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
		this.textEl.style.fontSize ='2rem';
		parent.style.display = 'flex';
		parent.style.background = '#eeeeee';
		parent.appendChild(this.textEl);
	}

	onEvent(parent, obj, eventName, data, lang) {
		let text;
		if (eventName == 'temperature_sse')
			text = '<strong>Server-sent Events</strong><br><br>PUSH<br><small>http://localhost:8081</small>';
		else if (eventName == 'temperature_wss')
			text = '<strong>WebSocket</strong><br><br>PUSH<br><small>ws://localhost:8082</small>';
		else if (eventName == 'temperature_fetch')
			text = '<strong>Fetch</strong><br><br>PULL<br><small>http://localhost:8080</small>';
		else if (eventName == 'temperature_file')
			text = '<strong>Local File</strong><br><br>PULL<br><small>/tmp/data.tmp</small>';
		text += '<br><br>Temperature: <strong>' + data + '℃</strong>';
		this.textEl.innerHTML = text;
	}
}
