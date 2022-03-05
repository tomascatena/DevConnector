import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { getCurrentUsersProfile } from '../../store/features/profile/profile.thunk';

type Props = {};

const DashboardPage = (props: Props) => {
  const dispatch = useAppDispatch();
  const { loading, profile } = useTypedSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getCurrentUsersProfile());
  }, []);

  return <Container>Dashboard Page</Container>;
};

export default DashboardPage;
