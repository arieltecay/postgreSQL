import Sequalize from 'sequelize';

export const sequalize = new Sequalize(
    'postgres',
    'postgres',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)