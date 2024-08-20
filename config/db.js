const { default: mongoose } = require("mongoose");
require("dotenv").config()
const connection = ()=>{
    mongoose.connect("mongodb://localhost:27017")
    console.log("db connected");
}

module.exports = {connection}

