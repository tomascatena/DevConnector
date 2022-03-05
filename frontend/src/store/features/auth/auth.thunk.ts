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
import { API_ENDPOINTS } from '@constants/APIEndpoints';

type RejectValue = {
  message?: string;
  errors?: Nullable<ServerValidationError>;
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
      const { data } = await axios.post(API_ENDPOINTS.AUTH, registerForm);

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
      const { data } = await axios.post(API_ENDPOINTS.USERS, registerForm);

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
    const { data } = await axios.get(API_ENDPOINTS.AUTH);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data);
    }
  }
});
