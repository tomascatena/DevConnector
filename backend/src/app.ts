import express from 'express';
import { notFound, errorHandler } from '@middleware/error.middleware';
import helmet from 'helmet';
import routes from '@routes/v1';
import { morganHttpLogger } from '@config/morgan';
import { env } from '@config/config';
import { expressWinstonLogger } from './config/logger';

const app = express();

// secure Express app by setting various HTTP headers
app.use(helmet());

if (env.NODE_ENV === 'development') {
  // HTTP request logger middleware
  app.use(morganHttpLogger);
}

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// express-winston logger makes sense BEFORE the router
app.use(expressWinstonLogger.info);

// v1 api routes
app.use('/api/v1', routes);

// express-winston errorLogger makes sense AFTER the router
app.use(expressWinstonLogger.error);

// Fallback for not found requests
app.use(notFound);

// Error handler for failed requests
app.use(errorHandler);

export default app;
