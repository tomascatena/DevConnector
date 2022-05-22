import { Grid } from '@mui/material';
import { styled } from '@mui/system';

interface EducationGridItemProps {
  allowEditAndDelete?: boolean;
}

export const EducationGridItem = styled(Grid, {
  shouldForwardProp: (props) => {
    return props !== 'allowEditAndDelete';
  },
})<EducationGridItemProps>(({ theme, allowEditAndDelete }) => ({
  margin: allowEditAndDelete ? 0 : 'auto',
  marginTop: theme.spacing(2)
}));
