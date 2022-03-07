import { FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import { EditProfileContainer } from './EditProfilePage.styled';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { createOrUpdateProfile } from '@store/features/profile/profile.thunk';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';
import { IProfile } from '../../typings/types';
import ProfileForm from '@components/ProfileForm/ProfileForm';
import { getCurrentUserProfile } from '../../store/features/profile/profile.thunk';

const EditProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, profile } = useTypedSelector((state) => state.profile);

  const navigate = useNavigate();

  const dispatchCreateOrUpdateProfile = (
    createProfileForm: Partial<IProfile>
  ) => {
    dispatch(createOrUpdateProfile(createProfileForm)).then(() => {
      navigate(ROUTES.DASHBOARD);
    });
  };

  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, []);

  return (
    <EditProfileContainer>
      <Typography
        variant='h4'
        align='center'
      >
        Edit Your Profile
      </Typography>

      <ProfileForm
        dispatchCreateOrUpdateProfile={dispatchCreateOrUpdateProfile}
        loading={loading}
        profile={profile}
      />
    </EditProfileContainer>
  );
};

export default EditProfilePage;
