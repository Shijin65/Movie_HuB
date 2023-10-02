const express = require('express');
const { Registeruser, LoginUser } = require('../middleware/User_Controler');
const router = express.Router();

router.post("/register", Registeruser)
router.post("/login", LoginUser)


module.exports=router;