import {Router} from 'express'

const router = Router();
import {createProyect} from  '../controllers/project.controller'

router.post('/', createProyect) //Manejador de peticion



export default router;