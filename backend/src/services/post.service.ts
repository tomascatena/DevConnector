import Post from '@models/post.model';
import { IUser } from '@models/user.model';

export const createPost = async (user: IUser, postText: string) => {
  await Post.create({
    text: postText,
    firstName: user.firstName,
    lastName: user.lastName,
    avatar: user.avatar,
    user: user._id,
  });
};

export const getPostByUserId = async (userId: string) => {
  const post = await Post.find({ user: userId }).sort({
    date: -1,
  });

  return post;
};

export const getPostById = async (postId: string) => {
  const post = await Post.findById(postId);

  return post;
};

export const removePost = async (postId: string) => {
  const post = await Post.findByIdAndRemove(postId);

  return post;
};

export const removeLikeFromPost = async (userId: string, postId: string) => {
  const post = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $pull: {
        likes: { user: userId },
      },
    },
    { new: true }
  );

  return post;
};

export const addLikeToPost = async (userId: string, postId: string) => {
  const post = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $push: {
        likes: {
          $each: [{ user: userId }],
          $position: 0,
        },
      },
    },
    { new: true }
  );

  return post;
};

export const addCommentToPost = async (
  postId: string,
  commentText: string,
  user: IUser
) => {
  const comment = await Post.findOneAndUpdate(
    { _id: postId },
    {
      $push: {
        comments: {
          $each: [
            {
              text: commentText,
              firstName: user.firstName,
              lastName: user.lastName,
              avatar: user.avatar,
              user: user._id,
            },
          ],
          $position: 0,
        },
      },
    },
    { new: true }
  );

  return comment;
};

export const removeCommentFromPost = async (
  postId: string,
  commentId: string
) => {
  const post = await Post.findOneAndUpdate(
    { _id: postId },
    {
      $pull: {
        comments: { _id: commentId },
      },
    },
    { new: true }
  );

  return post;
};

export const removeAllPostsFromUser = async (userId: string) => {
  await Post.deleteMany({ user: userId });
};
