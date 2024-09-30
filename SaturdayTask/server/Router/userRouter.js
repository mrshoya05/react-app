import express from 'express';
import { register, login, getUsers } from '../Controllers/userController.js'; 
import {authenticateToken} from '../Middleware/userAuth.js';

const userRoute = express.Router();

userRoute.post('/register', authenticateToken, register);
userRoute.post('/login', authenticateToken,  login);
userRoute.get('getusers', getUsers)

export default userRoute;
