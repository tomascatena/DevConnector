import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authActions } from '@store/features/auth/authSlice';
import { profileActions } from '@store/features/profile/profileSlice';
import { alertActions } from '@store/features/alert/alertSlice';

const actions = {
  ...authActions,
  ...profileActions,
  ...alertActions
};

export const useActions = (): typeof actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
