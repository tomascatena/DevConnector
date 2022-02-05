import { Request } from 'express';
import { IEducation } from '../models/schemas/education.schema';
import { IExperience } from '../models/schemas/experience.schema';
import { ISocial } from '../models/schemas/social.schema';
import { IUser } from '../models/user.model';

type GenericObject = { [key: string]: string | undefined };

export interface RequestWithBody extends Request {
  body: {
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
  };
  user?: Partial<IUser> | null;
  userId?: string;
}

export type JWTPayload = {
  user: {
    id: string;
  };
};
