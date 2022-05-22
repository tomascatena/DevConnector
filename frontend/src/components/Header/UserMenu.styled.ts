import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const UserMenuBox = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  alignItems: 'center',
  justifyContent: 'end',
  flex: 1,
  gap: theme.spacing(3),
}));
