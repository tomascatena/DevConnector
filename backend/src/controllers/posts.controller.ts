import { Response } from 'express';
import { catchAsync } from 'utils/catchAsync';
import httpStatus from 'http-status-codes';
import User from '@models/user.model';
import Post from '@models/post.model';
import { ApiError } from 'utils/ApiError';
import { RequestWithBody } from '../types/types';

// @route     POST api/v1/posts
// @desc      Create a post
// @access    Private
export const createPost = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const user = await User.findById(req.userId).select('-password');

    if (!user) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'User not found',
        isOperational: false,
      });
    }

    if (req.body.post?.text) {
      const post = await Post.create({
        text: req.body.post.text,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        user: req.userId,
      });

      return res.status(httpStatus.CREATED).json({
        message: 'New post successfully created',
        post,
      });
    }

    throw new ApiError({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Can not create post',
      isOperational: false,
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
    }

    throw new ApiError({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Post not found',
      isOperational: false,
    });
  }
);

// @route     DELETE api/v1/posts/:postId
// @desc      Delete post by id
// @access    Private
export const deletePostById = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Post not found',
        isOperational: false,
      });
    }

    if (post.user.toString() !== req.userId) {
      throw new ApiError({
        statusCode: httpStatus.UNAUTHORIZED,
        message: 'Cannot delete posts from other user',
        isOperational: false,
      });
    }

    await Post.findByIdAndRemove(req.params.postId);

    return res.status(httpStatus.OK).json({
      message: 'Successfully deleted post',
    });
  }
);

// @route     PUT api/v1/posts/like/:postId
// @desc      Like post
// @access    Private
export const likePost = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Post not found',
        isOperational: false,
      });
    }

    if (post.user.toString() === req.userId) {
      throw new ApiError({
        statusCode: httpStatus.UNAUTHORIZED,
        message: 'Cannot like own post',
        isOperational: false,
      });
    }

    const hasLikedPost = post.likes.some(
      (like) => like.user.toString() === req.userId
    );

    let updatedPost;
    if (hasLikedPost) {
      updatedPost = await Post.findByIdAndUpdate(
        { _id: req.params.postId },
        {
          $pull: {
            likes: { user: req.userId },
          },
        },
        { new: true }
      );
    } else {
      updatedPost = await Post.findByIdAndUpdate(
        { _id: req.params.postId },
        {
          $push: {
            likes: {
              $each: [{ user: req.userId }],
              $position: 0,
            },
          },
        },
        { new: true }
      );
    }

    return res.status(httpStatus.OK).json({
      message: 'Successfully updated post likes',
      likes: updatedPost?.likes,
    });
  }
);

// @route     POST api/v1/posts/:postId/comments
// @desc      Comment on a post
// @access    Private
export const commentPost = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const user = await User.findById(req.userId).select('-password');

    if (!user) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'User not found',
        isOperational: false,
      });
    }

    if (req.body.comment?.text) {
      const comment = await Post.findOneAndUpdate(
        { _id: req.params.postId },
        {
          $push: {
            comments: {
              $each: [
                {
                  text: req.body.comment.text,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  avatar: user.avatar,
                  user: req.userId,
                },
              ],
              $position: 0,
            },
          },
        },
        { new: true }
      );

      if (!comment) {
        throw new ApiError({
          statusCode: httpStatus.BAD_REQUEST,
          message: 'Post not found',
          isOperational: false,
        });
      }

      return res.status(httpStatus.CREATED).json({
        message: 'Comment created',
        comment,
      });
    }
  }
);

// @route     DELETE api/v1/posts/:postId/comments/:commentId
// @desc      Delete comment
// @access    Private
export const deleteComment = catchAsync(
  async (req: RequestWithBody, res: Response) => {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Post not found',
        isOperational: false,
      });
    }

    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.postId },
      {
        $pull: {
          comments: { _id: req.params.commentId },
        },
      },
      { new: true }
    );

    if (!updatedPost) {
      throw new ApiError({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Post not found',
        isOperational: false,
      });
    }

    return res.status(httpStatus.CREATED).json({
      message: 'Comment deleted',
      post: updatedPost,
    });
  }
);
