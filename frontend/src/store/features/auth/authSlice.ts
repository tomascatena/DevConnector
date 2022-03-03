import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { IUser, Nullable, ServerValidationError } from '../../../typings/types';
import { login, register, getUser } from './auth.thunk';

export interface AuthState {
  user: Nullable<IUser>;
  loading: boolean;
  currentRequestId: string | undefined;
  serverValidationErrors: Nullable<ServerValidationError>;
  error: Nullable<SerializedError>;
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
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    hydrateAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;

      localStorage.removeItem('accessToken');
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
          state.user = action.payload.user;
          state.loading = false;
          state.currentRequestId = undefined;
          state.isAuthenticated = true;
          state.accessToken = action.payload.tokens?.access ?? null;

          localStorage.setItem(
            'accessToken',
            JSON.stringify(state.accessToken)
          );
        }
      })
      .addCase(login.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = null;
          state.loading = false;
          state.serverValidationErrors = action.payload?.errors ?? null;
          state.error = action.error;
          state.currentRequestId = undefined;
          state.isAuthenticated = false;
          state.accessToken = null;

          localStorage.removeItem('accessToken');
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
          state.user = action.payload.user;
          state.loading = false;
          state.currentRequestId = undefined;
          state.isAuthenticated = true;
          state.accessToken = action.payload.tokens?.access ?? null;

          localStorage.setItem(
            'accessToken',
            JSON.stringify(state.accessToken)
          );
        }
      })
      .addCase(register.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = null;
          state.loading = false;
          state.serverValidationErrors = action.payload?.errors ?? null;
          state.error = action.error;
          state.currentRequestId = undefined;
          state.isAuthenticated = false;
          state.accessToken = null;

          localStorage.removeItem('accessToken');
        }
      })
      .addCase(getUser.pending, (state, action) => {
        if (!state.loading) {
          state.user = null;
          state.loading = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getUser.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = action.payload.user;
          state.loading = false;
          state.currentRequestId = undefined;
          state.isAuthenticated = true;
          state.accessToken = action.payload.tokens?.access ?? null;
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = null;
          state.loading = false;
          state.serverValidationErrors = action.payload?.errors ?? null;
          state.error = action.error;
          state.currentRequestId = undefined;
          state.isAuthenticated = false;
          state.accessToken = null;
        }
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
