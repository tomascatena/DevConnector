import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';
import {
  emailForLoginValidator,
  passwordForLoginValidator,
} from '../../../validators/auth.validators';

export const loginUserValidation = [
  emailForLoginValidator,
  passwordForLoginValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to login a new user',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
