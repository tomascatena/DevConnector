import { Router } from 'express';
import { getUserController } from '../../../controllers/auth.controller';
import { requireAuth } from '../../../middleware/requireAuth.middleware';
import { loginValidation } from './auth.validation';

const router = Router();

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
router.get('/', loginValidation, requireAuth, getUserController);

export default router;
