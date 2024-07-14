require("dotenv").config()
const express = require("express")
const { connection } = require("./config/db")
const { userroute } = require("./routes/user.route")
const app = express()
const cookie = require("cookie-parser")
const { blogroute } = require("./routes/blog.route")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())

app.set("view engine","ejs")
app.set("views", __dirname +"/views")
app.use(express.static(__dirname + "/public"))

app.use("/user",userroute)
app.use("/blog",blogroute)

app.listen(8090,()=>{
    console.log('http://localhost:8090/');
    connection()
})
