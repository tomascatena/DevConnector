import { Request } from 'express';
import { IUser } from '../models/user.model';

type GenericObject = { [key: string]: string | undefined };

export interface RequestWithBody extends Request {
  body: {
    name?: string;
    email?: string;
    password?: string;
  };
  user?: Partial<IUser> | null;
  userId?: string;
}

export type JWTPayload = {
  user: {
    id: string;
  };
};
