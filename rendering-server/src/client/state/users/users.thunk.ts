import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from 'axios';
import { RootState } from '../../client';
import { User } from '../../user';

export const fetchUsers = createAsyncThunk<User[], void, { state: RootState }>(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    const axiosInstance = thunkAPI.extra as Axios;

    const { loading, currentRequestId } = thunkAPI.getState().users;

    if (!loading || thunkAPI.requestId !== currentRequestId) {
      return;
    }

    const { data } = await axiosInstance.get(`/users`);

    return data;
  }
);
