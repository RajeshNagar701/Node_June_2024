

const fs = require("fs"); 

/*
// read data from json file 
fs.readFile("myjson.json", function(err, data){
	console.log(JSON.parse(data));
})
*/


const data = require("./myjson");

// Defining new data 
let extra_data =
{
    name: "my user",
    age: 35,
    language: ["Java", "Go", "JavaScript"]
};

// STEP 2: Adding new data to users object 
data.push(extra_data);

fs.writeFile("myjson.json",JSON.stringify(data),()=>console.log('Data added success')); 