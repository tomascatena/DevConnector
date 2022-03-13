export type Nullable<T> = T | null;

export interface IUserRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserLoginForm {
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
}

export interface ServerValidationError {
  [key: string]: ValidationError;
}

export type ValidationError = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

type Token = {
  token: string;
  expires: Date;
};

export type Tokens = {
  access: Token;
  refresh: Token;
};

export interface AuthData {
  user: IUser;
  tokens?: Tokens;
}

export interface IEducation {
  school: string;
  degree: string;
  fieldOfStudy: string;
  from: string | null;
  to: string | null;
  current: boolean;
  description: string;
}

export interface IExperience {
  title: string;
  company: string;
  location: string;
  from: string | null;
  to: string | null;
  current: boolean;
  description: string;
}

export interface ISocial {
  youtube: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
}

export interface IProfile {
  _id: string;
  user: Partial<IUser>;
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

export interface IGithubRepo {}
