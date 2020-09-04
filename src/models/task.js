import Sequalize from 'sequelize';
import {sequalize} from '../database/databse';


const Task = sequalize.define ('task',{
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequalize.TEXT
    },
    projectid:{
        type: Sequalize.INTEGER
    },    
    done:{
        type: Sequalize.BOOLEAN
    }
},{
    timestamps: false
});

export default Task;