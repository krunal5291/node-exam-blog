const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const { user } = require("../models/user.schema")

const getsignup = (req,res)=>{
    res.render("signup")
}

const getlogin = (req,res)=>{
    res.render("login")
}

// post

const signup = async(req,res)=>{
    const {password,username,role} = req.body

    bcrypt.hash(password,5,async(err,hash)=>{
        if(err){
            res.send(err)
        }
        else{
            let obj = {
                username,
                password:hash,
                role
            }
            const data = await user.create(obj)
            let token = jwt.sign({id:data.id,role:data.role},"key")

            res.cookie("token",token).send(data)
        }
    })
}

const login = async(req,res)=>{
    try {
        const {username,password} = req.body

    const data = await user.findOne({username})
        console.log(data);
    if(data){
        bcrypt.compare(password,data.password,(err,done)=>{
            if(err){
                res.send(err.message)
            }
            else if(done){
                let token = jwt.sign({id:data.id,role:data.role},"key")
                res.cookie("token",token).send("logged in")
            }
            else{
                res.send("password incorrect")
            }

        })
    }
    else{
        return res.status(401).json({message:"User not found"})
    }
    } catch (error) {
        res.send({error:error.message})   
    }
}

const logout = (req,res)=>{
    res.clearCookie("token").redirect("login")
}
module.exports = {signup,getlogin,getsignup,login,logout}