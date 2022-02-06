import {
  createPostController,
  deletePostByIdController,
  getAllPostsController,
  getPostByIdController,
} from '@controllers/post.controller';
import { requireAuth } from '@middleware/requireAuth.middleware';
import {
  createPostValidation,
  deletePostByIdValidation,
  getPostByIdValidation,
} from '@middleware/validation/post.validation.middleware';
import { Router } from 'express';

const router = Router();

// @route     POST api/v1/posts
// @desc      Create a post
// @access    Private
router.post('/', createPostValidation, requireAuth, createPostController);

// @route     GET api/v1/posts/:postId
// @desc      Get post by id
// @access    Private
router.get(
  '/:postId',
  getPostByIdValidation,
  requireAuth,
  getPostByIdController
);

// @route     GET api/v1/posts
// @desc      Get all posts
// @access    Private
router.get('/', requireAuth, getAllPostsController);

// @route     DELETE api/v1/posts/:postId
// @desc      Delete post by id
// @access    Private
router.delete(
  '/:postId',
  deletePostByIdValidation,
  requireAuth,
  deletePostByIdController
);

export default router;
