import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/dbConnect";    


const PORT = process.env.PORT || 3101; 
const app = express();
 


app.use(cors());
app.use(express.json());
app.use(router);


 
app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
    }
);
  
const  dbConnection= async()=> {
    try {
        await db.sync();
        await db.authenticate();
        

        console.log('Database Wokring... :=)');
    } catch (error) {
        console.log(error);
    }
}   

dbConnection();