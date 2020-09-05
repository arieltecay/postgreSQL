import {Router} from 'express'
import {
    createTask,
    getTasks,
    getOneTask,
    deleteTask,
    updateTask
} from '../controllers/task.controllers'

const router = Router();

//api/task
router.post('/',createTask)
router.get('/',getTasks)
router.get('/:id',getOneTask)
router.delete('/:id',deleteTask)
router.put('/:id', updateTask)



export default router;