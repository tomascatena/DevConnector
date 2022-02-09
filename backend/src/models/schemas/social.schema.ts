import { Schema } from 'mongoose';

export interface ISocial {
  youtube: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
}

export const socialSchema = new Schema<ISocial>(
  {
    youtube: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
