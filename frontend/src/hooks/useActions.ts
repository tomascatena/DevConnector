import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { userRegisterActions } from '../store/features/userRegister/userRegisterSlice';
import { userLoginActions } from '../store/features/userLogin/userLoginSlice';

const actions = {
  ...userRegisterActions,
  ...userLoginActions,
};

export const useActions = (): typeof actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
