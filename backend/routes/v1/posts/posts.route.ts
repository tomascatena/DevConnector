import { createPostController } from '@controllers/post.controller';
import { requireAuth } from '@middleware/requireAuth.middleware';
import { createPostValidation } from '@middleware/validation/post.validation.middleware';
import { Router } from 'express';

const router = Router();

// @route     POST api/v1/posts
// @desc      Create a post
// @access    Private
router.post('/', createPostValidation, requireAuth, createPostController);

export default router;
