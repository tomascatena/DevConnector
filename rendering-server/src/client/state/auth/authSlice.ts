import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { fetchCurrentUser } from './auth.thunk';
import { User } from '../../user';

export interface AuthState {
  currentUser: User | null | boolean;
  loading: boolean;
  currentRequestId: string | undefined;
  error: SerializedError | null | string;
}

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  currentRequestId: undefined,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state, action) => {
        if (state.loading === false) {
          state.currentUser = null;
          state.loading = true;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.currentUser = action.payload;
          state.loading = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.currentUser = null;
          state.loading = false;
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
