import { FC } from 'react';
import CircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material';

interface Props {
  circularProgressProps?: CircularProgressProps;
  sx?: SxProps<Theme> | undefined;
}

const CircularLoader: FC<Props> = ({ circularProgressProps, sx }) => {
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...circularProgressProps}
        value={100}
      />

      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={{
          animationDuration: '800ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...circularProgressProps}
      />
    </Box>
  );
};

export default CircularLoader;
