import httpStatus from 'http-status-codes';
import { RequestWithBody } from '../types/types';
import { Response } from 'express';
import Profile from '../models/profile.model';

// @route     GET api/v1/profile/me
// @desc      Get current users profile
// @access    Private
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

// @route     POST api/v1/profile
// @desc      Create or update a user profile
// @access    Private
export const createUserProfileController = async (
  req: RequestWithBody,
  res: Response
) => {
  const {
    company,
    website,
    location,
    bio,
    status,
    githubUsername,
    skills,
    social,
  } = req.body;

  const profileFields = {
    user: req.userId,
    status,
    skills,
    ...(company && { company }),
    ...(website && { website }),
    ...(location && { location }),
    ...(bio && { bio }),
    ...(githubUsername && { githubUsername }),
    ...(social && { social }),
  };

  console.log(req.userId);

  try {
    let profile = await Profile.findOne({ user: req.userId });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.userId },
        { $set: profileFields },
        { new: true }
      );

      return res.status(httpStatus.OK).json({
        message: 'Successfully updated user profile',
        profile,
      });
    } else {
      profile = await Profile.create(profileFields);

      return res.status(httpStatus.CREATED).json({
        message: 'Successfully created user profile',
        profile,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }
};
