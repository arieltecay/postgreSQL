import express, {json} from 'express'
// import morgan from 'morgan';
var morgan = require('morgan');


//Importing Routes
import projectRoutes from './routes/proyect';
import taskRoutes from './routes/task';

//Initialization
const app = express();

//middleWares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/project', projectRoutes);
app.use('/api/task', taskRoutes);

export default app;

//npm run dev --> Comando principal para que el servidor escuche los cambios