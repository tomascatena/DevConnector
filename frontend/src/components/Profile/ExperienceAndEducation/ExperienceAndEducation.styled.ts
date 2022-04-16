import { styled } from '@mui/system';
import { Box, Card } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  width: '100%'
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  flex: 1
}));
