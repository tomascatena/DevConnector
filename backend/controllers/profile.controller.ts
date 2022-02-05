import httpStatus from 'http-status-codes';
import { RequestWithBody } from '../types/types';
import { Response } from 'express';
import Profile from '../models/profile.model';

export const getUserProfileController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const profile = await Profile.findOne({ user: req.userId }).populate(
      'user',
      ['name', 'avatar']
    );
    if (!profile) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'No profile for the given user',
      });
    }

    return res.status(httpStatus.OK).json({
      message: 'Successfully got user profile',
      profile,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }
};
