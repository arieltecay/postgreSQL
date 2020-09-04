import Sequalize from 'sequelize'; //Conexión para modelar los datos
import {sequalize} from '../database/databse'; //Cadena de conexión

import Task from './task'

//La variable "Project" contiene todo el esquema del proyecto.-
const Project = sequalize.define('project',{ 
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequalize.TEXT
    },
    priority: {
        type: Sequalize.INTEGER
    },
    description:{
        type: Sequalize.TEXT
    },
    deliverydate:{
        type: Sequalize.DATE
    }
},{
    timestamps: false //Para no tener problemas con las fechas
});

Project.hasMany(Task, {foreignKey: 'projectid', sourceKey: 'id'}); //El proyecto tiene muchas tareas
Task.belongsTo(Project,{foreignKey: 'projectid', sourceKey: 'id'}) //Muchas tareas pertenecen a un proyecto
/*En estas dos lineas se realizo la relacion en tre las dos tables*/
export default Project;