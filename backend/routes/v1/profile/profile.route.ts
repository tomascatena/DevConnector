import { Router } from 'express';
import {
  getUserProfileController,
  createUserProfileController,
  getAllProfilesController,
  getProfileByUserIdController,
  deleteProfileController,
  profileExperienceController,
  profileEducationController,
  deleteProfileEducationController,
  deleteProfileExperienceController,
  getUserReposController,
} from '../../../controllers/profile.controller';
import {
  deleteProfileExperienceValidation,
  getUserProfileByIdValidation,
  getUserProfileValidation,
  profileExperienceValidation,
  userProfileValidation,
  deleteProfileEducationValidation,
  profileEducationValidation,
  getUserReposValidation,
} from './profile.validation';
import { requireAuth } from '../../../middleware/requireAuth.middleware';

const router = Router();

// @route     GET api/v1/profile
// @desc      Get all profiles
// @access    Public
router.get('/', getAllProfilesController);

// @route     GET api/v1/profile/user/:userId
// @desc      Get profile by userId
// @access    Public
router.get(
  '/user/:userId',
  getUserProfileByIdValidation,
  getProfileByUserIdController
);

// @route     POST api/v1/profile
// @desc      Create or update a user profile
// @access    Private
router.post(
  '/',
  userProfileValidation,
  requireAuth,
  createUserProfileController
);

// @route     GET api/v1/profile/me
// @desc      Get current users profile
// @access    Private
router.get(
  '/me',
  getUserProfileValidation,
  requireAuth,
  getUserProfileController
);

// @route     DELETE api/v1/profile
// @desc      Delete profile, users & posts
// @access    Private
router.delete('/', requireAuth, deleteProfileController);

// @route     PUT api/v1/profile/experience
// @desc      Add/Update profile experience
// @access    Private
router.put(
  '/experience',
  profileExperienceValidation,
  requireAuth,
  profileExperienceController
);

// @route     DELETE api/v1/profile/experience/:experienceId
// @desc      Delete experience from profile
// @access    Private
router.delete(
  '/experience/:experienceId',
  deleteProfileExperienceValidation,
  requireAuth,
  deleteProfileExperienceController
);

// @route     PUT api/v1/profile/education
// @desc      Add/Update profile education
// @access    Private
router.put(
  '/education',
  profileEducationValidation,
  requireAuth,
  profileEducationController
);

// @route     DELETE api/v1/profile/education/:educationId
// @desc      Delete education from profile
// @access    Private
router.delete(
  '/education/:educationId',
  deleteProfileEducationValidation,
  requireAuth,
  deleteProfileEducationController
);

// @route     GET api/v1/profile/github/:githubUsername
// @desc      Get user repos from Github
// @access    Public
router.get(
  '/github/:githubUsername',
  getUserReposValidation,
  requireAuth,
  getUserReposController
);

export default router;
