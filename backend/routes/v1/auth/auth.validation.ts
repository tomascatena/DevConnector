import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';
import { authorizationHeaderValidator } from '../../../validators/auth.validators';

export const loginValidation = [
  authorizationHeaderValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to login a user',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
