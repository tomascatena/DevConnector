import {
  confirmPasswordValidator,
  emailForRegisterValidator,
  nameValidator,
  passwordForRegisterValidator,
} from '../../../validators/users.validators';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';
import {
  userIdParamValidator,
  userIdValidator,
} from '../../../validators/profile.validators';
import { authorizationHeaderValidator } from '../../../validators/auth.validators';

export const registerUserValidation = [
  nameValidator,
  emailForRegisterValidator,
  passwordForRegisterValidator,
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

export const deleteUserValidation = [
  authorizationHeaderValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to delete a user',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
