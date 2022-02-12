import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import usersSlice from '../client/state/users/usersSlice';
import authReducer from '../client/state/auth/authSlice';
import adminReducer from '../client/state/admin/adminSlice';
import { Request } from 'express';

const createStore = (req: Request) => {
  const axiosInstance = axios.create({
    baseURL: 'https://react-ssr-api.herokuapp.com/',
    headers: { cookie: req.get('cookie') || '' },
  });

  const store = configureStore({
    reducer: {
      users: usersSlice,
      auth: authReducer,
      admin: adminReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: axiosInstance },
      }),
  });

  return store;
};

export default createStore;
