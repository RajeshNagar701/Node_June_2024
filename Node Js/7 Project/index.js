	
const express = require('express');
const app = express();

const path = require('path');
 
app.set('view engine', 'ejs');
 
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
 
// Route for rendering the index.ejs template

app.get('/', (req, res) => {
	 const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA',
	    Skills:['php','java','python']
    }
    res.render('index',{user});
});

app.get('/about',(_,resp)=>{
   resp.render(`about`);
});

app.get('/service',(_,resp)=>{
   resp.render(`service`);
});

app.get('/contact',(_,resp)=>{
   resp.render(`contact`);
});

app.get('/*',(_,resp)=>{
   resp.render(`pnf`);
});

app.listen(3000);
