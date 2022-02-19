import httpStatus from 'http-status-codes';
import { Response } from 'express';
import { catchAsync } from 'utils/catchAsync';
import { ApiError } from 'utils/ApiError';
import { githubService, profileService, userService } from 'services';
import { RequestWithBody } from '../types/types';

// @route     GET api/v1/profile/me
// @desc      Get current users profile
// @access    Private
export const getUserProfile = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const profile = await profileService.getProfileByUserId(req.userId!);

    if (!profile) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'No profile for the given user',
        isOperational: false,
      });
    }

    return res.status(httpStatus.OK).json({
      message: 'Successfully got user profile',
      profile,
    });
  }
);

// @route     GET api/v1/profile
// @desc      Get all profiles
// @access    Public
export const getAllProfiles = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const profiles = await profileService.getAllProfiles();

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully got all user profiles',
      profiles,
    });
  }
);

// @route     GET api/v1/profile/user/:userId
// @desc      Get profile by userId
// @access    Public
export const getProfileByUserId = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const profile = await profileService.getProfileByUserId(req.params.userId);

    if (!profile) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Cannot find profile for given user',
        isOperational: false,
      });
    }

    res.status(httpStatus.CREATED).json({
      message: 'Successfully got the user profile',
      profile,
    });
  }
);

// @route     POST api/v1/profile
// @desc      Create or update a user profile
// @access    Private
export const createUserProfile = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const {
      company,
      website,
      location,
      bio,
      status,
      githubUsername,
      skills,
      social,
    } = req.body.profile!;

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

    let profile = await profileService.getProfileByUserId(req.userId!);

    if (profile) {
      profile = await profileService.getProfileByUserIdAndUpdate(
        req.userId!,
        profileFields
      );

      return res.status(httpStatus.OK).json({
        message: 'Successfully updated user profile',
        profile,
      });
    }

    profile = await profileService.createProfile(profileFields);

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully created user profile',
      profile,
    });
  }
);

// @route     DELETE api/v1/profile
// @desc      Delete user
// @access    Private
export const deleteProfile = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const profile = await profileService.removeProfileByUserId(req.userId!);

    await userService.removeUserById(req.userId!);

    if (!profile) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'User profile does not exists',
        isOperational: false,
      });
    }

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully deleted user profile',
      profile,
    });
  }
);

// @route     PUT api/v1/profile/experience
// @desc      Add/Update profile experience
// @access    Private
export const profileExperience = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const { experience } = req.body.profile!;

    const profile = await profileService.addOrUpdateProfileExperience(
      req.userId!,
      experience
    );

    if (!profile) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Cannot find user profile',
        isOperational: false,
      });
    }

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully added/updated user profile experience',
      profile,
    });
  }
);

// @route     DELETE api/v1/profile/experience/:experienceId
// @desc      Delete experience from profile
// @access    Private
export const deleteProfileExperience = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const profile = await profileService.removeExperienceFromProfile(
      req.userId!,
      req.params.experienceId
    );

    if (!profile) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Cannot find user profile',
        isOperational: false,
      });
    }
    return res.status(httpStatus.CREATED).json({
      message: 'Successfully deleted user profile experience',
      profile,
    });
  }
);

// @route     PUT api/v1/profile/education
// @desc      Add/Update profile education
// @access    Private
export const profileEducation = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const { education } = req.body.profile!;

    const profile = await profileService.addOrUpdateProfileEducation(
      req.userId!,
      education
    );

    if (!profile) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Cannot find user profile',
        isOperational: false,
      });
    }

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully added/updated user profile education',
      profile,
    });
  }
);

// @route     DELETE api/v1/profile/education/:educationId
// @desc      Delete education from profile
// @access    Private
export const deleteProfileEducation = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const profile = await profileService.removeEducationFromProfile(
      req.userId!,
      req.params.educationId
    );

    if (!profile) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Cannot find user profile',
        isOperational: false,
      });
    }
    return res.status(httpStatus.CREATED).json({
      message: 'Successfully added/updated user profile education',
      profile,
    });
  }
);

// @route     GET api/v1/profile/github/:githubUsername
// @desc      Get user repos from Github
// @access    Public
export const getUserRepos = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const repos = await githubService.fetchRepos(req.params.githubUsername);

    if (repos) {
      return res.status(httpStatus.OK).json({
        message: 'Successfully fetched user Github repos',
        repos,
      });
    }

    throw new ApiError({
      statusCode: httpStatus.NOT_FOUND,
      message: 'Github user not found',
      isOperational: false,
    });
  }
);
