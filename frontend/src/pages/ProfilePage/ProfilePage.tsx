import React, { FC, useEffect } from 'react';
import Profile from '@components/Profile/Profile';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import LinkButton from '@components/LinkButton/LinkButton';
import { ROUTES } from '@constants/routes';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { getProfileById } from '@store/features/profile/profile.thunk';
import CustomBackdrop from '@components/CustomBackdrop/CustomBackdrop';
import { useParams } from 'react-router';
import { getGithubRepos } from '../../store/features/profile/profile.thunk';
import { IProfile } from '../../typings/types';

export const ProfilePageContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(7),
}));

type Props = {}

const ProfilePage:FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { loading, profile, repos } = useTypedSelector(state => state.profile);
  const { isAuthenticated, user } = useTypedSelector(state => state.auth);

  const params = useParams();

  useEffect(() => {
    if (params.userId) {
      dispatch(getProfileById(params.userId)).then(({ payload }) => {
        const userProfile = payload as IProfile;

        if (userProfile?.githubUsername) {
          dispatch(getGithubRepos(userProfile.githubUsername));
        }
      });
    }
  }, []);

  return (
    <ProfilePageContainer>
      <Box sx={{ display: 'flex', gap: 2 }}>
          <LinkButton
            variant='outlined'
            to={ROUTES.PROFILES}
          >
            Back To Profiles
          </LinkButton>

          {
            isAuthenticated && user && profile &&
            user._id === profile.user._id &&
            <LinkButton to={ROUTES.EDIT_PROFILE} >
              Edit Profile
            </LinkButton>
          }
      </Box>

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
                ? <Profile
                    profile={profile}
                    repos={repos}
                  />
                : <Typography>No profile found</Typography>
            }
          </>
        )
      }
    </ProfilePageContainer>
  );
};

export default ProfilePage;
