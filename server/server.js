const Express =require("express");
const connectDB = require("./src/config/DB_connect");
const dotenv = require("dotenv").config();


const App = Express()
const PORT = process.env.PORT;

App.use(Express.json());
App.use(require("cors")()); 

//DataBase Connection......................//////
connectDB()

//API Routes...............................//////
App.use("/api/user",require("./src/router/User_route") )


App.listen(PORT ,()=>{console.log(`the server is running in the port :${PORT}`)} )