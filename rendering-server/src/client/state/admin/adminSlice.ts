import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { fetchAdmins } from './admin.thunk';
import { User } from '../../user';

export interface AdminState {
  adminsList: User[] | null;
  loading: boolean;
  currentRequestId: string | undefined;
  error: SerializedError | null | string;
}

const initialState: AdminState = {
  adminsList: null,
  loading: false,
  currentRequestId: undefined,
  error: null,
};

export const adminSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmins.pending, (state, action) => {
        if (state.loading === false) {
          state.adminsList = null;
          state.loading = true;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.adminsList = action.payload;
          state.loading = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.adminsList = null;
          state.loading = false;
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice.reducer;
