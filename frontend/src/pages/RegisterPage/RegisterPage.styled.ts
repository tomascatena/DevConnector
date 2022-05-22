import { Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export const RegisterContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(7),
}));

export const RegisterPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(7),
  maxWidth: '50rem',
  margin: 'auto'
}));

export const StyledForm = styled('form')(({ theme }) => ({
  flexDirection: 'column',
  display: 'flex',
  width: '100%',
  maxWidth: '40rem',
  gap: theme.spacing(3),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));
