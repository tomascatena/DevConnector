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

// @route     PUT api/v1/posts/:postId/like
// @desc      Like post
// @access    Private
router.put(
  '/:postId/like',
  postsValidation.likePost,
  requireAuth,
  postsControllers.likePost
);

// @route     POST api/v1/posts/:postId/comments
// @desc      Comment on a post
// @access    Private
router.post(
  '/:postId/comments',
  postsValidation.commentPost,
  requireAuth,
  postsControllers.commentPost
);

// @route     DELETE api/v1/posts/:postId/comments/:commentId
// @desc      Delete comment
// @access    Private
router.delete(
  '/:postId/comments/:commentId',
  postsValidation.deleteComment,
  requireAuth,
  postsControllers.deleteComment
);

export default router;
