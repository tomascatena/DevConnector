import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, IUserLoginForm } from '../../../typings/types';
import { RootState } from '../../store';
import { userLoginActions } from './userLoginSlice';

export const userLogin = createAsyncThunk<
  IUser,
  IUserLoginForm,
  { state: RootState }
>('user/userLogin', async (registerForm, { getState, requestId, dispatch }) => {
  const { loading, currentRequestId } = getState().userLogin;

  if (!loading || requestId !== currentRequestId) {
    return;
  }

  try {
    const { data } = await axios.post('/api/v1/auth', registerForm);

    return data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(userLoginActions.setError(error.response?.data.errors));
    }
  }
});
