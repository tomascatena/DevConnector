import mongoose, { ObjectId, Schema } from 'mongoose';
import { educationSchema, IEducation } from './schemas/education.schema';
import { experienceSchema, IExperience } from './schemas/experience.schema';
import { ISocial, socialSchema } from './schemas/social.schema';

export interface IProfile {
  _id: string;
  user: ObjectId | string;
  company: string;
  website: string;
  location: string;
  status: string;
  skills: string[];
  bio: string;
  githubUsername: string;
  experience: IExperience[];
  education: IEducation[];
  social: ISocial;
}

const profileSchema = new Schema<IProfile>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    company: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    bio: {
      type: String,
    },
    githubUsername: {
      type: String,
    },
    experience: [experienceSchema],
    education: [educationSchema],
    social: socialSchema,
  },
  { timestamps: true }
);

const Profile = mongoose.model<IProfile>('Profile', profileSchema);

export default Profile;
