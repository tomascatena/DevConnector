import { postsControllers } from '@controllers/index';
import { postsValidation } from '@middleware/validations';
import { requireAuth } from '@middleware/requireAuth.middleware';
import { Router } from 'express';

const router = Router();

// @route     POST api/v1/posts
// @desc      Create a post
// @access    Private
router.post(
  '/',
  postsValidation.createPost,
  requireAuth,
  postsControllers.createPost
);

// @route     GET api/v1/posts/:postId
// @desc      Get post by id
// @access    Private
router.get(
  '/:postId',
  postsValidation.getPostById,
  requireAuth,
  postsControllers.getPostById
);

// @route     GET api/v1/posts
// @desc      Get all posts
// @access    Private
router.get(
  '/', //
  requireAuth,
  postsControllers.getAllPosts
);

// @route     DELETE api/v1/posts/:postId
// @desc      Delete post by id
// @access    Private
router.delete(
  '/:postId',
  postsValidation.deletePostById,
  requireAuth,
  postsControllers.deletePostById
);

// @route     PUT api/v1/posts/like/:postId
// @desc      Like post
// @access    Private
router.put(
  '/like/:postId',
  postsValidation.likePost,
  requireAuth,
  postsControllers.likePost
);

export default router;
