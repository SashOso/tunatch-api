import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/upload', express.static('uploads'));
app.use(cors(
    {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Range', 'Accept', 'X-Requested-With'],
        credentials: true,
        exposedHeaders: ['Content-Range', 'Accept-Ranges', 'Content-Length', 'Content-Type'],
    }
));

"http://localhost:8080/uploads/song/media/Michael Jackson - Billie Jean.mp4"

app.use('/api',routes);

export default app;