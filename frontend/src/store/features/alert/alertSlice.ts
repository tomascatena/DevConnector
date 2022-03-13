import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Nullable } from '../../../typings/types';

export interface ProfileState {
  showAlert: boolean;
  alertMessage: Nullable<string>
}

const initialState: ProfileState = {
  showAlert: false,
  alertMessage: null
};

export const alertSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAlert(state, action: PayloadAction<{showAlert: boolean; alertMessage: string}>) {
      state.showAlert = action.payload.showAlert;
      state.alertMessage = action.payload.alertMessage;
    }
  },
  extraReducers: {},
});

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
