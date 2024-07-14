const jwt = require("jsonwebtoken")

const userauth =(req,res,next)=>{
    const {token} = req.cookies

    let data = jwt.verify(token,"key")

    if(data.id){
        req.bla = data.id
        // console.log(req.bla);
        next()
    }
    else{
        res.send("login & signup first")
    }
}

const adminauth =(req,res,next)=>{
    const {token} = req.cookies

    let data = jwt.verify(token,"key")

    if(data.role=="admin"){
        req.bla = data.id

        next()
    }
    else{
        res.send("only admin can access this page")
    }
}

module.exports = {userauth,adminauth}