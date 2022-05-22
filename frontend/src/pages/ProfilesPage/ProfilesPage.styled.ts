import { Container, } from '@mui/material';
import { styled } from '@mui/system';

export const ProfilesContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(7),
}));
