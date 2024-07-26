
/*
File System & Command line arguments

We can take input from user using command line arguments (process.argv)


node app.js add 

- process.argv is Global object like console 

console.log(process.argv) 

- so we can pass value from command line like what operation we want to perform 
node app.js add


*/
// Importing the process module
const process = require('process');  

// Printing process.argv property value
console.log(process.argv);

var data=process.argv[2];

if(data=="one")
{
	console.log("Jaymin");
}
else if(data=="two")
{
	console.log("Vraj");
}
else if(data=="three")
{
	console.log("Jayprakash");
}
else
{
	console.log("Not proper arg");
}