import { Request, Response } from 'express';
import { env } from '@config/config';
import httpStatus from 'http-status-codes';

export const notFound = (req: Request, res: Response) => {
  res
    .status(httpStatus.NOT_FOUND)
    .send(
      `Not found - ${req.originalUrl} | API Documentation: ${env.API_BASE_URL}/api/v1/docs`
    );
};
