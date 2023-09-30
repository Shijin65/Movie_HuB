const mongoose = require("mongoose");

const connectDB = async ()=> {

    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("the database connection established successfully",connect.connection.host)
    } catch (error) {
        console.log("the database connection failed")
        process.exit(1);
    }

}
module.exports = connectDB;