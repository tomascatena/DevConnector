import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authActions } from '@store/features/auth/authSlice';
import { profileActions } from '@store/features/profile/profileSlice';

const actions = {
  ...authActions,
  ...profileActions,
};

export const useActions = (): typeof actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
