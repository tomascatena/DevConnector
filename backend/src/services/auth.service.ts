import httpStatus from 'http-status-codes';
import { ApiError } from 'utils/ApiError';
import { getUserByEmail } from './user.service';

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const user = await getUserByEmail(email);

  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError({
      statusCode: httpStatus.UNAUTHORIZED,
      message: 'Incorrect email or password',
      isOperational: false,
    });
  }

  return user;
};
