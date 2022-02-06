import { Request } from 'express';
import { IEducation } from '@models/schemas/education.schema';
import { IExperience } from '@models/schemas/experience.schema';
import { ISocial } from '@models/schemas/social.schema';
import { IUser } from '@models/user.model';
import { IProfile } from '@models/profile.model';
import { IComment } from '@models/schemas/comment.schema';
import { IPost } from '@models/post.model';

type GenericObject = { [key: string]: string | undefined };

export interface RequestWithBody extends Request {
  body: {
    user?: Partial<IUser>;
    profile?: Partial<IProfile>;
    name?: string;
    email?: string;
    password?: string;
    company?: string;
    githubUsername?: string;
    status?: string;
    skills?: string[];
    website?: string;
    location?: string;
    bio?: string;
    social?: Partial<ISocial>;
    experience?: Partial<IExperience>[];
    education?: Partial<IEducation>[];
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
