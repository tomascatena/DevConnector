import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const TimelineContentBox = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  flex: 1
}));

export const HeadlineBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export const EditAndDeleteBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'baseline'
}));
