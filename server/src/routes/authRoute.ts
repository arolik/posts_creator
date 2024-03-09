import express from 'express';
import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const authRouter = express.Router();

//http://localhost:5000/api/auth/register
authRouter.post('/register', registerUser);

//http://localhost:5000/api/auth/login
authRouter.post('/login', loginUser);


export default authRouter;