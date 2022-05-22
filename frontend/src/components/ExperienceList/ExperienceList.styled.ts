import { Grid } from '@mui/material';
import { styled } from '@mui/system';

interface ExperienceGridItemProps {
  allowEditAndDelete?: boolean;
}

export const ExperienceGridItem = styled(Grid, {
  shouldForwardProp: (props) => {
    return props !== 'allowEditAndDelete';
  },
})<ExperienceGridItemProps>(({ theme, allowEditAndDelete }) => ({
  margin: allowEditAndDelete ? 0 : 'auto',
  marginTop: theme.spacing(2)
}));
