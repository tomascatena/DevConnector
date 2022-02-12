import { Request, Response, NextFunction } from 'express';
import httpStatus, { ReasonPhrases } from 'http-status-codes';
import { env } from '@config/config';
import { ApiError } from 'utils/ApiError';
import mongoose from 'mongoose';
import { Logger, LoggerToFile } from '../config/logger';

export const errorConverter = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || ReasonPhrases.INTERNAL_SERVER_ERROR;

    error = new ApiError({
      statusCode,
      message,
      isOperational: false,
      stack: err.stack,
    });
  }

  next(error);
};

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  // eslint-disable-next-line
  next: NextFunction
) => {
  let { statusCode, message } = err;

  if (env.NODE_ENV === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = ReasonPhrases.INTERNAL_SERVER_ERROR;
  }

  res.locals.errorMessage = err.message;

  if (env.NODE_ENV === 'development') {
    Logger.error(err);
  }

  LoggerToFile.error({
    message: err.message,
    name: err.name,
    isOperational: err.isOperational,
    stack: err.stack,
    statusCode: err.statusCode,
  });

  res.status(statusCode).send(message);
};
