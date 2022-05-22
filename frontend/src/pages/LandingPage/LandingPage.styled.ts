import { Box } from '@mui/material';
import { styled } from '@mui/system';
import showCaseImage from '../../assets/showCaseImage.png';

export const LandingBox = styled(Box)(({ theme }) => ({
  flex: 1,
  color: theme.palette.primary.main,
  backgroundImage: `linear-gradient(rgba(39,39,39,0.6), rgba(39,39,39,0.6)), url(${showCaseImage})`,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  color: theme.palette.common.white
}));
