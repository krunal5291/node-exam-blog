const {Router} = require("express")
const { signup, login, getsignup, getlogin, logout } = require("../controllers/user.controller")
const { userauth } = require("../middleware/user.middleware")

const userroute = Router()

// get

userroute.get("/signup",getsignup)

userroute.get("/login",getlogin)

userroute.get("/logout",logout)

// post

userroute.post("/signup",signup)

userroute.post("/login",login)

module.exports = {userroute}