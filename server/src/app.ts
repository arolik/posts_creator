import express, { Request, Response } from 'express';
import cors from 'cors';
import authRouter from './routes/authRoute';

const app = express();

app.use(cors());
app.use(express.json());

//http://localhost:5000/
app.use('/api/auth', authRouter);

export default app;