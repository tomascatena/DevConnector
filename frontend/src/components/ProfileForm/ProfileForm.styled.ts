import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const StyledForm = styled('form')(({ theme }) => ({
  flexDirection: 'column',
  display: 'flex',
  gap: theme.spacing(3)
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
