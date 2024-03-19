import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const checkAuth = (request: any, response: Response, next: NextFunction) => {
    const token = request.headers.authorization;

    if(token){
        try {
            const decoded: any = jwt.verify(token, 'secretKey');
            request.userId = decoded.id;
            next();
        } catch (error) {
            return response.json({message: 'do not have access'})
        }
    } else {
        return response.status(403).json({
            messgae: 'something wrong when connecting check auth'
        })
    }
}



