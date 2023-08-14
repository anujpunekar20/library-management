const User = require('../models/users');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path: '../config.env'})
// require.config('dotenv');

exports.userRegister = async (req, res) => {
    try{
        const { email, password } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({
            status: "success",
            message: "Registered user"
        })
    }
    catch(err){
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
};

exports.userLogin = async(req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            res.status(401).json({
                status: "failed",
                message: err.message
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            res.status(401).json({
                status: "fail",
                message: err.message
            })
        }

        const token = jwt.sign({ userId: user._id}, process.env.SECRET_KEY, { expiresIn: '1hr'});
        // console.log(token)

        res.status(200).json({ token })
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}