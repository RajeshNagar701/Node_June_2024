
// conver json data to object
const fs = require("fs");
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.write("",fs.readFile("myjson.json", function(err, data){
	console.log(JSON.parse(data));
  }));
  res.end();
}).listen(8080);

