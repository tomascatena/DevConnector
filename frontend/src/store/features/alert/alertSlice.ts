import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
  showAlert: boolean;
  message: string;
  variant: 'outlined' | 'filled';
  severity: 'error' | 'warning' | 'info' | 'success';
  timeout: number;
}

export const initialState: AlertState = {
  showAlert: false,
  message: '',
  variant: 'filled',
  severity: 'success',
  timeout: 1000
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert(
      state,
      action: PayloadAction<{
        showAlert: boolean;
        message: string;
        variant?: 'outlined' | 'filled';
        severity?: 'error' | 'warning' | 'info' | 'success';
        timeout?: number
      }>
    ) {
      const { showAlert, message, variant, severity, timeout } = action.payload;

      state.showAlert = showAlert;
      state.message = message;

      if (variant) {
        state.variant = variant;
      }

      if (severity) {
        state.severity = severity;
      }

      if (timeout) {
        state.timeout = timeout;
      }
    },
    resetAlert(state) {
      state.showAlert = false;
      state.message = '';
      state.variant = 'filled';
      state.severity = 'success';
      state.timeout = 1000;
    }
  },
  extraReducers: {},
});

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
