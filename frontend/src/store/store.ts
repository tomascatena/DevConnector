import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { getAccessToken } from './getInitialState';
import alertReducer from './features/alert/alertSlice';
import authReducer from './features/auth/authSlice';
import profileReducer from './features/profile/profileSlice';

export const storeConfig = {
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    alert: alertReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
};

export const store = configureStore(storeConfig);

getAccessToken();

export type Store = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
