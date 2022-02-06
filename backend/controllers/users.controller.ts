import { Response } from 'express';
import httpStatus, { ReasonPhrases } from 'http-status-codes';
import User from '../models/user.model';
import { JWTPayload, RequestWithBody } from '../types/types';
import gravatar from 'gravatar';
import jwt from 'jsonwebtoken';
import { env } from '../config/config';

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
export const registerUserController = async (
  req: RequestWithBody,
  res: Response
) => {
  const { name, email, password } = req.body;

  try {
    const avatar = gravatar.url(
      email!,
      {
        s: '200',
        r: 'pg',
        d: 'retro',
      },
      true
    );

    const user = await User.create({ name, email, password, avatar });

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
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// @route     DELETE api/v1/users
// @desc      Delete user
// @access    Private
export const deleteUserController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    console.log(req.userId);

    const user = await User.findOneAndRemove({ _id: req.userId });

    if (!user) {
      return res.status(httpStatus.CREATED).json({
        message: 'User does not exists',
      });
    } else {
      return res.status(httpStatus.CREATED).json({
        message: 'Successfully deleted user',
        user,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
};
