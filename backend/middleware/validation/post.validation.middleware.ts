import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';
import { commentValidator, postValidator } from '@validators/post.validators';

export const createPostValidation = [
  ...postValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to create a post',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
