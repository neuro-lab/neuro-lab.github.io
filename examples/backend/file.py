#!/usr/bin/python3

# File:        file.py
# Type:        text/x-python
# Description: Simple script geneates file 'data.tmp' in temporary directory (example)
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

import time
import random
import os
import tempfile

file = os.path.join(tempfile.gettempdir(), "data.tmp")
f = open(file, 'w')
print('Start writing to file.\nURL: file://' + f.name)

try:
	while True:
		# Write the message
		f.seek(0)
		f.write('event="temperature_file";data=' + str(random.randrange(10, 99)))
		time.sleep(3)

except KeyboardInterrupt:
	f.close()
	print('\nFile closed.')

# EOF

