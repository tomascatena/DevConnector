import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  IUser,
  IUserLoginForm,
  IUserRegisterForm,
} from '../../../typings/types';
import { RootState } from '../../store';
import { authActions } from './authSlice';

export const login = createAsyncThunk<
  IUser,
  IUserLoginForm,
  { state: RootState }
>('auth/login', async (registerForm, { getState, requestId, dispatch }) => {
  const { loading, currentRequestId } = getState().auth;

  if (!loading || requestId !== currentRequestId) {
    return;
  }

  try {
    const { data } = await axios.post('/api/v1/auth', registerForm);

    dispatch(authActions.setIsLoggedIn(true));
    dispatch(authActions.setAccessToken(data.tokens.access.token));

    return data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(authActions.setError(error.response?.data.errors));
    }
  }
});

export const register = createAsyncThunk<
  IUser,
  IUserRegisterForm,
  { state: RootState }
>('auth/register', async (registerForm, { getState, requestId, dispatch }) => {
  const { loading, currentRequestId } = getState().auth;

  if (!loading || requestId !== currentRequestId) {
    return;
  }

  try {
    const { data } = await axios.post('/api/v1/users', registerForm);

    dispatch(authActions.setIsLoggedIn(true));
    dispatch(authActions.setAccessToken(data.tokens.access.token));

    return data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(authActions.setError(error.response?.data.errors));
    }
  }
});
