import { API_ENDPOINTS } from '@constants/APIEndpoints';
import {
  IEducation,
  IExperience,
  IGithubRepo,
  IProfile,
  Nullable,
  ServerValidationError,
} from '../../../typings/types';
import { RootState } from '@store/store';
import { authActions } from '@store/features/auth/authSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const getProfileById = createAsyncThunk<
IProfile,
string,
{ state: RootState; rejectValue: RejectValue }
>(
  'profile/getProfileById',
  async (userId, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const URL = `${API_ENDPOINTS.PROFILE_USER}/${userId}`;
      const response = await axios.get(URL);

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const getAllProfiles = createAsyncThunk<
IProfile[],
void,
{ state: RootState; rejectValue: RejectValue }
>(
  'profile/getAllProfiles',
  async (_, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await axios.get(API_ENDPOINTS.PROFILE);

      return response.data.profiles;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const getGithubRepos = createAsyncThunk<
IGithubRepo[],
string,
{ state: RootState; rejectValue: RejectValue }
>(
  'profile/getGithubRepos',
  async (githubUsername, { getState, requestId, rejectWithValue }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const URL = `${API_ENDPOINTS.GITHUB_REPOS}/${githubUsername}`;
      const response = await axios.get(URL);

      return response.data.repos;
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
        API_ENDPOINTS.PROFILE,
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
        API_ENDPOINTS.PROFILE_EXPERIENCE,
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
        API_ENDPOINTS.PROFILE_EXPERIENCE,
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
        API_ENDPOINTS.PROFILE_EDUCATION,
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
        API_ENDPOINTS.PROFILE_EDUCATION,
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
      const URL = `${API_ENDPOINTS.PROFILE_EXPERIENCE}/${experienceId}`;
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
      const URL = `${API_ENDPOINTS.PROFILE_EDUCATION}/${educationId}`;
      const response = await axios.delete(URL);

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const deleteAccount = createAsyncThunk<
IProfile,
void,
{ state: RootState; rejectValue: RejectValue }
>(
  'profile/deleteAccount',
  async (_, { getState, requestId, rejectWithValue, dispatch }) => {
    const { loading, currentRequestId } = getState().profile;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await axios.delete(API_ENDPOINTS.PROFILE);

      dispatch(authActions.logout());

      return response.data.profile;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);
