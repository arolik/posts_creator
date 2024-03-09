import app from "./app";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
export const JWT_SECRET = process.env.JWT_SECRET;


async function start () {
    try {
        mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.lp0bxvt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`);
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch (error) {
        console.log('can not connect to data base: ' + error)
    }
}

start();