const Express =require("express");
const connectDB = require("./src/DB_connect");
const dotenv = require("dotenv").config();

const App = Express()
const PORT = process.env.PORT;

App.use(Express.json());

connectDB()
App.use("/api/user",require("./src/User_route") )
App.listen(PORT ,()=>{console.log(`the server is running in the port :${PORT}`)} )