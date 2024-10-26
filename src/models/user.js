const mongoose = require('mongoose');



const userSchema= mongoose.Schema({
    name:String,
    age:{
        type:Number,
        required:true
    },
    email:String
})

module.exports=mongoose.model("user",userSchema)

//here user is collection(table)