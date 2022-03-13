import { createSlice, isAnyOf, SerializedError } from '@reduxjs/toolkit';
import {
  IGithubRepo,
  IProfile,
  Nullable,
  ServerValidationError,
} from '../../../typings/types';
import {
  getCurrentUserProfile,
  createOrUpdateProfile,
  addOrUpdateProfileEducation,
  addOrUpdateProfileExperience
} from './profile.thunk';

export interface ProfileState {
  profile: Nullable<IProfile>;
  profiles: Nullable<IProfile[]>;
  repos: Nullable<IGithubRepo[]>;
  loading: boolean;
  currentRequestId: string | undefined;
  serverValidationErrors: Nullable<ServerValidationError>;
  error: Nullable<SerializedError>;
  isFetchingProfile: boolean;
}

const initialState: ProfileState = {
  profile: null,
  profiles: null,
  repos: null,
  loading: false,
  currentRequestId: undefined,
  serverValidationErrors: null,
  error: null,
  isFetchingProfile: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile(state) {
      state.profile = null;
      state.profiles = null;
      state.repos = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserProfile.pending, (state, action) => {
        if (!state.loading) {
          state.profile = null;
          state.loading = true;
          state.isFetchingProfile = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getCurrentUserProfile.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.profile = action.payload;
          state.loading = false;
          state.isFetchingProfile = false;
          state.currentRequestId = undefined;

          if (!action.payload) {
            state.error = { message: 'Profile is empty' };
          }
        }
      })
      .addCase(getCurrentUserProfile.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.profile = null;
          state.loading = false;
          state.isFetchingProfile = false;
          state.serverValidationErrors = action.payload?.errors ?? null;
          state.error = action.payload ?? null;
          state.currentRequestId = undefined;
        }
      })
      .addMatcher(
        isAnyOf(
          createOrUpdateProfile.pending,
          addOrUpdateProfileExperience.pending,
          addOrUpdateProfileEducation.pending
        ),
        (state, action) => {
          if (!state.loading) {
            state.profile = null;
            state.loading = true;
            state.isFetchingProfile = false;
            state.serverValidationErrors = null;
            state.error = null;
            state.currentRequestId = action.meta.requestId;
          }
        })
      .addMatcher(
        isAnyOf(
          createOrUpdateProfile.fulfilled,
          addOrUpdateProfileExperience.fulfilled,
          addOrUpdateProfileEducation.fulfilled
        ),
        (state, action) => {
          const { requestId } = action.meta;
          if (state.loading && state.currentRequestId === requestId) {
            state.profile = action.payload;
            state.loading = false;
            state.isFetchingProfile = false;
            state.currentRequestId = undefined;

            if (!action.payload) {
              state.error = { message: 'Profile is empty' };
            }
          }
        })
      .addMatcher(
        isAnyOf(
          createOrUpdateProfile.rejected,
          addOrUpdateProfileExperience.rejected,
          addOrUpdateProfileEducation.rejected
        ),
        (state, action) => {
          const { requestId } = action.meta;
          if (state.loading && state.currentRequestId === requestId) {
            state.profile = null;
            state.loading = false;
            state.isFetchingProfile = false;
            state.serverValidationErrors = action.payload?.errors ?? null;
            state.error = action.payload ?? null;
            state.currentRequestId = undefined;
          }
        });
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
