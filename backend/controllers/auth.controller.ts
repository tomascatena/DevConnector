import { JWTPayload, RequestWithBody } from '../types/types';
import User from '@models/user.model';
import { Response } from 'express';
import httpStatus, { ReasonPhrases } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { env } from '@config/config';
import bcryptjs from 'bcryptjs';
import { catchAsync } from '@middleware/catchAsync.middleware';

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
export const getUserController = catchAsync(
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
export const loginUserController = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: 'Invalid Credentials',
      });
    } else if (email && password) {
      const payload: JWTPayload = {
        user: {
          id: user?.id,
        },
      };

      const isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) {
        return res.status(httpStatus.UNAUTHORIZED).json({
          message: 'Invalid Credentials',
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
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Internal Server Error',
      });
    }
  }
);
