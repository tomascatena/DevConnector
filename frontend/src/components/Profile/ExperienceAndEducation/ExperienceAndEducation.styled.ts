import { Box, Card, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const StyledBox = styled(Box)({
  display: 'inline-block',
  width: '100%'
});

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  flex: 1
}));

export const ExperienceOrEducationGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column'
});
