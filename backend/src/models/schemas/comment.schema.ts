import { Schema, ObjectId } from 'mongoose';

export interface IComment {
  user: ObjectId;
  text: string;
  name: string;
  avatar: string;
  date: Date;
}

export const commentSchema = new Schema<IComment>(
  {
    user: {
      type: Schema.Types.ObjectId,
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
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
