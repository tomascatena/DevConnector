import React, { FC, useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/system';

export const StyledAlert = styled(Alert)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(5),
  left: '50%',
  transform: 'translateX(-50%)',
  minWidth: '40%',
}));

type Props = {
  shouldShowAlert: Boolean;
  variant?: 'outlined' | 'filled';
  severity?: 'error' | 'warning' | 'info' | 'success';
  timeout?: number;
  message: string;
};

const CustomAlert: FC<Props> = ({
  shouldShowAlert,
  variant = 'filled',
  severity = 'error',
  timeout = 1000,
  message,
}) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (shouldShowAlert) {
      setShowError(true);

      const timeout = setTimeout(() => {
        setShowError(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [shouldShowAlert]);

  return (
    <Fade
      appear={showError}
      in={showError}
      timeout={timeout}
      unmountOnExit={true}
    >
      <StyledAlert
        severity={severity}
        variant={variant}
        onClose={() => setShowError(false)}
      >
        <AlertTitle>{message}</AlertTitle>
      </StyledAlert>
    </Fade>
  );
};

export default CustomAlert;
