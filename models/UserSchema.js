const mongoose=require("mongoose")

const User=mongoose.Schema({
    name:String,
    age:Number
})


exports.UserSchema=mongoose.model("UserDatabase",User)