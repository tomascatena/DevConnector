import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { fetchUsers } from './users.thunk';
import { User } from '../../user';

export interface UsersState {
  usersList: User[] | null;
  loading: boolean;
  currentRequestId: string | undefined;
  error: SerializedError | null | string;
}

const initialState: UsersState = {
  usersList: null,
  loading: false,
  currentRequestId: undefined,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        if (state.loading === false) {
          state.usersList = null;
          state.loading = true;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.usersList = action.payload;
          state.loading = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.usersList = null;
          state.loading = false;
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
