import { Request } from 'express';
import { IUser } from '@models/user.model';
import { IComment } from '@models/schemas/comment.schema';
import { IPost } from '@models/post.model';
import { IProfile } from '@models/profile.model';

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
  };
  user?: Partial<IUser>;
  userId?: string;
}

export type JWTPayload = {
  user: {
    id: string;
  };
};
