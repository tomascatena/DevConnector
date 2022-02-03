import { Request, Response, Router } from 'express';
import httpStatus from 'http-status-codes';
import User from '../../../models/user.model';
import { RequestWithBody } from '../../../types/types';
import { registerUserValidation } from './users.validation';
import gravatar from 'gravatar';
import bcryptjs from 'bcryptjs';

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

      const user = await new User({ name, email, password, avatar });

      const salt = await bcryptjs.genSalt(12);

      user.password = await bcryptjs.hash(password!, salt);

      await user.save();

      return res.status(httpStatus.CREATED).json({
        message: 'New user successfully registered',
        user,
      });
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
