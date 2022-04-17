import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

export const UIElementBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ComponentBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh'
}));

export const InputContainer = styled(Container)(({ theme }) => ({
  maxWidth: '45rem'
}));
