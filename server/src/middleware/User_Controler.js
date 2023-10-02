const asyncHanler = require("express-async-handler");
const User = require("../model/User_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER USER
const Registeruser = asyncHanler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(404).json({ error: "all the fields a mantatory... " });
        throw new Error("all the fields a mantatory");
    }

    const useravailable = await User.findOne({ email });
    if (useravailable) {
        res.status(400).json({ error: "The email already used... " });
        throw new Error("user already exist");
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({
            username,
            email,
            password: hashedpassword,
        });
        if (user) {
            res.status(201).json({ _id: user.id, email: user.email });
        }
    } catch (error) {
        console.log("the data creation failed");
    }
});

//LOGIN USER.........................................///////

const LoginUser = asyncHanler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(404).json({ error: "fill the email and password" });
        throw new Error("all the fields a mantatory");
    }
    const user = await User.findOne({ email });
    if (!user) {
        console.log("user not found");
        res.status(404).json({ error: "user not found" });
    }
    if (user && (await bcrypt.compare(password, user.password))) {
        const accesstoken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.SECERT_ACCESSTOKEN,
            { expiresIn: "30m" }
        );
        res.status(200).json({ accesstoken, user });
    } else {
        console.log(user);
    }
});

module.exports = { Registeruser, LoginUser };
