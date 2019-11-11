#!/usr/bin/python3

# File:        fetch.py
# Type:        text/x-python
# Description: Simple HTTP server with rest API (example)
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

"""

import random
from http.server import BaseHTTPRequestHandler,HTTPServer

# HTTP request handler
class myHandler(BaseHTTPRequestHandler):

	# Handle GET method
	def do_GET(self):
		self.send_response(200)
		self.send_header('Access-Control-Allow-Origin', '*')
		self.send_header('Content-Type', 'text/plain')
		self.send_header('Cache-Control', 'no-cache')
		self.end_headers()

		# Send the message
		self.wfile.write(bytes(str(random.randrange(10, 99)),'utf-8'))

try:
	HOST = 'localhost'
	PORT = 8080

	server = HTTPServer((HOST, PORT), myHandler)
	print('Server started.\nURL: http://' + HOST + ':' + str(PORT))
	server.serve_forever()

except KeyboardInterrupt:
	server.socket.close()
	print('\nServer ended.')

# EOF

