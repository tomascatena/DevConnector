import { ProfilesContainer } from './ProfilesPage.styled';
import { Typography } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ProfilesList from '@components/ProfilesList/ProfilesList';
import React, { FC } from 'react';
import TextWithIcon from '@ui-elements/TextWithIcon/TextWithIcon';

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
