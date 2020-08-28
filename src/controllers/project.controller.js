import Project from '../models/project'


export async function createProyect (req,res){
    const {name, priority,descriptcion, deliverydate}  = req.body;
    try{
        let newProject = await Project.create({
            name,
            priority,
            descriptcion,
            deliverydate
        },{
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if (newProject){
            return res.json({
                messaje: 'Recibido Correctamente',
                data: newProject
            })
        }
    }   
    catch(e){
        console.log(e);
        res.status(500).json({
            message: "Falla del sistema",
            data: {}
        })
    }
}