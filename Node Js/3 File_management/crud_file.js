const fs = require('fs');


//path Module
const path = require('path');  // folder module
const dirPath= path.join(__dirname,'crud');  // current crud folder path 
const filePath = `${dirPath}/apple.txt`;



//create file in crud folder

fs.writeFileSync(filePath,'this is a simple file',(err)=>{
if(!err) console.log("file is created")
})

// read

/*
 
 fs.readFile(filePath,'utf8',(err,item)=>{
 console.log(item);

})
*/


// update

/*

fs.appendFile(filePath,' for fruits',(err)=>{
if(!err) console.log("file is updated")
})

*/


// rename
/*
fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file name is updated")
})
*/
  

// Delete
/*

fs.unlinkSync(`${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file is deleted")
})

*/