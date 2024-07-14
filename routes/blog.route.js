const {Router} = require("express")
const { adminauth } = require("../middleware/user.middleware")
const { add, getadd, allblog, myblog, getallblog, getmyblog, dlt, update } = require("../controllers/blog.contoller")
const { blog } = require("../models/blog.schema")

const blogroute = Router()

// get 

blogroute.get("/addblog",adminauth,getadd)

blogroute.get("/allblog",getallblog)

blogroute.get("/all",allblog)

blogroute.get("/myblog",adminauth,getmyblog)

blogroute.get("/myblogs",adminauth,myblog)


// post

blogroute.post("/addblog",adminauth,add)

blogroute.delete("/delete/:id",adminauth,dlt)

blogroute.patch("/updateblog/:id",adminauth,update)

module.exports = {blogroute}