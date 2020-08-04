import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';

const app = express()

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(userRoutes);


app.listen(4002);
console.log('Server Iniciado ', 4002)