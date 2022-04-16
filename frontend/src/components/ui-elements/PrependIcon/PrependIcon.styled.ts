import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface PrependIconBoxProps {
  iconColor?: string;
}

export const PrependIconBox = styled(Box, {
  shouldForwardProp: (props) => {
    return props !== 'iconColor';
  },
})<PrependIconBoxProps>(({ theme, iconColor }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  color: iconColor,
}));

export const IconBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#eee',
  display: 'flex',
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
}));
