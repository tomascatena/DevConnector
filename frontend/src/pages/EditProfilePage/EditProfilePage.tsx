import React, { FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import { EditProfileContainer, EditProfilePaper } from './EditProfilePage.styled';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { createOrUpdateProfile, getCurrentUserProfile } from '@store/features/profile/profile.thunk';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';
import { IProfile } from '../../typings/types';
import ProfileForm from '@components/ProfileForm/ProfileForm';
import CustomBackdrop from '@components/CustomBackdrop/CustomBackdrop';

const EditProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, profile, isFetchingProfile } = useTypedSelector((state) => state.profile);

  const navigate = useNavigate();

  const dispatchCreateOrUpdateProfile = (
    createProfileForm: Partial<IProfile>
  ) => {
    dispatch(createOrUpdateProfile(createProfileForm)).then(() => {
      navigate(ROUTES.DASHBOARD);
    });
  };

  useEffect(() => {
    if (!profile) {
      dispatch(getCurrentUserProfile());
    }
  }, [profile]);

  return (
    <EditProfileContainer>
      <EditProfilePaper elevation={3} >
        <Typography
          variant='h4'
          align='center'
        >
          Edit Your Profile
        </Typography>

        {isFetchingProfile ? (
          <CustomBackdrop
            isOpen={isFetchingProfile}
            message='Loading profile. Please wait.'
          />
        ) : (
          <ProfileForm
            dispatchCreateOrUpdateProfile={dispatchCreateOrUpdateProfile}
            loading={loading}
            profile={profile}
          />
        )}
      </EditProfilePaper>
    </EditProfileContainer>
  );
};

export default React.memo(EditProfilePage);
