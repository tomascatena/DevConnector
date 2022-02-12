import { createSlice, SerializedError, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
