import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const MainLayout = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
}));

export const MainBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
}));
