import { Response } from "express";

const handleError = (res: Response, error: string,  errorRaw?: any) => {
    console.log(errorRaw);
    res.json("500");
    res.send({ error: error });
}   

export { handleError }