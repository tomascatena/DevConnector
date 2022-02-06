import { Router } from 'express';
import {
  getUserController,
  loginUserController,
} from '@controllers/auth.controller';
import { requireAuth } from '@middleware/requireAuth.middleware';
import { loginUserValidation } from '@middleware/validation/auth.validation.middleware';

const router = Router();

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
router.get('/', requireAuth, getUserController);

// @route     POST api/v1/auth
// @desc      Authenticate user & get token
// @access    Private
router.post('/', loginUserValidation, loginUserController);

export default router;
