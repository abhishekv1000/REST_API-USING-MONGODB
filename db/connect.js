const mongoose = require("mongoose");
// const { options } = require("../routes/products");

// const url = "mongodb://localhost:27017/rest" 

const connectDB = (a) =>{
    console.log("Connected Database");
    return mongoose.connect(a)
}

 
module.exports = connectDB ;