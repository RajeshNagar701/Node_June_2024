/*
Node.js File System
Node.js includes fs module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file I/O operations.

Let's see some of the common I/O operation examples using fs module.

Reading File
fs.readFile(fileName [,options], callback)
Use fs.readFile() method to read the physical file asynchronously.
*/


var fs = require('fs');

fs.readFile('TextFile.txt','utf8', function (err, data) 
{
    console.log(data);
});
