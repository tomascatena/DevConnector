import express from 'express';
import { errorHandler, errorConverter } from '@middleware/error.middleware';
import helmet from 'helmet';
import routes from '@routes/v1';
import { morganHttpLogger } from '@config/morgan';
import { env } from '@config/config';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import { notFound } from '@middleware/notFound.middleware';
import { expressWinstonLogger } from './config/logger';

export const app = express();

// secure Express app by setting various HTTP headers
app.use(helmet());

if (env.NODE_ENV === 'development') {
  // HTTP request logger middleware
  app.use(morganHttpLogger);
}

// parse json request body
app.use(express.json({ limit: '1kb' }));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true, limit: '1kb' }));

// sanitize request data
app.use(mongoSanitize());

// enable cors
app.use(cors());
// enable pre-flight
app.options('*', cors);

// express-winston logger makes sense BEFORE the router
app.use(expressWinstonLogger.info);

// v1 api Documentation
app.use('/api/v1/docs', express.static('public'));

// v1 api routes
app.use('/api/v1', routes);

// express-winston errorLogger makes sense AFTER the router
app.use(expressWinstonLogger.error);

// Fallback for not found requests
app.use(notFound);

// convert error to ApiError, if needed
app.use(errorConverter);

// Error handler for failed requests
app.use(errorHandler);
