const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const Details = mongoose.model('Details',UserSchema)
module.exports=Details