import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('uploads'));
app.use(cors(
    {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
));


app.use('/api',routes);

export default app;