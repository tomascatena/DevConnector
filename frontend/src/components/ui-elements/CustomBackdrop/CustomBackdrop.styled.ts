import { Backdrop } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/system';

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  color: '#fff',
  zIndex: (theme as Theme).zIndex.drawer + 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));
