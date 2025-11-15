import type{ Request,Response,NextFunction } from "express"
import  jwt, { type JwtPayload }   from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();



declare global {
  namespace Express {
    interface Request {
      userId?: string | number;
    }
  }
}

export const auth=async(req:Request, res:Response, next:NextFunction)=>{
const authHeader=req.headers["authorization"]

const jwtSecretKey=process.env.jwt_secret_key;

console.log("process.env.jwt_secret_key",jwtSecretKey)


try{
    const token=authHeader?.split(" ")[1];
    if(token){
    const user=jwt.verify(token as string, jwtSecretKey as string);
    req.userId= (user as JwtPayload).userId;
    next();
    }
}
catch(err){
    res.status(500).json({
        message:err
    })
 }
}