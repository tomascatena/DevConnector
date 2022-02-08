import { RequestWithBody } from '../types/types';
import { Response } from 'express';
import { catchAsync } from '@middleware/catchAsync.middleware';
import httpStatus from 'http-status-codes';
import User from '@models/user.model';
import Post from '@models/post.model';

// @route     POST api/v1/posts
// @desc      Create a post
// @access    Private
export const createPost = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const user = await User.findById(req.userId).select('-password');

    if (!user) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'User not found',
      });
    }

    if (req.body.post?.text) {
      const post = await Post.create({
        text: req.body.post.text,
        name: user.name,
        avatar: user.avatar,
        user: req.userId,
      });

      return res.status(httpStatus.CREATED).json({
        message: 'New post successfully created',
        post,
      });
    }

    return res.status(httpStatus.BAD_REQUEST).json({
      message: 'Can not create post',
    });
  }
);

// @route     GET api/v1/posts
// @desc      Get all posts
// @access    Private
export const getAllPosts = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const posts = await Post.find({ user: req.userId }).sort({
      date: -1,
    });

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully fetched all posts from user',
      posts,
    });
  }
);

// @route     GET api/v1/posts/:postId
// @desc      Get post by id
// @access    Private
export const getPostById = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const post = await Post.findById(req.params.postId);

    if (post) {
      return res.status(httpStatus.OK).json({
        message: 'Successfully fetched post',
        post,
      });
    } else {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Post not found',
      });
    }
  }
);

// @route     DELETE api/v1/posts/:postId
// @desc      Delete post by id
// @access    Private
export const deletePostById = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Post not found',
        post,
      });
    }

    if (post.user.toString() !== req.userId) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: 'Cannot delete posts from other user',
      });
    }

    await Post.findByIdAndRemove(req.params.postId);

    return res.status(httpStatus.OK).json({
      message: 'Successfully deleted post',
    });
  }
);
