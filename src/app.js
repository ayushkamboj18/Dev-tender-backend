const express = require("express");
const { default: mongoose } = require("mongoose");
var app = express();
const DB = require("./config/database");
const User = require("./Model/user");

app.get((req,res)=>{
    res.send("All data send");
})


app.post('/signup',async (req,res)=>{
    const data = {
        firstName : "ayush",
        lastName : "Kamboj",
        emailId : "ayush@gmail.com",
        password : "32ds4",
        age : "21",
        gender : "M"
    }
    try{
        const user = new User(data);
        await user.save();
        res.send("Success");
    }catch(err){
        res.status(404).send(err.message);
    }
})




DB().then(()=>{
    console.log("database connected :");
    app.listen(3000,()=>{
        console.log("listening on 3K");
    })
}).catch((err)=>{
    console.log(err.message);
})

