const express = require("express");
const conn = require('./conn');
const app = express();

app.use(express.json());

// Get Data from mysqli  http://localhost:5000/

app.get("/", (req, resp) => {
    conn.query("select * from customer", (err, result) => {
        if (err) { resp.send("error in api") }
        else { resp.send(result) }
    })
});


// Insert Data in mysqli

app.post("/insert", (req, resp) => {
    const data = req.body;
    conn.query("INSERT INTO customer SET?", data, (error, results, fields) => {
      if (error) throw error;
      resp.send(results)
    })
  });
  
// Update Data in mysqli

app.put("update/:id",(req,resp)=>{
    const data= [req.body.name,req.body.email,req.body.pass,req.params.id];
    conn.query("UPDATE customer SET name = ?,email = ?, pass = ? WHERE id = ?",
    data,(error,results,fields)=>{
      if(error) throw error;
      resp.send(results)
    })
   
  })

// Delete Data in mysqli

app.delete("delete/:id",(req,resp)=>{
    const data= [req.params.id];
    conn.query("delete from customer WHERE id = ?",data,(error,results,fields)=>{
      if(error) throw error;
      resp.send(results)
    })
})
    

app.listen("5000")
