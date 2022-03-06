import { styled } from '@mui/system';
import { Container, Box } from '@mui/material';

export const CreateProfileContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

export const StyledForm = styled('form')(({ theme }) => ({
  flexDirection: 'column',
  display: 'flex',
  width: '100%',
  maxWidth: '60rem',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(10),
}));

export const ButtonsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  marginTop: theme.spacing(3),
}));

export const SocialNetworkLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  flexDirection: 'column',
}));

export const ShowSocialNetworkLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
}));
