import { Router} from "express";
import { getItems, getItem, postItem, putItem, deleteItem, getItemsByuserId } from "../controllers/producto.controller";
import FireAuth from "../middleware/firelog";


const router = Router();

router.get('/', FireAuth, getItems );
router.get('/:id', FireAuth, getItem);
router.get('/user/:id',FireAuth,  getItemsByuserId);
router.post('/',  FireAuth, postItem);
router.put('/:id', FireAuth, putItem);
router.delete('/:id',FireAuth,  deleteItem);

export {router};