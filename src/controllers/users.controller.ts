import { Request,Response } from "express"
import jwt from "jsonwebtoken"
import usersModel from "../models/users"
import {encrypt, verified} from "../utils/bcrypt.handle"

 const newUser = async (req: Request, res: Response) => {

try{ 

const { user , password, email } = req.body;

// Validamos si el usuario ya existe en la base de datos
const searchUser = await usersModel.findOne({ where: { user: user  } });

if(searchUser) {
   return res.status(400).json({
        msg: `Ya existe un usuario con el nombre ${user}`
    })
} 

const hashedPassword = await encrypt(password);

try {
    // Guardarmos usuario en la base de datos
    await usersModel.create({
        user: user,
        password: hashedPassword,
        email: email
    })

    res.json({
        msg: `Usuario ${user} creado exitosamente!`
    })
} catch (error) {
    res.status(400).json({
        msg: 'Upps ocurrio un error',
        error
    })
}}
catch(error){res.status(400).json({
    msg: 'Upps ocurrio un error',
    error
})
   
}
}

 const loginUser = async (req: Request, res: Response) => {

    try{ const { email, password} = req.body;

    // Validamos si el usuario existe en la base de datos
    const searchUser: any = await usersModel.findOne({ where: { email: email } });
 
    if(!searchUser) {
         return res.status(400).json({
             msg: `No existe un usuario con el nombre ${email} en la base datos`
         })
    }
 
    // Validamos password
    const passwordValid = await verified(password, searchUser.password);
    if(!passwordValid) {
     return res.status(400).json({
         msg: `Password Incorrecta`
     })
    }
 
    //  Generamos token
    const token = jwt.sign({
     email: email
    }, process.env.SECRET_KEY || 'pepito123');
    
    res.json(token);

    }
    catch(error){
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

    const getUserById =async(req:Request, res:Response)=>{
        const {id} = req.params;    
        const product =  await usersModel.findByPk(id);
    
       if(product){
        res.json(product)
        }else{
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            })
        }
    }
   

export  { newUser, loginUser, getUserById}

