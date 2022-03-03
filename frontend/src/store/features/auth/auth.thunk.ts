import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  AuthData,
  IUserLoginForm,
  IUserRegisterForm,
  Nullable,
  ServerValidationError,
} from '../../../typings/types';
import { RootState } from '@store/store';

type RejectValue = {
  errors: Nullable<ServerValidationError>;
};

export const login = createAsyncThunk<
  AuthData,
  IUserLoginForm,
  { state: RootState; rejectValue: RejectValue }
>(
  'auth/login',
  async (registerForm, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().auth;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const { data } = await axios.post('/api/v1/auth', registerForm);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const register = createAsyncThunk<
  AuthData,
  IUserRegisterForm,
  { state: RootState; rejectValue: RejectValue }
>(
  'auth/register',
  async (registerForm, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().auth;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const { data } = await axios.post('/api/v1/users', registerForm);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const getUser = createAsyncThunk<
  AuthData,
  void,
  { rejectValue: RejectValue }
>('auth/getUser', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/api/v1/auth');

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data);
    }
  }
});
