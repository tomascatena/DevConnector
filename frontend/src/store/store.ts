import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userRegisterReducer from './features/userRegister/userRegisterSlice';
import userLoginReducer from './features/userLogin/userLoginSlice';

export const store = configureStore({
  reducer: {
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
