import React, { FC } from 'react';
import Profile from '@components/Profile/Profile';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const ProfilePageContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(7),
}));

type Props = {}

const ProfilePage:FC<Props> = () => {
  return (
    <ProfilePageContainer>
      <Profile/>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
