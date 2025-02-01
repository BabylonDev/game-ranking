var express = require('express');
var app = express();

app.get('/home', (req, res)=>{
   res.send("WELCOME TO HOME");
});
app.get('/about', (req, res)=>{
   res.send("WELCOME TO ABOUT US, This is a test only");
});

app.listen(3000);