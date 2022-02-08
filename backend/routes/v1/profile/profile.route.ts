import * as controllers from '@controllers/index';
import * as validations from '@middleware/validations';
import { Router } from 'express';
import { requireAuth } from '@middleware/requireAuth.middleware';

const router = Router();

// @route     GET api/v1/profile
// @desc      Get all profiles
// @access    Public
router.get('/', controllers.getAllProfiles);

// @route     GET api/v1/profile/user/:userId
// @desc      Get profile by userId
// @access    Public
router.get(
  '/user/:userId',
  validations.getUserProfileById,
  controllers.getProfileByUserId
);

// @route     POST api/v1/profile
// @desc      Create or update a user profile
// @access    Private
router.post(
  '/',
  validations.userProfile,
  requireAuth,
  controllers.createUserProfile
);

// @route     GET api/v1/profile/me
// @desc      Get current users profile
// @access    Private
router.get(
  '/me',
  validations.getUserProfile,
  requireAuth,
  controllers.getUserProfile
);

// @route     DELETE api/v1/profile
// @desc      Delete profile, users & posts
// @access    Private
router.delete('/', requireAuth, controllers.deleteProfile);

// @route     PUT api/v1/profile/experience
// @desc      Add/Update profile experience
// @access    Private
router.put(
  '/experience',
  validations.profileExperience,
  requireAuth,
  controllers.profileExperience
);

// @route     DELETE api/v1/profile/experience/:experienceId
// @desc      Delete experience from profile
// @access    Private
router.delete(
  '/experience/:experienceId',
  validations.deleteProfileExperience,
  requireAuth,
  controllers.deleteProfileExperience
);

// @route     PUT api/v1/profile/education
// @desc      Add/Update profile education
// @access    Private
router.put(
  '/education',
  validations.profileEducation,
  requireAuth,
  controllers.profileEducation
);

// @route     DELETE api/v1/profile/education/:educationId
// @desc      Delete education from profile
// @access    Private
router.delete(
  '/education/:educationId',
  validations.deleteProfileEducation,
  requireAuth,
  controllers.deleteProfileEducation
);

// @route     GET api/v1/profile/github/:githubUsername
// @desc      Get user repos from Github
// @access    Public
router.get(
  '/github/:githubUsername',
  validations.getUserRepos,
  requireAuth,
  controllers.getUserRepos
);

export default router;
