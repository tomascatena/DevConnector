import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, IUserRegisterForm } from '../../../typings/types';
import { RootState } from '../../store';
import { userRegisterActions } from './userRegisterSlice';

export const userRegister = createAsyncThunk<
  IUser,
  IUserRegisterForm,
  { state: RootState }
>(
  'user/userRegister',
  async (registerForm, { getState, requestId, dispatch }) => {
    const { loading, currentRequestId } = getState().userRegister;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const { data } = await axios.post('/api/v1/users', registerForm);

      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(userRegisterActions.setError(error.response?.data.errors));
      }
    }
  }
);
