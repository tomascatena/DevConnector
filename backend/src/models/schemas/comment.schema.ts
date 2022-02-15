import { Schema, ObjectId } from 'mongoose';

export interface IComment {
  user: ObjectId;
  text: string;
  firstName: string;
  lastName: string;
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
    firstName: {
      type: String,
    },
    lastName: {
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
