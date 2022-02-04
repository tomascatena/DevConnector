import { Router } from 'express';
import { registerUser } from '../../../controllers/users.controller';

import { registerUserValidation } from './users.validation';

const router = Router();

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
router.post('/', registerUserValidation, registerUser);

export default router;
