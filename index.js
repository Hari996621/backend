require('dotenv').config();
const express = require("express");
const app = express();
//const port = 4000;

app.get("/",(req,res)=>{
    res.send("you did it bro")
});

app.get('/twitter',(req,res)=>{
    res.send('logged in twitter');
});

app.get('/login',(req,res)=>{
    res.send('<h1>Logged in as hari</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${port} number succesfully`);
});