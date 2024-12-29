// MONGOD CONNECTION configuration 
const mongoose = require("mongoose");

// create the function to connect to the monogdb
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb is connected successfully");
    } catch(error){
        console.log("connection error")
    }
}

module.exports = connectDB;