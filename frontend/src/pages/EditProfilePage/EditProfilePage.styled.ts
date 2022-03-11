import { styled } from '@mui/system';
import { Container, Paper } from '@mui/material';

export const EditProfileContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(8),
}));

export const EditProfilePaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(7),
  margin: 'auto',
  maxWidth: '50rem'
}));
