import {
  confirmPasswordValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../../validators/users.validators';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';

export const registerUserValidation = [
  nameValidator,
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to register a new user',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
