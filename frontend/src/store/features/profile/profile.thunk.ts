import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  IProfile,
  Nullable,
  ServerValidationError,
} from '../../../typings/types';
import { RootState } from '@store/store';
import { API_ENDPOINTS } from '@constants/APIEndpoints';

type RejectValue = {
  message?: string;
  errors?: Nullable<ServerValidationError>;
};

export const getCurrentUsersProfile = createAsyncThunk<
  IProfile,
  void,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/getCurrentUsersProfile',
  async (_, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await axios.get(API_ENDPOINTS.LOGGED_IN_USER_PROFILE);

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const createOrUpdateProfile = createAsyncThunk<
  IProfile,
  Partial<IProfile>,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/createOrUpdateProfile',
  async (userProfile, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await axios.post(
        API_ENDPOINTS.CREATE_OR_UPDATE_PROFILE,
        { profile: userProfile }
      );

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);
