import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const DashboardActionsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  flexWrap: 'wrap'
}));
