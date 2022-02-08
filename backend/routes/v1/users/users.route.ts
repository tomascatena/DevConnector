import * as controllers from '@controllers/index';
import * as validations from '@middleware/validations';
import { Router } from 'express';
import { requireAuth } from '@middleware/requireAuth.middleware';

const router = Router();

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
router.post('/', validations.registerUser, controllers.registerUser);

// @route     DELETE api/v1/users
// @desc      Delete profile, users & posts
// @access    Private
router.delete('/', validations.deleteUser, requireAuth, controllers.deleteUser);

export default router;
