const express = require('express');
const { Registeruser } = require('./User_Controler');
const router = express.Router();

router.post("/register", Registeruser)

module.exports=router;