import User from "../models/User";
import bcryptjs from 'bcryptjs';
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';


export const registerUser = async (request: Request, response: Response) => {
    try {
        const { username, password } = request.body;
        console.log(username)
        const isUser = await User.findOne({ username });
        if (isUser) {
            return response.json({
                message: 'such user is alredy exist'
            })
        }
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(password, salt);
        const user = new User({
            username: username,
            password: hash
        })

        const token = jwt.sign(
            {
                id: user._id
            },
            'secretKey',
            {
                expiresIn: '30d'
            }
        )
        await user.save();
        response.json({
            user,
            token,
            message: 'your register was succesfull'
        })

    } catch (error) {
        response.json({
            message: 'error creating user'
        })
    }

}

export const loginUser = async (request: Request, response: Response) => {
    try {
        const {username, password} = request.body;
        const user = await User.findOne({username});
        if(!user){
            return response.json({message: 'such user is not exist'})
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user?.password);
        if(!isPasswordCorrect){
            return response.json({message: 'incorrect password'});
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            'secretKey',
            {
                expiresIn: '30d'
            }
        )

        return response.json({
            user,
            token,
            message: 'you have entered in system'
        })

    } catch (error) {
        response.json({message: 'login mistake, try again'})
    }
}

export const getMe = async (request: any, response: Response) => {
    try {
        const userId = request.userId;
        const user = await User.findById(userId)
        if(!user){
            return response.json({message: 'such user is not exist'})
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            'secretKey',
            {
                expiresIn: '30d'
            }
        )

        response.json({
            user,
            token,
            message: 'you entered to your account',
        })

    } catch (error) {
        return response.json({message: 'can not load a page'})
    }
}

