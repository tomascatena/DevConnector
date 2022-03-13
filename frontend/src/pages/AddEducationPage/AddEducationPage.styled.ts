import { styled } from '@mui/system';
import { Container, Paper } from '@mui/material';

export const AddEducationContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(7),
}));

export const AddEducationPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(7),
  maxWidth: '45rem',
  margin: 'auto'
}));
