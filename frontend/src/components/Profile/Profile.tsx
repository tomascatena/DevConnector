import React, { FC, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { getProfileById } from '@store/features/profile/profile.thunk';
import CustomBackdrop from '@components/CustomBackdrop/CustomBackdrop';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router';
import LinkButton from '@components/LinkButton/LinkButton';
import { ROUTES } from '@constants/routes';

type Props = {}

const Profile:FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { loading, profile } = useTypedSelector(state => state.profile);
  const { isAuthenticated, user } = useTypedSelector(state => state.auth);

  const params = useParams();

  useEffect(() => {
    if (params.userId) {
      dispatch(getProfileById(params.userId));
    }
  }, []);

  console.log(user);
  console.log(profile);

  return (
    <>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <LinkButton
          sx={{ textTransform: 'capitalize' }}
          variant='outlined'
          to={ROUTES.PROFILES}
        >
          Back To Profiles
        </LinkButton>

        {
          isAuthenticated && user && profile &&
          user._id === profile.user._id &&
          <LinkButton
            sx={{ textTransform: 'capitalize' }}
            to={ROUTES.EDIT_PROFILE}
          >
            Edit Profile
          </LinkButton>
        }
    </Box>

    <Typography
      variant='h4'
      align='center'
    >
      User Profile
    </Typography>
    {
      loading ? (
        <CustomBackdrop
          isOpen={loading}
          message='Loading user profile. Please wait.'
        />
      ) : (
        <>
          {
          profile
            ? <Typography>{profile.user.firstName}</Typography>
            : <Typography>No profile found</Typography>
          }
        </>
      )
    }
    </>
  );
};

export default Profile;
