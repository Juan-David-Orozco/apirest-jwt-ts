import express, { Application } from 'express';
import morgan from 'morgan'
import authRoutes from './routes/auth'
import { PORT } from './config'

const app: Application = express();

// settings
app.set('port', PORT);

// middlewares
app.use(morgan('dev'));
app.use(express.json())

// routes
app.use('/api/auth', authRoutes);

export default app;