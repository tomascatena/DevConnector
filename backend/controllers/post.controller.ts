import httpStatus, { ReasonPhrases } from 'http-status-codes';
import { RequestWithBody } from '../types/types';
import { Response } from 'express';
import User from '@models/user.model';
import Post from '@models/post.model';

// @route     POST api/v1/posts
// @desc      Create a post
// @access    Private
export const createPostController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
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
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
};

// @route     GET api/v1/posts
// @desc      Get all posts
// @access    Private
export const getAllPostsController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
    const posts = await Post.find({ user: req.userId }).sort({
      date: -1,
    });

    return res.status(httpStatus.CREATED).json({
      message: 'Successfully fetched all posts from user',
      posts,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
};

// @route     GET api/v1/posts/:postId
// @desc      Get post by id
// @access    Private
export const getPostByIdController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
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
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
};

// @route     DELETE api/v1/posts/:postId
// @desc      Delete post by id
// @access    Private
export const deletePostByIdController = async (
  req: RequestWithBody,
  res: Response
) => {
  try {
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
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
};
