import express, { Response, Router } from 'express';
import httpStatus from 'http-status-codes';
import { getUser } from '../../../controllers/auth.controller';
import { requireAuth } from '../../../middleware/requireAuth.middleware';
import { loginValidation } from './auth.validation';

const router = Router();

// @route     GET api/v1/auth
// @desc      Get auth user
// @access    Private
router.get('/', loginValidation, requireAuth, getUser);

export default router;
