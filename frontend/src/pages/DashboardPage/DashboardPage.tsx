import React, { useEffect, FC } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { getCurrentUsersProfile } from '../../store/features/profile/profile.thunk';
import CircularLoader from '../../components/CircularLoader/CircularLoader';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

export const DashboardContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

type Props = {};

const DashboardPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { loading, profile } = useTypedSelector((state) => state.profile);
  const { user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUsersProfile());

    // eslint-disable-next-line
  }, []);

  return (
    <DashboardContainer>
      <Typography variant='h4' align='center'>
        Dashboard
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <PersonIcon color='action' />

        <Typography color='text.primary'>Welcome {user?.firstName}</Typography>
      </Box>

      {loading ? (
        <CircularLoader sx={{ alignSelf: 'center' }} />
      ) : (
        <>
          {profile !== null ? (
            <>
              <Typography color='text.primary' variant='body1' align='left'>
                You have not yet setup a profile, please add some info.
              </Typography>

              <Button
                component={Link}
                to={ROUTES.CREATE_PROFILE}
                variant='contained'
              >
                Create Profile
              </Button>
            </>
          ) : (
            <Typography variant='body1' align='center'>
              User Profile
            </Typography>
          )}
        </>
      )}
    </DashboardContainer>
  );
};

export default DashboardPage;
