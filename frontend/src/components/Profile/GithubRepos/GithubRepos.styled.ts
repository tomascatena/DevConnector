import { Box, Card } from '@mui/material';
import { styled } from '@mui/system';

export const GithubReposBox = styled(Box)({
  display: 'inline-block',
  width: '100%'
});

export const SectionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%'
}));

export const StatsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const GithubReposCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3)
}));

export const GithubRepoCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: theme.spacing(3)
}));
