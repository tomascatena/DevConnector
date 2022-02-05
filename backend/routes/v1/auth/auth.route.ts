import { Router } from 'express';
import {
  getUserController,
  loginUserController,
} from '../../../controllers/auth.controller';
import { requireAuth } from '../../../middleware/requireAuth.middleware';
import { getUserValidation, loginUserValidation } from './auth.validation';

const router = Router();

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
router.get('/', getUserValidation, requireAuth, getUserController);

// @route     POST api/v1/auth
// @desc      Authenticate user & get token
// @access    Private
router.post('/', loginUserValidation, loginUserController);

export default router;
