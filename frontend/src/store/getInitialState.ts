import { authActions } from './features/auth/authSlice';
import { store } from './store';
import validator from 'validator';

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      if (validator.isJWT(JSON.parse(accessToken))) {
        store.dispatch(authActions.hydrateAccessToken(JSON.parse(accessToken)));
      } else {
        store.dispatch(authActions.hydrateAccessToken(null));
        store.dispatch(authActions.setIsLoggedIn(false));
      }
    }
  } catch (error) {
    console.log(error);
  }
};
