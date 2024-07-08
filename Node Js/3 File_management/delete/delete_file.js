/*
Delete Files
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:
*/

var fs = require('fs');

fs.unlink('test.txt', function () {
    
    console.log('Delete operation complete.');

});