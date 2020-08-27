import Sequalize from 'sequelize';
import {Sequalize, sequalize} from '../database/databse';
sequalize.define('project',{
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
})