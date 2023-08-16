import {sign, verify} from "jsonwebtoken"

const JWT_SECRET  = process.env.JWT_SECRET || "secretout"

const generateToken =  (id:string) => {
    const jwt =  sign({id}, JWT_SECRET, {expiresIn: "1h"});
    return jwt;
}

const verifyToken =  (jwt: string) => {
    const itsOk =  verify(jwt, JWT_SECRET);
    return itsOk;
}


export {generateToken, verifyToken}