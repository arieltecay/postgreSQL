import {Router} from 'express'

const router = Router();
import {
    createProyect,
    getProjects,
    getOneProject,
    deleteProyect,
    updateProyect}
from  '../controllers/project.controller'

// api/projects
router.post('/', createProyect) //Manejador de peticion
router.get ('/', getProjects)

// api/projects/:projectID
router.get('/:id',getOneProject);
router.get('/:id',deleteProyect);
router.put('/:id',updateProyect);


export default router;