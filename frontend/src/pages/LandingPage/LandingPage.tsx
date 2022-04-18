import { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import CustomAlert from '@ui-elements/CustomAlert/CustomAlert';
import { useTypedSelector } from '@hooks/index';
import { LandingBox, ButtonsContainer } from './LandingPage.styled';

interface Props {}

const LandingPage: FC<Props> = () => {
  const { showAlert, message, severity } = useTypedSelector((state) => state.alert);

  return (
    <LandingBox>
      <Typography
        variant='h3'
        align='center'
        color='#fff'
      >
        Developer Connector
      </Typography>

      <Typography
        variant='h5'
        align='center'
        color='#fff'
      >
        Create a developer profile/portfolio, share posts and learn from other
        developers
      </Typography>

      <ButtonsContainer>
        <Button
          component={Link}
          to={ROUTES.REGISTER}
          variant='contained'
        >
          Sign Up
        </Button>

        <Button
          component={Link}
          to={ROUTES.LOGIN}
          variant='outlined'
          color='inherit'
        >
          Login
        </Button>
      </ButtonsContainer>

      <CustomAlert
        shouldShowAlert={showAlert}
        message={message}
        severity={severity}
      />
    </LandingBox>
  );
};

export default LandingPage;
