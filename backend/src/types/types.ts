import { Request } from 'express';
import { IUser } from '@models/user.model';
import { IComment } from '@models/schemas/comment.schema';
import { IPost } from '@models/post.model';
import { IProfile } from '@models/profile.model';
import { IExperience } from '../models/schemas/experience.schema';
import { IEducation } from '../models/schemas/education.schema';

export interface RequestWithBody extends Request {
  body: {
    user?: Partial<IUser>;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    profile?: IProfile;
    comment?: Partial<IComment>;
    post?: Partial<IPost>;
    experience: Partial<IExperience>;
    education: Partial<IEducation>;
  };
  user?: Partial<IUser>;
  userId?: string;
}
