import Sequalize from 'sequelize';
import {sequalize} from '../database/databse';

import Task from './task'

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
    timestamps: false
});

Project.hasMany(Task, {foreignKey: 'projectid', sourceKey: 'id'});
Task.belongsTo(Project,{foreignKey: 'projectid', sourceKey: 'id'})

export default Project;