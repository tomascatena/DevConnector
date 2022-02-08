import * as controllers from '@controllers/index';
import * as validations from '@middleware/validations';
import { requireAuth } from '@middleware/requireAuth.middleware';
import { Router } from 'express';

const router = Router();

// @route     POST api/v1/posts
// @desc      Create a post
// @access    Private
router.post('/', validations.createPost, requireAuth, controllers.createPost);

// @route     GET api/v1/posts/:postId
// @desc      Get post by id
// @access    Private
router.get(
  '/:postId',
  validations.getPostById,
  requireAuth,
  controllers.getPostById
);

// @route     GET api/v1/posts
// @desc      Get all posts
// @access    Private
router.get('/', requireAuth, controllers.getAllPosts);

// @route     DELETE api/v1/posts/:postId
// @desc      Delete post by id
// @access    Private
router.delete(
  '/:postId',
  validations.deletePostById,
  requireAuth,
  controllers.deletePostById
);

export default router;
