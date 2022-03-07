import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const EditProfileContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
}));
