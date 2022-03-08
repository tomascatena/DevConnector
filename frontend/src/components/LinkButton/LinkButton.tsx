import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
  to:string;
  startIcon?: JSX.Element;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  children: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  hasFinishedLoading?: boolean
}

const LinkButton:FC<Props> = ({
  to,
  startIcon,
  variant = 'contained',
  children,
  isDisabled = false,
  isLoading = false,
  loadingText,
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
