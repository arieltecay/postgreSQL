//Pendiente continuar viendo desde 1:12:06
import Project from '../models/project'

export async function createProyect(req, res) {
    // console.log(req.body);
    // res.send("Received")
    const { name, priority, description, deliverydate } = req.body;
    try {
        const newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']//Especifica los datos que le pasa para que no de error
        });
        if (newProject) {
            return res.json({
                messaje: 'Recibido Correctamente',
                data: newProject
            })
        }
    }
    catch (e) {
        // console.log(e);
        res.status(500).json({
            message: "Falla del sistema",
            data: {}
        })
    }
}
export async function getProjects(req, res) {
    console.log(req.body);
    try {
        const projects = await Project.findAll();
        res.json({            
            data: projects
        })
    }
    catch (e) {
        console.log("Error en getProjects" + e);
    }
}

export async function getOneProject(req, res) {
    //  console.log(req.params.id);
    const { id } = req.params;
    const project = await Project.findOne({
        where: {
            id
        }
    });
 
    res.json({
        data: project
    });
}

export async function deleteProyect(req,res){
    const {id} = req.params;
    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Proyecto Eliminado!',
        count: deleteRowCount
    })
}
export async function updateProyect(req,res){
    try{
        const {id} = req.params;
    const {name, description, priority,deliverydate} = req.body;

    const projects = await Project.findAll({
        attributes: ['id', 'description', 'priority', 'deliverydate'],
        where:{
            id
        }
    });

    if(projects.length > 0){
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            })            
        });
    }
    return res.json({
        message: 'Actualizado Correctamente',
        data: projects
     })
    }
    catch (e){
        console.log(e);
    }



}