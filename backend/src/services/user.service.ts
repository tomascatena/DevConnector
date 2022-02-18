import User, { IUser } from '@models/user.model';
import httpStatus from 'http-status-codes';
import { ApiError } from 'utils/ApiError';

export const getUserByEmail = async (email: string) => {
  return User.findOne({ email });
};

export const getUserById = async (userId: string) => {
  return User.findById(userId).select('-password');
};

export const deleteUserById = async (userId: string) => {
  const user = await User.findOneAndRemove({ _id: userId });

  if (!user) {
    throw new ApiError({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'User does not exists',
      isOperational: false,
    });
  }

  return user;
};

export const createUser = async (userBody: Partial<IUser>) => {
  if (await User.isEmailTaken(userBody.email!)) {
    throw new ApiError({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Email already taken',
      isOperational: false,
    });
  }

  const user = await User.create(userBody);

  return user;
};

export const removeUserById = async (userId: string) => {
  await User.findOneAndRemove({ _id: userId });
};
