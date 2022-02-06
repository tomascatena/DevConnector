import httpStatus, { ReasonPhrases } from 'http-status-codes';
import { RequestWithBody } from '../types/types';
import { Response } from 'express';
import Profile from '../models/profile.model';
import User from '../models/user.model';

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

// @route     DELETE api/v1/profile
// @desc      Delete user
// @access    Private
export const deleteProfileController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const profile = await Profile.findOneAndRemove({ user: req.userId });
    await User.findOneAndRemove({ _id: req.userId });

    if (!profile) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'User profile does not exists',
      });
    } else {
      return res.status(httpStatus.CREATED).json({
        message: 'Successfully deleted user profile',
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

// @route     PUT api/v1/profile/experience
// @desc      Add/Update profile experience
// @access    Private
export const profileExperienceController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.userId },
      {
        $push: {
          experience: { $each: [...req.body.experience!], $position: 0 },
        },
      },
      { new: true }
    );

    if (!profile) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Cannot find user profile',
      });
    } else {
      return res.status(httpStatus.CREATED).json({
        message: 'Successfully added/updated user profile experience',
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

// @route     DELETE api/v1/profile/experience/:experienceId
// @desc      Delete experience from profile
// @access    Private
export const deleteProfileExperienceController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.userId },
      {
        $pull: {
          experience: { _id: req.params.experienceId },
        },
      },
      { new: true }
    );

    if (!profile) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Cannot find user profile',
      });
    } else {
      return res.status(httpStatus.CREATED).json({
        message: 'Successfully added/updated user profile experience',
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

// @route     PUT api/v1/profile/education
// @desc      Add/Update profile education
// @access    Private
export const profileEducationController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.userId },
      {
        $push: {
          education: { $each: [...req.body.education!], $position: 0 },
        },
      },
      { new: true }
    );

    if (!profile) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Cannot find user profile',
      });
    } else {
      return res.status(httpStatus.CREATED).json({
        message: 'Successfully added/updated user profile education',
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

// @route     DELETE api/v1/profile/education/:educationId
// @desc      Delete education from profile
// @access    Private
export const deleteProfileEducationController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.userId },
      {
        $pull: {
          education: { _id: req.params.educationId },
        },
      },
      { new: true }
    );

    if (!profile) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Cannot find user profile',
      });
    } else {
      return res.status(httpStatus.CREATED).json({
        message: 'Successfully added/updated user profile education',
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
