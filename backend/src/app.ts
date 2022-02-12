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
import rateLimit from 'express-rate-limit';
import { expressWinstonLogger } from './config/logger';

export const app = express();

// Secure Express app by setting various HTTP headers
app.use(helmet());

// Prevent cross site scripting attacks
app.use(xssClean());

// Sanitize request data
app.use(mongoSanitize());

// Basic rate-limiting middleware for Express
app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);

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
