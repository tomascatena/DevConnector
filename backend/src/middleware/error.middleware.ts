import { Request, Response, NextFunction } from 'express';
import httpStatus, { ReasonPhrases } from 'http-status-codes';
import { env } from '@config/config';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found - ${req.originalUrl}`);

  res.status(httpStatus.NOT_FOUND);

  next(error);
};

export const errorHandler = (err: Error, req: Request, res: Response) => {
  if (res.statusCode === httpStatus.INTERNAL_SERVER_ERROR) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message:
        env.NODE_ENV === 'production'
          ? ReasonPhrases.INTERNAL_SERVER_ERROR
          : err.message,
      stack: env.NODE_ENV === 'production' ? null : err.stack,
    });
  }

  const errorStatusCode =
    res.statusCode === httpStatus.OK
      ? httpStatus.INTERNAL_SERVER_ERROR
      : res.statusCode;

  return res.status(errorStatusCode).json({
    message: err.message,
    stack: env.NODE_ENV === 'production' ? null : err.stack,
  });
};
