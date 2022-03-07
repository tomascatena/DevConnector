import { useEffect, FC } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { getCurrentUserProfile } from '../../store/features/profile/profile.thunk';
import CircularLoader from '../../components/CircularLoader/CircularLoader';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import TextWithIcon from '@components/TextWithIcon/TextWithIcon';
import PersonIcon from '@mui/icons-material/Person';
import DashboardActions from '@components/DashboardActions/DashboardActions';

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
    dispatch(getCurrentUserProfile());

    // eslint-disable-next-line
  }, []);

  return (
    <DashboardContainer>
      <Typography
        variant='h4'
        align='center'
      >
        Dashboard
      </Typography>

      <TextWithIcon
        text={`Welcome ${user?.firstName}`}
        icon={<PersonIcon color='action' />}
      />

      {loading ? (
        <CircularLoader sx={{ alignSelf: 'center' }} />
      ) : (
        <>
          {profile === null ? (
            <>
              <Typography
                color='text.primary'
                variant='body1'
                align='left'
              >
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
            <>
              <Typography
                variant='body1'
                align='center'
              >
                User Profile
              </Typography>

              <DashboardActions />
            </>
          )}
        </>
      )}
    </DashboardContainer>
  );
};

export default DashboardPage;
