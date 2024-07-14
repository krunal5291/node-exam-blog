const { default: mongoose } = require("mongoose");


const blogchema = new mongoose.Schema({
    title:String,
    image:String,
    artical:String,
    category:String,
    comments: [{
        text: String,
        username: String,
    }],
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const blog =mongoose.model("blog",blogchema)

module.exports = {blog}