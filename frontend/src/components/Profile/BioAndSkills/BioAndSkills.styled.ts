import { styled } from '@mui/system';
import { Box, Card } from '@mui/material';

export const BioAndSkillsBox = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  width: '100%'
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3)
}));

export const SubsectionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const SkillsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap'
}));
