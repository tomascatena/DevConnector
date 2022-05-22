import { Container, Paper } from '@mui/material';
import { styled } from '@mui/system';

export const AddExperienceContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(7),
}));

export const AddExperiencePaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(7),
  maxWidth: '45rem',
  margin: 'auto'
}));
