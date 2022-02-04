import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/config';
import { JWTPayload, RequestWithBody } from '../types/types';
import httpStatus from 'http-status-codes';

export const auth = (
  req: RequestWithBody,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization!.split(' ')[1];

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);

    req.userId = (<JWTPayload>decoded).user.id;
  } catch (error) {
    if (error instanceof Error) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: 'No authorized to access this endpoint',
      });
    }
  }

  next();
};
