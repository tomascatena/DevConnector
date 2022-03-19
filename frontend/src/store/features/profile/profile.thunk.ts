import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  IProfile,
  IExperience,
  IEducation,
  Nullable,
  ServerValidationError,
} from '../../../typings/types';
import { RootState } from '@store/store';
import { API_ENDPOINTS } from '@constants/APIEndpoints';

type RejectValue = {
  message?: string;
  errors?: Nullable<ServerValidationError>;
};

export const getCurrentUserProfile = createAsyncThunk<
  IProfile,
  void,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/getCurrentUserProfile',
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

export const addProfileExperience = createAsyncThunk<
  IProfile,
  Partial<IExperience>,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/addProfileExperience',
  async (userProfileExperience, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await axios.post(
        API_ENDPOINTS.CREATE_OR_UPDATE_PROFILE_EXPERIENCE,
        { experience: userProfileExperience }
      );

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const updateProfileExperience = createAsyncThunk<
  IProfile,
  Partial<IExperience>,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/updateProfileExperience',
  async (userProfileExperience, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await axios.put(
        API_ENDPOINTS.CREATE_OR_UPDATE_PROFILE_EXPERIENCE,
        { experience: userProfileExperience }
      );

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const addProfileEducation = createAsyncThunk<
  IProfile,
  Partial<IEducation>,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/addProfileEducation',
  async (userProfileEducation, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await axios.post(
        API_ENDPOINTS.CREATE_OR_UPDATE_PROFILE_EDUCATION,
        { education: userProfileEducation }
      );

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const updateProfileEducation = createAsyncThunk<
  IProfile,
  Partial<IEducation>,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/updateProfileEducation',
  async (userProfileEducation, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await axios.put(
        API_ENDPOINTS.CREATE_OR_UPDATE_PROFILE_EDUCATION,
        { education: userProfileEducation }
      );

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const deleteProfileExperience = createAsyncThunk<
  IProfile,
  string,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/deleteProfileExperience',
  async (experienceId, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const URL = `${API_ENDPOINTS.CREATE_OR_UPDATE_PROFILE_EXPERIENCE}/${experienceId}`;
      const response = await axios.delete(URL);

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const deleteProfileEducation = createAsyncThunk<
  IProfile,
  string,
  { state: RootState; rejectValue: RejectValue }
>(
  'profile/deleteProfileEducation',
  async (educationId, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const URL = `${API_ENDPOINTS.CREATE_OR_UPDATE_PROFILE_EDUCATION}/${educationId}`;
      const response = await axios.delete(URL);

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);
