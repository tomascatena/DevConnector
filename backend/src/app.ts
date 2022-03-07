import express from 'express';
import { errorHandler, errorConverter } from '@middleware/error.middleware';
import helmet from 'helmet';
import routes from '@routes/v1';
import { morganHttpLogger } from '@config/morgan';
import { env } from '@config/config';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import { notFound } from '@middleware/notFound.middleware';
// @ts-ignore
import xssClean from 'xss-clean';
import hpp from 'hpp';
import { rateLimiter } from '@middleware/rateLimiter';
import { expressWinstonLogger } from './config/logger';
import { authLimiter } from './middleware/authLimiter';

export const app = express();

// Secure Express app by setting various HTTP headers
app.use(helmet());

// Prevent cross site scripting attacks
app.use(xssClean());

// Sanitize request data
app.use(mongoSanitize());

// Basic rate-limiting middleware
if (env.NODE_ENV === 'production') {
  app.use(rateLimiter);
}

if (env.NODE_ENV === 'development') {
  // HTTP request logger middleware
  app.use(morganHttpLogger);
}

// Parse json request body
app.use(express.json({ limit: '1kb' }));

// Parse urlencoded request body
app.use(express.urlencoded({ extended: true, limit: '1kb' }));

// Protect against HTTP Parameter Pollution attacks
app.use(hpp());

// Enable cors
app.use(cors());
// Enable pre-flight
app.options('*', cors);

// Express-winston logger makes sense BEFORE the router
app.use(expressWinstonLogger.info);

// v1 api Documentation
app.use('/api/v1/docs', express.static('public'));

// Limit repeated failed requests to auth endpoints
if (env.NODE_ENV === 'production') {
  app.use('/v1/auth', authLimiter);
}

// v1 api routes
app.use('/api/v1', routes);

// Express-winston errorLogger makes sense AFTER the router
app.use(expressWinstonLogger.error);

// Fallback for not found requests
app.use(notFound);

// Convert error to ApiError, if needed
app.use(errorConverter);

// Error handler for failed requests
app.use(errorHandler);
