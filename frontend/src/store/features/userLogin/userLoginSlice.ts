import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { IUser, Nullable, ServerValidationError } from '../../../typings/types';
import { userLogin } from './userLogin.thunk';

export interface UserState {
  user: Nullable<IUser>;
  loading: boolean;
  currentRequestId: string | undefined;
  serverValidationErrors: null | ServerValidationError;
  error: null | SerializedError;
}

const initialState: UserState = {
  user: null,
  loading: false,
  currentRequestId: undefined,
  serverValidationErrors: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<ServerValidationError>) {
      state.serverValidationErrors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        if (!state.loading) {
          state.user = null;
          state.loading = true;
          state.serverValidationErrors = null;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.user = action.payload;
          state.loading = false;
          state.currentRequestId = undefined;

          localStorage.setItem('userInfo', JSON.stringify(state.user));
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
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

export const userLoginActions = userSlice.actions;

export default userSlice.reducer;
