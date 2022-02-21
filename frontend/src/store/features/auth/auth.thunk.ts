import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  AuthData,
  IUserLoginForm,
  IUserRegisterForm,
} from '../../../typings/types';
import { RootState } from '../../store';
import { authActions } from './authSlice';

export const login = createAsyncThunk<
  AuthData,
  IUserLoginForm,
  { state: RootState }
>('auth/login', async (registerForm, { getState, requestId, dispatch }) => {
  const { loading, currentRequestId } = getState().auth;

  if (!loading || requestId !== currentRequestId) {
    return;
  }

  try {
    const { data } = await axios.post('/api/v1/auth', registerForm);

    dispatch(authActions.setAccessToken(data.tokens.access.token));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(authActions.setError(error.response?.data.errors));
    }
  }
});

export const register = createAsyncThunk<
  AuthData,
  IUserRegisterForm,
  { state: RootState }
>('auth/register', async (registerForm, { getState, requestId, dispatch }) => {
  const { loading, currentRequestId } = getState().auth;

  if (!loading || requestId !== currentRequestId) {
    return;
  }

  try {
    const { data } = await axios.post('/api/v1/users', registerForm);

    dispatch(authActions.setAccessToken(data.tokens.access.token));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(authActions.setError(error.response?.data.errors));
    }
  }
});

export const getUser = createAsyncThunk<AuthData, void>(
  'auth/getUser',
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.get('/api/v1/auth');

      return data;
    } catch (error) {
      dispatch(authActions.logout());

      if (axios.isAxiosError(error)) {
        dispatch(authActions.setError(error.response?.data.errors));
      }
    }
  }
);
