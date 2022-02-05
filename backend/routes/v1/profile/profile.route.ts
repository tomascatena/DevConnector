import { Router } from 'express';
import {
  getUserProfileController,
  createUserProfileController,
} from '../../../controllers/profile.controller';
import { requireAuth } from '../../../middleware/requireAuth.middleware';
import {
  getUserProfileValidation,
  userProfileValidation,
} from './profile.validation';

const router = Router();

// @route     GET api/v1/profile/me
// @desc      Get current users profile
// @access    Private
router.get(
  '/me',
  getUserProfileValidation,
  requireAuth,
  getUserProfileController
);

// @route     GET api/v1/profile
// @desc      Create or update a user profile
// @access    Private
router.post(
  '/',
  userProfileValidation,
  requireAuth,
  createUserProfileController
);

export default router;
