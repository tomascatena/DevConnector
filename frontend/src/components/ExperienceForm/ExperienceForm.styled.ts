import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface ButtonsBoxProps {
  isDialog?: boolean;
}

export const StyledForm = styled('form')(({ theme }) => ({
  flexDirection: 'column',
  display: 'flex',
  width: '100%',
  maxWidth: '50rem',
  gap: theme.spacing(3),
}));

export const ButtonsBox = styled(Box, {
  shouldForwardProp: (props) => {
    return props !== 'isDialog';
  },
})<ButtonsBoxProps>(({ theme, isDialog }) => ({
  display: 'flex',
  flexDirection: isDialog ? 'row-reverse' : 'row',
  gap: theme.spacing(4),
  marginTop: theme.spacing(5),
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
