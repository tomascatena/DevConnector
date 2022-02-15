import { Response } from 'express';
import { catchAsync } from 'utils/catchAsync';
import { env } from '@config/config';
import httpStatus from 'http-status-codes';
import User from '@models/user.model';
import gravatar from 'gravatar';
import jwt from 'jsonwebtoken';
import { ApiError } from 'utils/ApiError';
import { JWTPayload, RequestWithBody } from '../types/types';

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
export const registerUser = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    const avatar = gravatar.url(
      email!,
      {
        s: '200',
        r: 'pg',
        d: 'retro',
      },
      true
    );

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      avatar,
    });

    const payload: JWTPayload = {
      user: {
        id: user.id,
      },
    };

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
          message: 'New user successfully registered',
          user,
          token,
        });
      }
    );
  }
);

// @route     DELETE api/v1/users
// @desc      Delete user
// @access    Private
export const deleteUser = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const user = await User.findOneAndRemove({ _id: req.userId });

    if (!user) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'User does not exists',
        isOperational: false,
      });
    }

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully deleted user',
    });
  }
);
