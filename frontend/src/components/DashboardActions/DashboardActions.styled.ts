import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const DashboardActionsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  flexWrap: 'wrap'
}));
