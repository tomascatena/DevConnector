import { authActions } from './features/auth/authSlice';
import { getUser } from './features/auth/auth.thunk';
import { profileActions } from './features/profile/profileSlice';
import { setAuthToken } from '../utils/setAuthToken/setAuthToken';
import { store } from './store';
import validator from 'validator';

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    setAuthToken(accessToken && JSON.parse(accessToken));

    if (accessToken && validator.isJWT(JSON.parse(accessToken))) {
      store.dispatch(authActions.hydrateAccessToken(JSON.parse(accessToken)));
      store.dispatch(getUser());
    }
  } catch (error) {
    store.dispatch(profileActions.clearProfile());
    store.dispatch(authActions.logout());

    console.error(error);
  }
};
