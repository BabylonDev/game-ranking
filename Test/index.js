var express = require('express');

var app = express();
app.get('/', (req, res)=>{
   res.send("WELCOME TO HOME");
});
app.get('/home', (req, res)=>{
   res.send("WELCOME TO HOME");
});
app.get('/about', (req, res)=>{
   app.use('/', "/Test/About.html")
});

app.listen(3000);