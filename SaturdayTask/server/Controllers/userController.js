// userController.js
import { User } from '../Model/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const JWT_SECRET = 'fgfghh'

  try {
    // Create the user
    const newUser = await User.create({ name, email, phone, password: hashedPassword });

    // Generate JWT token
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '1h' });

    // Return both the new user and the token
    res.json({ 
      message: 'User registered successfully',
      token, // Send token to client
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const JWT_KEY = 'hmbjbv'

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, JWT_KEY, { expiresIn: '1h' });
    res.json({ token });
    console.log(token);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ where: { deleted_at: null } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
