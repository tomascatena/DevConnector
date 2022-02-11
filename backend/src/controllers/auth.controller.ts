import { Response } from 'express';
import { env } from '@config/config';
import { catchAsync } from 'utils/catchAsync';
import httpStatus, { ReasonPhrases } from 'http-status-codes';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@models/user.model';
import { ApiError } from 'utils/ApiError';
import { JWTPayload, RequestWithBody } from '../types/types';

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
export const getUser = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const user = await User.findById(req.userId).select('-password');

    return res.status(httpStatus.OK).json({
      message: 'Successfully authenticated user',
      user,
    });
  }
);

// @route     POST api/v1/auth
// @desc      Authenticate user & get token
// @access    Private
export const loginUser = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError({
        statusCode: httpStatus.UNAUTHORIZED,
        message: 'Invalid Credentials',
        isOperational: false,
      });
    }

    if (email && password) {
      const payload: JWTPayload = {
        user: {
          id: user?.id,
        },
      };

      const isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) {
        throw new ApiError({
          statusCode: httpStatus.UNAUTHORIZED,
          message: 'Invalid Credentials',
          isOperational: false,
        });
      }

      jwt.sign(
        payload,
        env.JWT_SECRET,
        {
          expiresIn: env.JWT_EXPIRES_IN,
        },
        (err, token) => {
          if (err instanceof Error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
              message: err.message,
            });
          }

          return res.status(httpStatus.CREATED).json({
            message: 'Successfully logged in',
            token,
          });
        }
      );
    } else {
      throw new ApiError({
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        isOperational: false,
      });
    }
  }
);
