
/*
Read HTML file on Server
Create a Node.js file that reads the HTML file, and return the content:


*/


var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
	
	fs.readFile('demofile1.html','utf8', function (err, data) 
	{
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);	


