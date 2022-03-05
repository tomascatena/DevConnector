import { profileControllers } from '@controllers/index';
import { profileValidation } from '@middleware/validations';
import { Router } from 'express';
import { requireAuth } from '@middleware/requireAuth.middleware';

const router = Router();

// @route     GET api/v1/profile
// @desc      Get all profiles
// @access    Public
router.get(
  '/', //
  profileControllers.getAllProfiles
);

// @route     GET api/v1/profile/user/:userId
// @desc      Get profile by userId
// @access    Public
router.get(
  '/user/:userId',
  profileValidation.getUserProfileById,
  profileControllers.getProfileByUserId
);

// @route     POST api/v1/profile
// @desc      Create or update a user profile
// @access    Private
router.post(
  '/',
  profileValidation.userProfile,
  requireAuth,
  profileControllers.createUserProfile
);

// @route     GET api/v1/profile/me
// @desc      Get current users profile
// @access    Private
router.get(
  '/me', //
  requireAuth,
  profileControllers.getUserProfile
);

// @route     DELETE api/v1/profile
// @desc      Delete profile, users & posts
// @access    Private
router.delete(
  '/', //
  requireAuth,
  profileControllers.deleteProfile
);

// @route     PUT api/v1/profile/experience
// @desc      Add/Update profile experience
// @access    Private
router.put(
  '/experience',
  profileValidation.profileExperience,
  requireAuth,
  profileControllers.profileExperience
);

// @route     DELETE api/v1/profile/experience/:experienceId
// @desc      Delete experience from profile
// @access    Private
router.delete(
  '/experience/:experienceId',
  profileValidation.deleteProfileExperience,
  requireAuth,
  profileControllers.deleteProfileExperience
);

// @route     PUT api/v1/profile/education
// @desc      Add/Update profile education
// @access    Private
router.put(
  '/education',
  profileValidation.profileEducation,
  requireAuth,
  profileControllers.profileEducation
);

// @route     DELETE api/v1/profile/education/:educationId
// @desc      Delete education from profile
// @access    Private
router.delete(
  '/education/:educationId',
  profileValidation.deleteProfileEducation,
  requireAuth,
  profileControllers.deleteProfileEducation
);

// @route     GET api/v1/profile/github/:githubUsername
// @desc      Get user repos from Github
// @access    Public
router.get(
  '/github/:githubUsername',
  profileValidation.getUserRepos,
  requireAuth,
  profileControllers.getUserRepos
);

export default router;
