import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextWithIconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3)
}));
