import Project from '../models/project'


export async function createProyect (req,res){
    // console.log(req.body);
    // res.send("Received")
    const {name, priority,description, deliverydate}  = req.body;
    try{
        let newProject = await Project.create({
            name,
            priority,
            description,
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