import ProfilesList from '@components/ProfilesList/ProfilesList';
import React, { FC } from 'react';
import { styled } from '@mui/system';
import { Container, Typography } from '@mui/material';
import TextWithIcon from '@ui-elements/TextWithIcon/TextWithIcon';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

type Props = {}

export const ProfilesContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(7),
}));

const ProfilesPage:FC<Props> = () => {
  return (
    <ProfilesContainer>
      <Typography
        variant='h4'
        align='center'
      >
        Developers
      </Typography>

      <TextWithIcon
        text={'Browse and connect with developers'}
        icon={<ConnectWithoutContactIcon color='action' />}
      />

      <ProfilesList/>
    </ProfilesContainer>
  );
};

export default ProfilesPage;
