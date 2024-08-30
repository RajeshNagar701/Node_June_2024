
const dbConnect=require('./MongoConn');
const express=require('express');
const app=express();


app.use(express.json());

// get all data
app.get('/getdata', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find().toArray();
    resp.send(data);
});


// get single or particular column data
app.get('/getsingle1', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({id:5}).toArray();
    resp.send(data);
});

// get single or particular column data
app.get('/getsingle2', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find(req.query).toArray();
	console.log(req.query);
    resp.send(data);
});


// data insert static
app.get("/postdata1", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne({id: 9,name:'9patel',email:'9patel@gmail.com',password:'71234'})
    resp.send({result:"Static Data Inserted Success"});
})


// data insert dynamic

app.post("/postdata2", async (req, resp) => {
	let data = await dbConnect();
    let result = await data.insertOne(req.body)
	console.log(req.body);
    resp.send({result:"Postman Data Inserted Success"});
})

// update by postman body 

app.put("/putdata", async (req, resp) => {
    const data = await dbConnect();
    let result = data.updateOne(
        { id: req.body.id },// UPDATE FROM column name
        { $set: req.body }
    )
    resp.send({ status: "updated" })
})


// update by postman body & parameter from url 

app.put("/putdatap", async (req, resp) => {
    const data = await dbConnect();
	console.log(req.params);
    let result = data.updateOne(
        { id: req.params.id },// UPDATE FROM column name
        { $set: req.body }
    )
    resp.send({ status: "updated" })
})

app.listen(5000);
