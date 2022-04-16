import { styled } from '@mui/system';
import { Backdrop } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  color: '#fff',
  zIndex: (theme as Theme).zIndex.drawer + 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));
