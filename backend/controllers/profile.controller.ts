import httpStatus, { ReasonPhrases } from 'http-status-codes';
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
      console.log(error.message);

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
};

// @route     GET api/v1/profile
// @desc      Get all profiles
// @access    Public
export const getAllProfilesController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully got all user profiles',
      profiles,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
};

// @route     GET api/v1/profile/user/:userId
// @desc      Get profile by userId
// @access    Public
export const getProfileByUserIdController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.userId,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Cannot find profile for given user',
      });
    } else {
      return res.status(httpStatus.CREATED).json({
        message: 'Successfully got the user profile',
        profile,
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
      console.log(error.message);

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
};
