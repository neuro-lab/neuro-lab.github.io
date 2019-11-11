#!/usr/bin/python3

# File:        sse.py
# Type:        text/x-python
# Description: Simple HTTP server with Server-sent events functionality (example)
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


Simple HTML Server-sent events client to test client side:

--------------------------------[ HTML START ]-------------------------------
<!DOCTYPE html>
<html>
	<head>
		<title>Server-sent events client</title>
	</head>
	<body>
		<script>
			var source = new EventSource('http://localhost:8081');
			source.addEventListener('temperature_sse', function(event) {
				document.body.textContent = event.data;
			}, false);
		</script>
	</body>
</html>
--------------------------------[ HTML END   ]-------------------------------

"""
import time
import random
from http.server import BaseHTTPRequestHandler,HTTPServer

# HTTP request handler
class myHandler(BaseHTTPRequestHandler):

	# Handle GET method
	def do_GET(self):
		self.send_response(200)
		self.send_header('Access-Control-Allow-Origin', '*')
		self.send_header('Content-Type', 'text/event-stream')
		self.send_header('Cache-Control', 'no-cache')
		self.send_header('Connection', 'keep-alive')
		self.end_headers()

		# Send the message
		while True:
			self.wfile.write(bytes('event: temperature_sse\n','utf-8'))
			self.wfile.write(bytes('data: ' + str(random.randrange(10, 99)) + '\n\n','utf-8'))
			time.sleep(3)

try:
	HOST = 'localhost'
	PORT = 8081

	server = HTTPServer((HOST, PORT), myHandler)
	print('Server started.\nURL: http://' + HOST + ':' + str(PORT))
	server.serve_forever()

except KeyboardInterrupt:
	server.socket.close()
	print('\nServer ended.')

# EOF

