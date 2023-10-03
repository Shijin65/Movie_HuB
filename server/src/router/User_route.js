const express = require('express');
const { Registeruser, LoginUser, CurrentUser } = require('../middleware/User_Controler');
const validUser = require('../middleware/ValidateUser');
const router = express.Router();

router.post("/register", Registeruser)
router.post("/login", LoginUser)
router.get("/current",validUser,CurrentUser )


module.exports=router;