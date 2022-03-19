import { ObjectId, Schema } from 'mongoose';

export interface IExperience {
  _id: ObjectId;
  title: string;
  company: string;
  location: string;
  from: Date;
  to: Date;
  current: boolean;
  description: string;
}

export const experienceSchema = new Schema<IExperience>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    company: {
      type: String,
      trim: true,
      required: true,
    },
    location: {
      type: String,
      trim: true,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
    },
    current: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
