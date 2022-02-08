import { authValidation } from '@middleware/validations';
import { authControllers } from '@controllers/index';
import { Router } from 'express';
import { requireAuth } from '@middleware/requireAuth.middleware';

const router = Router();

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
router.get('/', requireAuth, authControllers.getUser);

// @route     POST api/v1/auth
// @desc      Authenticate user & get token
// @access    Private
router.post('/', authValidation.loginUser, authControllers.loginUser);

export default router;
