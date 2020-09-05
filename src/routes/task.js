import {Router} from 'express'
import {
    createTask,
    getTasks,
    getOneTask,
    deleteTask,
    updateTask,
    getTasksByProject
} from '../controllers/task.controllers'

const router = Router();

//api/task
router.post('/',createTask)
router.get('/',getTasks)
router.get('/:id',getOneTask)
router.delete('/:id',deleteTask)
router.put('/:id', updateTask)

//api/task/project/:projectId
router.get('/project/:projectid',getTasksByProject)


export default router;