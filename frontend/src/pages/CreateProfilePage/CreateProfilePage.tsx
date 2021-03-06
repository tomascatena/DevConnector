import { CreateProfileContainer, CreateProfilePaper } from './CreateProfilePage.styled';
import { FC } from 'react';
import { IProfile } from '../../typings/types';
import { ROUTES } from '@constants/routes';
import { Typography } from '@mui/material';
import { createOrUpdateProfile } from '@store/features/profile/profile.thunk';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { useNavigate } from 'react-router';
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
      <CreateProfilePaper>
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
      </CreateProfilePaper>
    </CreateProfileContainer>
  );
};

export default CreateProfilePage;
