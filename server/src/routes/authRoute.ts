import express from 'express';
import { Router } from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authController';
import { checkAuth } from '../utils/checkAuth';

const authRouter = express.Router();

//http://localhost:5000/api/auth/register
authRouter.post('/register', registerUser);

//http://localhost:5000/api/auth/login
authRouter.post('/login', loginUser);

//http://localhost:5000/api/auth/me
authRouter.get('/me', checkAuth, getMe)


export default authRouter;