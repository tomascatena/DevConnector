export type Nullable<T> = T | null;

export interface IUserRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
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
