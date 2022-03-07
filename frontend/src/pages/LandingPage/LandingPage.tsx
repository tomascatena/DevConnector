import React, { FC } from 'react';
import { styled } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import showCaseImage from '../../assets/showCaseImage.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

const LandingBox = styled(Box)(({ theme }) => ({
  flex: 1,
  color: theme.palette.primary.main,
  backgroundImage: `linear-gradient(rgba(39,39,39,0.6), rgba(39,39,39,0.6)), url(${showCaseImage})`,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
}));

const LandingPage: FC = () => {
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
        >
          Login
        </Button>
      </ButtonsContainer>
    </LandingBox>
  );
};

export default LandingPage;
