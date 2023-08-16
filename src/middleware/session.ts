import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestWithUser extends Request {
  
        user?: string | JwtPayload,
    
}

const checkJwt = (req:RequestWithUser, res: Response, next:NextFunction) => {
    try{ const jwtByUser =req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();
    const itsUser = verifyToken(`${jwt}`);
    if(!itsUser) {
        res.status(401).send({message:'No autorizado'})

    }
    else{
        req.user = itsUser;
        next();
        
        console.log(itsUser);
        console.log(jwtByUser);
    }
  
    

    }catch(e){
        res.status(401).send({message:'No autorizado'})
        
    }
}


export { checkJwt}