import { RequestWithBody } from '../types/types';
import User from '../models/user.model';
import { Response } from 'express';
import httpStatus from 'http-status-codes';

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
export const getUserController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const user = await User.findById(req.userId).select('-password');

    res.status(httpStatus.OK).json({
      message: 'Successfully logged in',
      user,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }
};
