/*
 * File:        dataHelloWorld.js
 * Type:        application/javascript
 * Description: Example data provider for NĖURO
 * 
 * WARNING! This is example file. You can delete it prior production usage.
 */

/*
 * Simple JavaScript data provider for NĖURO dashboard
 * 
 * Two fields are required:
 * 1) event - event name
 * 2) data - arbitrary data string (E.g. JSON object serialized as string)
 * 
 * 'event' and 'data' fields will received as parameter in onEvent() plugin method:
 */

event="hello_world"
data=JSON.stringify({
	hello_message: 'Hello NĖURO!'
});
