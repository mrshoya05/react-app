const User  = require('../models/userModel');
const bcrypt = require('bcrypt'); 

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Input validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters long." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use." });
    }


    const hashedPassword = await bcrypt.hash(password, 10); 


    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword, 
    });

    res.status(201).json({
      message: "User registered successfully",
     
    });
  } catch (error) {
    console.error(error);

    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ errors: error.errors.map(err => err.message) });
    }

    res.status(500).json({
      error: "Server error!",
    });
  }
};

module.exports = register;
