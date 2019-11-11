#!/usr/bin/python3

# File:        ws.py
# Type:        text/x-python
# Description: Simple WebSocket server (example)
# NOTE:        Theis file is not part of NĖURO

"""
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


Simple HTML WebSocket client to test client side:

--------------------------------[ HTML START ]-------------------------------
<!DOCTYPE html>
<html>
	<head>
		<title>WebSocket client</title>
	</head>
	<body>
		<script>
			var ws = new WebSocket("ws://localhost:8082");
			ws.addEventListener('message', function (event) {
				document.body.textContent = event.data;
			}, false);
		</script>
	</body>
</html>
--------------------------------[ HTML END   ]-------------------------------

"""

import time
import random
import asyncio
import websockets

async def send(websocket, path):

	# Send the message
	while True:
		await websocket.send(str(random.randrange(10, 99)))
		time.sleep(3)

try:
	HOST = 'localhost'
	PORT = 8082

	server = websockets.serve(send, HOST, PORT)
	print('Server started.\nURL: ws://' + HOST + ':' + str(PORT))
	asyncio.get_event_loop().run_until_complete(server)
	asyncio.get_event_loop().run_forever()

except KeyboardInterrupt:
	asyncio.get_event_loop().stop()
	print('\nServer ended.')

# EOF

