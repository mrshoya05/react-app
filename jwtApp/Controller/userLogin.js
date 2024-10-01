
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async(req,res)=>{
try {
    const {email, password} = req.body;
if(!email || !password){
    return resizeBy.status(400).json({
        error: "Email and password  required !"
    })
}
const user = await User.findOne({where: {email}});
if(!user){
    return res.status(401).json({ error: "Invalid email or password." });
}

const isMatch = await bcrypt.compare(password, user.password);
if(!isMatch){
    return res.status(401).json({
        error: "password is not matched !"
    })
}

    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SEC_KEY)
     res.status(200).json({
        message: "userLogin successfully !",
        token
     })
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
}
}

module.exports = login;