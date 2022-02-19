import { Response } from 'express';
import { catchAsync } from 'utils/catchAsync';
import httpStatus from 'http-status-codes';
import { userService, tokenService } from 'services';
import { RequestWithBody } from '../types/types';
import { createAvatar } from '../utils/createAvatar';

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
export const registerUser = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    const avatar = createAvatar(email!);

    const user = await userService.createUser({
      firstName,
      lastName,
      email,
      password,
      avatar,
    });

    const tokens = await tokenService.generateAuthTokens(user._id);

    return res.status(httpStatus.CREATED).json({
      message: 'New user successfully registered',
      tokens,
      user: {
        firstName: user?.firstName,
        lastName: user?.lastName,
        avatar: user?.avatar,
      },
    });
  }
);

// @route     DELETE api/v1/users
// @desc      Delete user
// @access    Private
export const deleteUser = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    await userService.deleteUserById(req.userId!);

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully deleted user',
    });
  }
);
