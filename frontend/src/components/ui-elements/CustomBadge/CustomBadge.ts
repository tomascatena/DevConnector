
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

interface CustomBadgeProps {
  badgeColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
}

export const CustomBadge = styled(Typography, {
  shouldForwardProp: (props) => {
    return props !== 'badgeColor';
  },
})<CustomBadgeProps>(({ theme, badgeColor = 'primary' }) => ({
  background: theme.palette[badgeColor].main,
  color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.common.black,
  borderRadius: theme.spacing(2),
  padding: '0.1rem 0.8rem',
  display: 'inline-block',
  fontSize: '0.9rem'
}));
