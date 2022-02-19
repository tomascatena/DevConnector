import { Response } from 'express';
import { catchAsync } from 'utils/catchAsync';
import httpStatus from 'http-status-codes';
import { authService, tokenService, userService } from 'services';
import { RequestWithBody } from '../types/types';

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
export const getUser = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const user = await userService.getUserById(req.userId!);

    return res.status(httpStatus.OK).json({
      message: 'Successfully authenticated user',
      user: {
        firstName: user?.firstName,
        lastName: user?.lastName,
        avatar: user?.avatar,
      },
    });
  }
);

// @route     POST api/v1/auth
// @desc      Authenticate user & get token
// @access    Private
export const loginUser = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    const user = await authService.loginWithEmailAndPassword(email!, password!);

    const tokens = await tokenService.generateAuthTokens(user._id);

    res.status(httpStatus.OK).json({
      message: 'Successfully logged in',
      tokens,
      user: {
        firstName: user?.firstName,
        lastName: user?.lastName,
        avatar: user?.avatar,
      },
    });
  }
);
