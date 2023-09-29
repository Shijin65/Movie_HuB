const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    username:{
        type : String,
        required:[true, 'name is required'],
        
    },
    email:{
        type : String,
        required:[true, 'email is required'],
        unique :[true,"the email already taken"]
    },
    password:{
        type : String,
        required:[true, 'please enter the password']
        
    }  
},{
    timestamps:true,
})
module.export = mongoose.model("User",userschema);