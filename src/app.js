const express = require("express");
var app = express();


app.use('/', (req,res)=>{
    res.send("Hello from the server.");
})

app.listen(3000,()=>{
    console.log("listening on 3K");
})