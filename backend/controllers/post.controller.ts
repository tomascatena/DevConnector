import httpStatus, { ReasonPhrases } from 'http-status-codes';
import { RequestWithBody } from '../types/types';
import { Response } from 'express';
import Profile from '@models/profile.model';
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
      const newPost = {
        text: req.body.post.text,
        name: user.name,
        avatar: user.avatar,
        user: req.userId,
      };

      const post = await Post.create(newPost);

      return res.status(httpStatus.CREATED).json({
        message: 'New post successfully created',
        post,
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
