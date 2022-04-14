import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

export const UIElementBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const InputContainer = styled(Container)(({ theme }) => ({
  maxWidth: '45rem'
}));
