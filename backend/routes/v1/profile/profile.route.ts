import { Router } from 'express';
import { getUserProfileController } from '../../../controllers/profile.controller';
import { requireAuth } from '../../../middleware/requireAuth.middleware';
import { getUserProfileValidation } from './profile.validation';

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

export default router;
