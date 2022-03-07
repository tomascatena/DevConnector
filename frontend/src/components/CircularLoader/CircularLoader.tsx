import { FC } from 'react';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material';

interface Props {
  size?: number;
  thickness?: number;
  sx?: SxProps<Theme> | undefined;
}

const CircularLoader: FC<Props> = ({ size = 40, thickness = 4, sx }) => {
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={size}
        thickness={thickness}
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
        size={size}
        thickness={thickness}
      />
    </Box>
  );
};

export default CircularLoader;
