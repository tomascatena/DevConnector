import express from 'express';
import { notFound, errorHandler } from '@middleware/error.middleware';
import helmet from 'helmet';
import routes from './routes/v1';

const app = express();

// secure Express app by setting various HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use('/api/v1', routes);

// Fallback for not found requests
app.use(notFound);

// Error handler for failed requests
app.use(errorHandler);

export default app;
