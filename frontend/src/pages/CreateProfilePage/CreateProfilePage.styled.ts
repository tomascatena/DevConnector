import { styled } from '@mui/system';
import { Container, Paper } from '@mui/material';

export const CreateProfileContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(7),
}));

export const CreateProfilePaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(7),
  maxWidth: '50rem',
  margin: 'auto'
}));
