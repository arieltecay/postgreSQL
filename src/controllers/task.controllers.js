import Task from '../models/task'

function error(e){
    console.log(e);
    res.status(500).json({
        message: "Falla del sistema",
        data: {}
    })
    
}

export async function createTask(req,res){
    const {name, done, projectid} = req.body;
    try{
        const newTask = await Task.create({
            name,
            done,
            projectid            
        },{
        fields: ['name','done', 'projectid']        
        })
        if (newTask){
            return res.json({
                messaje: 'Recibido Correctamente',
                data: newTask
            })
        }
    }
    catch (e){
        error(e);
    }

}

export async function getTasks(req,res){
    // console.log(req.body);
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            order: [
                ['id', 'ASC']
            ]
        });
        res.json({            
            data: tasks
        })
    }
    catch (e) {
        console.log("Error en getProjects" + e);
    }
    
}

export async function getOneTask(req,res){
try {
    const {id} = req.params;
    const task = await Task.findOne({
        where: {
            id
        }
    });
    res.json({
        data: task
    });

}
catch(e){

}
    
}

export async function deleteTask(req,res){
    try{
        const {id} = req.params;
    const deleteRowCount = await Task.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Proyecto Eliminado!',
        count: deleteRowCount
    })
    }
    catch(e){
        error(e);
    }
    
}

export async function updateTask(req,res){
    try{
        const {id} = req.params;
        const {name, projectid, done} = req.body;

    const tasks = await Task.findAll({
        attributes: ['id', 'name', 'projectid', 'done'],
        where:{
            id
        }
    });

    if(tasks.length > 0){
        tasks.forEach(async task => {
            await task.update({
                name,
                projectid,
                done                
            })            
        });
    }
    return res.json({
        message: 'Actualizado Correctamente',
        data: tasks
     })
    }
    catch (e){
        console.log(e);
    }    
}