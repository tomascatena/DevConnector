import { Request } from 'express';
import { IUser } from '@models/user.model';
import { IComment } from '@models/schemas/comment.schema';
import { IPost } from '@models/post.model';
import { IExperience } from '@models/schemas/experience.schema';
import { IEducation } from '@models/schemas/education.schema';
import { ISocial } from '../models/schemas/social.schema';

export interface RequestWithBody extends Request {
  body: {
    user?: Partial<IUser>;
    name?: string;
    email?: string;
    password?: string;
    profile?: {
      user: string;
      status: string;
      skills: string[];
      company?: string;
      website?: string;
      location?: string;
      bio?: string;
      githubUsername?: string;
      experience?: IExperience[];
      education?: IEducation[];
      social?: ISocial;
    };
    comment?: Partial<IComment>;
    post?: Partial<IPost>;
  };
  user?: Partial<IUser>;
  userId?: string;
}

export type JWTPayload = {
  user: {
    id: string;
  };
};
