var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node9th');

const express=require('express');
const app=express();
app.use(express.json());

// Schema means table coumn validation
const userSchema= mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    password:String
});

// create model/table appy validation on table coumn
const userModel=mongoose.model("user",userSchema);


// insert data by schema
app.post("/insert", async (req, resp) => {
    let data = new userModel(req.body)
    const result=await data.save();
    resp.send(result);
})

// get all data
app.get("/get", async (req, resp) => {
    let data = await userModel.find();
    resp.send(data);
})

// get Single data by column

app.get("/single", async (req, resp) => {
    let data = await userModel.find({name:"raj nagar"});
    resp.send(data);
})


// search data by patern column 

app.get("/search/:key", async (req, resp) => {
 
	//console.log(req.params.key);
	let data = await userModel.find({
		"$or":[
                {name:{$regex:req.params.key}},
				{email:{$regex:req.params.key}}
              ]
	});
    resp.send(data);
})



//put http://localhost:5000/update/637f3ba97f546bbfeae336c3

app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await userModel.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

//delete  http://localhost:5000/delete/637f3ba97f546bbfeae336c3
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await userModel.deleteOne(req.params);
    resp.send(data);
})




app.get("/login", async (req, resp) => {
 
	console.log(req.body);
	let data = await userModel.find({
		$and:[{"email":req.body.email},{"password": req.body.password}]
	});
	if(data.length>0)
	{
		resp.send({"msg":"Login success"});	
	}
	else
	{
		resp.send({"msg":"Login Failed due to Wrong Credencial"});	
	}
    
	
})



app.listen(5000);