var mongoose = require("mongoose");

const connection = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/Tinder");
}


module.exports = connection;