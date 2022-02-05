import { Router } from 'express';
import {
  getUserController,
  loginUserController,
} from '../../../controllers/auth.controller';
import { requireAuth } from '../../../middleware/requireAuth.middleware';
import { getUserValidation, loginUserValidation } from './auth.validation';

const router = Router();

router.get('/', getUserValidation, requireAuth, getUserController);

router.post('/', loginUserValidation, loginUserController);

export default router;
