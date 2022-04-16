import ProfilesList from '@components/ProfilesList/ProfilesList';
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import TextWithIcon from '@ui-elements/TextWithIcon/TextWithIcon';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { ProfilesContainer } from './ProfilesPage.styled';

type Props = {}

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
