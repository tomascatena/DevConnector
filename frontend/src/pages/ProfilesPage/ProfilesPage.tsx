import ProfilesList from '@components/ProfilesList/ProfilesList';
import React, { FC } from 'react';

type Props = {}

const ProfilesPage:FC<Props> = () => {
  return (
    <div>
      <ProfilesList/>
    </div>
  );
};

export default ProfilesPage;
