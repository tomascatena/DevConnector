import { Schema } from 'mongoose';

export interface IEducation {
  school: string;
  degree: string;
  fieldOfStudy: string;
  from: Date;
  to: Date;
  current: boolean;
  description: string;
}

export const educationSchema = new Schema<IEducation>(
  {
    school: {
      type: String,
      trim: true,
      required: true,
    },
    degree: {
      type: String,
      trim: true,
      required: true,
    },
    fieldOfStudy: {
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
