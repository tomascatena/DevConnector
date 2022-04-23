import { alertActions } from '@store/features/alert/alertSlice';
import { authActions } from '@store/features/auth/authSlice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { profileActions } from '@store/features/profile/profileSlice';
import { useDispatch } from 'react-redux';

const actions = {
  ...authActions,
  ...profileActions,
  ...alertActions
};

export const useActions = (): typeof actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
