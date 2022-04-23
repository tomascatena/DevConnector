import { EditProfileContainer, EditProfilePaper } from './EditProfilePage.styled';
import { IProfile } from '../../typings/types';
import { ROUTES } from '@constants/routes';
import { Typography } from '@mui/material';
import { createOrUpdateProfile, getCurrentUserProfile } from '@store/features/profile/profile.thunk';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { useNavigate } from 'react-router';
import CustomBackdrop from '@ui-elements/CustomBackdrop/CustomBackdrop';
import ProfileForm from '@components/ProfileForm/ProfileForm';
import React, { FC, useEffect } from 'react';

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
