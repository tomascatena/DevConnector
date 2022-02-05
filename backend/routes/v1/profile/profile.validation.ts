import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';
import { userIdValidator } from '../../../validators/profile.validators';
import { authorizationHeaderValidator } from '../../../validators/auth.validators';

export const getUserProfileValidation = [
  authorizationHeaderValidator,
  userIdValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to get a user profile',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
