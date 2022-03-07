import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { CreateProfileContainer } from './CreateProfilePage.styled';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { createOrUpdateProfile } from '@store/features/profile/profile.thunk';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';
import { IProfile } from '../../typings/types';
import ProfileForm from '@components/ProfileForm/ProfileForm';

const CreateProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading } = useTypedSelector((state) => state.profile);

  const navigate = useNavigate();

  const dispatchCreateOrUpdateProfile = (
    createProfileForm: Partial<IProfile>
  ) => {
    dispatch(createOrUpdateProfile(createProfileForm)).then(() => {
      navigate(ROUTES.DASHBOARD);
    });
  };

  return (
    <CreateProfileContainer>
      <Typography
        variant='h4'
        align='center'
      >
        Create Your Profile
      </Typography>

      <ProfileForm
        dispatchCreateOrUpdateProfile={dispatchCreateOrUpdateProfile}
        loading={loading}
      />
    </CreateProfileContainer>
  );
};

export default CreateProfilePage;
