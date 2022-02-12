// Startup point fo the client side application

import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import usersReducer from './state/users/usersSlice';
import authReducer from './state/auth/authSlice';
import adminReducer from './state/admin/adminSlice';
import axios from 'axios';
import { renderRoutes } from 'react-router-config';
import { AppRoutes } from './AppRoutes';

declare global {
  interface Window {
    __PRELOADED_STATE__: ReturnType<Store['getState']>;
  }
}

const axiosInstance = axios.create({
  baseURL: '/api',
});

// Create Redux store with state injected by the server
export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    admin: adminReducer,
  },
  preloadedState: window.__PRELOADED_STATE__,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: axiosInstance },
    }),
});

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(AppRoutes)}</BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
