const express = require('express');

const userRoutes = express.Router();
const register = require('../Controller/userController');
const login = require('../Controller/userLogin');
const { verifyToken } = require('../Middleware/authuser');
const { getData } = require('../Controller/getData');

userRoutes.post('/register',register)

userRoutes.post('/login', login )

userRoutes.get('/data',  verifyToken, getData )

module.exports = userRoutes;