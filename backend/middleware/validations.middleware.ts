import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import httpStatus from 'http-status-codes';

export const validationsResults =
  (
    statusCode = httpStatus.BAD_REQUEST,
    responseMessage = 'Invalid information'
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(statusCode).json({
        message: responseMessage,
        errors: errors.mapped(),
      });
    }

    next();
  };
