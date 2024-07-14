const { default: mongoose } = require("mongoose");
require("dotenv").config()
const connection = ()=>{
    mongoose.connect(process.env.DB_URL)
    console.log("db connected");
}

module.exports = {connection}

