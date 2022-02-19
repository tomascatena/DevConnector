import * as validators from '@validators/index';
import { NextFunction, Response } from 'express';
import { env } from '@config/config';
import httpStatus, { ReasonPhrases } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { ApiError } from 'utils/ApiError';
import { validationsResults } from './validations.middleware';
import { RequestWithBody } from '../types/types';

export const requireAuth = [
  validators.authorizationHeader,
  validationsResults(),
  (req: RequestWithBody, res: Response, next: NextFunction) => {
    const token = req.headers.authorization!.split(' ')[1];

    try {
      const decoded = jwt.verify(token, env.JWT_SECRET);

      req.userId = decoded.sub as string;
    } catch (error) {
      throw new ApiError({
        statusCode: httpStatus.UNAUTHORIZED,
        message: ReasonPhrases.UNAUTHORIZED,
        isOperational: false,
        stack: error instanceof Error ? error.stack : undefined,
      });
    }

    next();
  },
];
