

const dbConnect=require('./MongoConn');


// 1) getdata from database

/*
async function getData(){
	
	let conn= await dbConnect()
	let res = await conn.find().toArray(); // fetch all data
	//let res = await res.find({id:1}).toArray(); // fetch particuler column data
	console.log(res);
}
getData();
*/


// 2) insert from database
/*
async function postData(){
	
	let conn= await dbConnect()
	//let res = await conn.insertOne({id: 3,name:'patel',email:'patel@gmail.com',password:'1234'}); 
	let res = await conn.insertMany([
						{id: 4,name:'spatel',email:'patel@gmail.com',password:'1234'},
						{id: 5,name:'apatel',email:'patel@gmail.com',password:'1234'},
						{id: 6,name:'bpatel',email:'patel@gmail.com',password:'1234'},
					]); 
	console.log(res);
}
postData();
*/


// 3) update from database
/*
async function putData(){
	
	let conn= await dbConnect()
	let data = await conn.updateOne({id:1},{$set:{name:"raj nagar",email:"rajnagarn@gmail.com"}});
	console.log(data);
	if(data.acknowledged==true)
	{
		console.log("User Update Success");
	}
}
putData();
*/



// 4) delete from database


async function deleteData(){
	
	let conn= await dbConnect()
	let data = await conn.deleteOne({id:6});
	console.log(data);
	if(data.acknowledged==true)
	{
		console.log("User Delete Success");
	}
}
deleteData();
