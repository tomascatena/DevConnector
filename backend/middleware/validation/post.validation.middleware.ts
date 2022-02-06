import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';
import {
  postIdParamValidator,
  postValidator,
} from '@validators/post.validators';

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

export const getPostByIdValidation = [
  postIdParamValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to get a post by id',
        errors: errors.mapped(),
      });
    }

    next();
  },
];

export const deletePostByIdValidation = [
  postIdParamValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to delete a post by id',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
