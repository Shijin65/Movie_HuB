const asyncHanler = require("express-async-handler");
const User = require("../model/User_model");
const bcrypt = require("bcrypt")

const Registeruser = asyncHanler( async(req,res)=>{
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(404).json({error : "all the fields a mantatory... "})
        throw new Error("all the fields a mantatory");
    }
    
    const useravailable = await User.findOne({ email });
    if (useravailable) {
        res.status(400).json({error : "The email already used... "})
        throw new Error("user already exist");
    }
   
    const hashedpassword = await bcrypt.hash(password, 10);
    try {
        const user =await User.create({
            username,
            email,
            password : hashedpassword,
        })
        if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
      }
    } catch (error) {
        console.log("the data creation failed");
    }

    

} )

const LoginUser = asyncHanler( async(req,res)=>{


})

module.exports ={ Registeruser,LoginUser }