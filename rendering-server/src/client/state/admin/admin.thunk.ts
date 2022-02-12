import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from 'axios';
import { RootState } from '../../client';
import { User } from '../../user';

export const fetchAdmins = createAsyncThunk<User[], void, { state: RootState }>(
  'admin/fetchAdmins',
  async (_, thunkAPI) => {
    const axiosInstance = thunkAPI.extra as Axios;

    const { loading, currentRequestId } = thunkAPI.getState().admin;

    if (!loading || thunkAPI.requestId !== currentRequestId) {
      return;
    }

    const { data } = await axiosInstance.get(`/current_user`);

    return data;
  }
);
