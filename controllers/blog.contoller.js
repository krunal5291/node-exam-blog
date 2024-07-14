const { blog } = require("../models/blog.schema")

const getadd=(req,res)=>{
    res.render("add")
}

const add = async(req,res)=>{
   try {
    const {title,image,artical,category} = req.body
    req.author = req.bla
    let obj = {
        title,
        image,
        artical,
        category,
        author:req.bla
    }
    console.log(obj);
    const data = await blog.create(obj)
    console.log(data);
    res.send("blog added")
   } catch (error){
        res.send({error:error.message})
   }
}

const allblog = async(req,res)=>{
    try {
        const data = await blog.find()
        res.send(data)

    } catch (error) {
        res.send(error)
    }
}

const myblog = async(req,res)=>{
    const author = req.bla
    const data = await blog.find({author:author})
    res.send(data)
}

const getmyblog = (req,res)=>{
    res.render("userspecific")
}

const getallblog = async(req,res)=>{

    res.render("articallist")
}


const dlt = async(req,res)=>{
    const {id}= req.params

    const data = await blog.findByIdAndDelete(id)

    res.send("deletes")
}


const update = async(req,res)=>{
    const {title,image,artical,category} = req.body
    const {id}= req.params

    let obj = {
        title,
        image,
        artical,
        category
    }

    const data = await blog.findByIdAndUpdate(id,obj)

    res.send(data)
}


module.exports = {add,getadd,allblog,myblog,getallblog,getmyblog,dlt,update}
