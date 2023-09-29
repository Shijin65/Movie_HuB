const asyncHanler = require("express-async-handler");
// const User = require("../src/User_model");

const Registeruser = asyncHanler( async(req,res)=>{
    // console.log(req.body)
    // res.status(200).json({title : "every thing is ok... "})
    
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(404).json({error : "all the fields a mantatory... "})
        throw new Error("all the fields a mantatory");
    }
    try {
        
    } catch (error) {
        
    }


} )
module.exports ={ Registeruser }