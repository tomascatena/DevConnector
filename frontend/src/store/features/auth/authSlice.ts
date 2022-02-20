import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { IUser, Nullable, ServerValidationError } from '../../../typings/types';
import { login, register } from './auth.thunk';

export interface AuthState {
  user: Nullable<IUser>;
  loading: boolean;
  currentRequestId: string | undefined;
  serverValidationErrors: null | ServerValidationError;
  error: null | SerializedError;
  isAuthenticated: boolean;
  accessToken: Nullable<string>;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  currentRequestId: undefined,
  serverValidationErrors: null,
  error: null,
  isAuthenticated: false,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<ServerValidationError>) {
      state.serverValidationErrors = action.payload;
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    hydrateAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        if (!state.loading) {
          state.user = null;
          state.loading = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = action.payload;
          state.loading = false;
          state.currentRequestId = undefined;

          localStorage.setItem('userInfo', JSON.stringify(state.user));
        }
      })
      .addCase(login.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = null;
          state.loading = false;
          state.serverValidationErrors = null;
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      })
      .addCase(register.pending, (state, action) => {
        if (!state.loading) {
          state.user = null;
          state.loading = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(register.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = action.payload;
          state.loading = false;
          state.currentRequestId = undefined;

          localStorage.setItem('userInfo', JSON.stringify(state.user));
        }
      })
      .addCase(register.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = null;
          state.loading = false;
          state.serverValidationErrors = null;
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
