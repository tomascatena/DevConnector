import { Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export const LoginContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(7),
}));

export const LoginPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(7),
  maxWidth: '45rem',
  margin: 'auto'
}));

export const StyledForm = styled('form')(({ theme }) => ({
  flexDirection: 'column',
  display: 'flex',
  width: '100%',
  maxWidth: '35rem',
  gap: theme.spacing(3),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));
