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
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  { timestamps: true }
);
