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
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    fieldOfStudy: {
      type: String,
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
    },
  },
  { timestamps: true }
);
