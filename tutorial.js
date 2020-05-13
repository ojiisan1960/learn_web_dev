
const http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World!\n');
}).listen(8080, '192.168.56.102');

console.log('Server running at http://192.168.56.102:8080/');
