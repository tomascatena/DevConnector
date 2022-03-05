import { createSlice, SerializedError } from '@reduxjs/toolkit';
import {
  IGithubRepo,
  IProfile,
  Nullable,
  ServerValidationError,
} from '../../../typings/types';
import { getCurrentUsersProfile } from './profile.thunk';

export interface ProfileState {
  profile: Nullable<IProfile>;
  profiles: Nullable<IProfile[]>;
  repos: Nullable<IGithubRepo[]>;
  loading: boolean;
  currentRequestId: string | undefined;
  serverValidationErrors: Nullable<ServerValidationError>;
  error: Nullable<SerializedError>;
}

const initialState: ProfileState = {
  profile: null,
  profiles: null,
  repos: null,
  loading: false,
  currentRequestId: undefined,
  serverValidationErrors: null,
  error: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUsersProfile.pending, (state, action) => {
        if (!state.loading) {
          state.profile = null;
          state.loading = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getCurrentUsersProfile.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.profile = action.payload;
          state.loading = false;
          state.currentRequestId = undefined;
          if (!action.payload) {
            state.error = { message: 'Profile is empty' };
          }
        }
      })
      .addCase(getCurrentUsersProfile.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.profile = null;
          state.loading = false;
          state.serverValidationErrors = action.payload?.errors ?? null;
          state.error = action.payload ?? null;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
