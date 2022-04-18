import { createSlice, isAnyOf, SerializedError } from '@reduxjs/toolkit';
import {
  IGithubRepo,
  IProfile,
  Nullable,
  ServerValidationError,
} from '../../../typings/types';
import {
  getCurrentUserProfile,
  getProfileById,
  getAllProfiles,
  getGithubRepos,
  createOrUpdateProfile,
  addProfileEducation,
  updateProfileEducation,
  addProfileExperience,
  updateProfileExperience,
  deleteProfileEducation,
  deleteProfileExperience,
  deleteAccount
} from './profile.thunk';

export interface ProfileState {
  profile: Nullable<IProfile>;
  selectedUserProfile: Nullable<IProfile>;
  profiles: Nullable<IProfile[]>;
  repos: Nullable<IGithubRepo[]>;
  loading: boolean;
  currentRequestId: string | undefined;
  serverValidationErrors: Nullable<ServerValidationError>;
  error: Nullable<SerializedError>;
  isFetchingProfile: boolean;
}

export const initialState: ProfileState = {
  profile: null,
  selectedUserProfile: null,
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
      .addCase(getProfileById.pending, (state, action) => {
        if (!state.loading) {
          state.selectedUserProfile = null;
          state.loading = true;
          state.isFetchingProfile = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getProfileById.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.selectedUserProfile = action.payload;
          state.loading = false;
          state.isFetchingProfile = false;
          state.currentRequestId = undefined;

          if (!action.payload) {
            state.error = { message: 'Profile is empty' };
          }
        }
      })
      .addCase(getProfileById.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.selectedUserProfile = null;
          state.loading = false;
          state.isFetchingProfile = false;
          state.serverValidationErrors = action.payload?.errors ?? null;
          state.error = action.payload ?? null;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getGithubRepos.pending, (state, action) => {
        if (!state.loading) {
          state.repos = null;
          state.loading = true;
          state.isFetchingProfile = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getGithubRepos.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.repos = action.payload;
          state.loading = false;
          state.isFetchingProfile = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getGithubRepos.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.repos = null;
          state.loading = false;
          state.isFetchingProfile = false;
          state.serverValidationErrors = action.payload?.errors ?? null;
          state.error = action.payload ?? null;
          state.currentRequestId = undefined;
        }
      })
      .addCase(deleteAccount.pending, (state, action) => {
        if (!state.loading) {
          state.profile = null;
          state.loading = true;
          state.isFetchingProfile = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.profile = null;
          state.profiles = null;
          state.repos = null;
          state.loading = false;
          state.isFetchingProfile = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(deleteAccount.rejected, (state, action) => {
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
      .addCase(getAllProfiles.pending, (state, action) => {
        if (!state.loading) {
          state.loading = true;
          state.isFetchingProfile = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
          state.profiles = null;
        }
      })
      .addCase(getAllProfiles.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.profiles = action.payload;
          state.loading = false;
          state.isFetchingProfile = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getAllProfiles.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
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
          createOrUpdateProfile.pending,
          addProfileExperience.pending,
          updateProfileExperience.pending,
          addProfileEducation.pending,
          updateProfileEducation.pending,
          deleteProfileExperience.pending,
          deleteProfileEducation.pending
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
        }
      )
      .addMatcher(
        isAnyOf(
          createOrUpdateProfile.fulfilled,
          createOrUpdateProfile.fulfilled,
          addProfileExperience.fulfilled,
          updateProfileExperience.fulfilled,
          addProfileEducation.fulfilled,
          updateProfileEducation.fulfilled,
          deleteProfileExperience.fulfilled,
          deleteProfileEducation.fulfilled
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
        }
      )
      .addMatcher(
        isAnyOf(
          createOrUpdateProfile.rejected,
          createOrUpdateProfile.rejected,
          addProfileExperience.rejected,
          updateProfileExperience.rejected,
          addProfileEducation.rejected,
          updateProfileEducation.rejected,
          deleteProfileExperience.rejected,
          deleteProfileEducation.rejected
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
        }
      );
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
