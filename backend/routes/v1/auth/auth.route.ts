import * as validations from '@middleware/validations';
import * as controllers from '@controllers/index';
import { Router } from 'express';
import { requireAuth } from '@middleware/requireAuth.middleware';

const router = Router();

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
router.get('/', requireAuth, controllers.getUser);

// @route     POST api/v1/auth
// @desc      Authenticate user & get token
// @access    Private
router.post('/', validations.loginUser, controllers.loginUser);

export default router;
