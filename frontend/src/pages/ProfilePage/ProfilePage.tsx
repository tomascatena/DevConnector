import { Box, Typography } from '@mui/material';
import { IProfile } from '../../typings/types';
import { ProfilePageContainer } from './ProfilePage.styled';
import { ROUTES } from '@constants/routes';
import { getGithubRepos } from '../../store/features/profile/profile.thunk';
import { getProfileById } from '@store/features/profile/profile.thunk';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { useParams } from 'react-router';
import CustomBackdrop from '@ui-elements/CustomBackdrop/CustomBackdrop';
import LinkButton from '@ui-elements/LinkButton/LinkButton';
import Profile from '@components/Profile/Profile';
import React, { FC, useEffect } from 'react';

type Props = {}

const ProfilePage:FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { loading, selectedUserProfile, repos } = useTypedSelector(state => state.profile);
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
          isAuthenticated && user && selectedUserProfile &&
          user._id === selectedUserProfile.user._id &&
          <LinkButton to={ROUTES.EDIT_PROFILE} >
            Edit Profile
          </LinkButton>
        }
      </Box>

      {
        loading ? (
          <CustomBackdrop
            isOpen={loading}
            message={`Loading ${!selectedUserProfile ? 'user profile' : 'user Github repos'}. Please wait.`}
          />
        ) : (
          <>
            {
              selectedUserProfile
                ? <Profile
                    selectedUserProfile={selectedUserProfile}
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
