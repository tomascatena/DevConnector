import React, { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularLoader from '@components/CircularLoader/CircularLoader';
import { Typography } from '@mui/material';

type Props = {
  isOpen: boolean;
  message?: string;
  loaderSize?: number;
  loaderThickness?: number;
  textVariant?: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'overline' | undefined
}

const CustomBackdrop:FC<Props> = ({
  isOpen,
  message = 'Loading...',
  loaderSize = 100,
  loaderThickness = 4,
  textVariant = 'h4'
}) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
      open={isOpen}
    >
      <CircularLoader
        size={loaderSize}
        thickness={loaderThickness}
      />

      <Typography
        sx={{ textAlign: 'center' }}
        variant={textVariant}
        color='text.primary'
      >
        {message}
      </Typography>
    </Backdrop>
  );
};

export default CustomBackdrop;
