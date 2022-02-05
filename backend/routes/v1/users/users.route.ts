import { Router } from 'express';
import { registerUserController } from '../../../controllers/users.controller';

import { registerUserValidation } from './users.validation';

const router = Router();

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
router.post('/', registerUserValidation, registerUserController);

export default router;
