import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const GuestMenuBox = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  justifyContent: 'flex-end',
  flexGrow: 1,
  gap: '1rem',
}));
