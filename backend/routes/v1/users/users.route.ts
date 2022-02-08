import { usersControllers } from '@controllers/index';
import { usersValidation } from '@middleware/validations';
import { Router } from 'express';
import { requireAuth } from '@middleware/requireAuth.middleware';

const router = Router();

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
router.post('/', usersValidation.registerUser, usersControllers.registerUser);

// @route     DELETE api/v1/users
// @desc      Delete profile, users & posts
// @access    Private
router.delete(
  '/',
  usersValidation.deleteUser,
  requireAuth,
  usersControllers.deleteUser
);

export default router;
