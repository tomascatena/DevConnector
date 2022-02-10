import mongoose, { ObjectId, Schema } from 'mongoose';
import { commentSchema, IComment } from './schemas/comment.schema';

export interface IPost {
  _id: string;
  user: ObjectId;
  text: string;
  name: string;
  avatar: string;
  likes: { user: ObjectId }[];
  comments: IComment[];
  date: Date;
}

const postSchema = new Schema<IPost>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
      },
    ],
    comments: [commentSchema],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
