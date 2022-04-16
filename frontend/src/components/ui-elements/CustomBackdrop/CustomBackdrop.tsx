import React, { FC } from 'react';
import CircularLoader from '@ui-elements/CircularLoader/CircularLoader';
import { Typography } from '@mui/material';
import { StyledBackdrop } from './CustomBackdrop.styled';

type Props = {
  isOpen: boolean;
  message?: string;
  loaderSize?: number;
  loaderThickness?: number;
  textVariant?: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'overline' | undefined
}

const CustomBackdrop:FC<Props> = ({
  isOpen,
  message = 'Loading... Please wait.',
  loaderSize = 100,
  loaderThickness = 4,
  textVariant = 'h4'
}) => {
  return (
    <StyledBackdrop open={isOpen}>
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
    </StyledBackdrop>
  );
};

export default CustomBackdrop;
