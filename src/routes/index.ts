import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => 
{const file = fileName.split('.').shift();
return file
}


readdirSync(PATH_ROUTER).filter((fileName)=>{
 const cleanName = cleanFileName(fileName)
if(cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRoute) => {
        console.log(`ruta cargada...  /api/${cleanName}`);
        router.use(`/api/${cleanName}`, moduleRoute.router);
    });
};
}
);   
export{router};