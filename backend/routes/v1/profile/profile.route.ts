import { Router } from 'express';
import {
  getUserProfileController,
  createUserProfileController,
  getAllProfilesController,
  getProfileByUserIdController,
  deleteProfileController,
} from '../../../controllers/profile.controller';
import { requireAuth } from '../../../middleware/requireAuth.middleware';
import {
  deleteProfileValidation,
  getUserProfileByIdValidation,
  getUserProfileValidation,
  userProfileValidation,
} from './profile.validation';

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
router.delete(
  '/',
  deleteProfileValidation,
  requireAuth,
  deleteProfileController
);

export default router;
