
var fs = require('fs');

//var data = fs.writeFileSync('dummyfile.txt', 'writecode');
const input=process.argv;
if(input[2]=='add')
{
	fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove')
{
	fs.unlinkSync(input[3]);
}
else
{
	console.log('Invalid input');
}



//cmd : node index.js add myfile.txt 'hi hello'  // add file
//cmd : node index.js remove myfile.txt  // remove file