import { styled } from '@mui/system';
import { Grid } from '@mui/material';

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
