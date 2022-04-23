import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { SxProps } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import React, { FC, ReactNode } from 'react';

type Props = {
  to:string;
  startIcon?: JSX.Element;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  children: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  hasFinishedLoading?: boolean
  sx?: SxProps
}

const LinkButton:FC<Props> = ({
  to,
  startIcon,
  variant = 'contained',
  children,
  isDisabled = false,
  isLoading = false,
  loadingText,
  sx
}) => {
  const loadingState = (
    <>
      <CircularProgress
        size={20}
        sx={{ marginRight: 1 }}
      />

      {loadingText || children}
    </>
  );

  return (
    <Button
      to={to}
      sx={sx}
      component={Link}
      variant={variant}
      startIcon={startIcon}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? loadingState : <>{children}</>}
    </Button>
  );
};

export default LinkButton;
