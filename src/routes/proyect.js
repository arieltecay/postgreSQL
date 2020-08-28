import {Router} from 'express'

const router = Router();
import {createProyect} from  '../controllers/project.controller'

router.post('/', createProyect)



export default router;