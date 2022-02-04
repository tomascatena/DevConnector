import { Request, Response, Router } from 'express';
import httpStatus from 'http-status-codes';
import User from '../../../models/user.model';
import { RequestWithBody } from '../../../types/types';
import { registerUserValidation } from './users.validation';
import gravatar from 'gravatar';
import jwt from 'jsonwebtoken';
import config from '../../../config/config';

const router = Router();

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
router.post(
  '/',
  registerUserValidation,
  async (req: RequestWithBody, res: Response) => {
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

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.JWT_SECRET,
        {
          expiresIn: config.JWT_EXPIRES_IN,
        },
        function (err, token) {
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
        message: 'Internal Server Error',
      });
    }
  }
);

export default router;
