import { Router } from 'express';
import {
  deleteUserController,
  registerUserController,
} from '../../../controllers/users.controller';
import { requireAuth } from '../../../middleware/requireAuth.middleware';
import {
  deleteUserValidation,
  registerUserValidation,
} from './users.validation';

const router = Router();

// @route     POST api/v1/users
// @desc      Register user
// @access    Public
router.post('/', registerUserValidation, registerUserController);

// @route     DELETE api/v1/users
// @desc      Delete profile, users & posts
// @access    Private
router.delete('/', deleteUserValidation, requireAuth, deleteUserController);

export default router;
