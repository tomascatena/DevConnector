import { styled } from '@mui/system';
import { Box, Card, Avatar, CardContent, Typography } from '@mui/material';

export const ProfilesListItemBox = styled(Box)(() => ({
  display: 'inline-block',
  width: '100%'
}));

export const ProfilesListItemCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  minHeight: '10rem'
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  height: '6rem',
  width: '6rem',
  margin: theme.spacing(1.5)
}));

export const ContentBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const SkillsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap'
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flex: '1 0 auto'
}));

export const TypographyLink = styled(Typography)(({ theme }) => ({
  display: 'inline-block',

  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));
