import { FC, useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/system';
import { useActions } from '../../../hooks/index';

export const StyledAlert = styled(Alert)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(5),
  left: '50%',
  transform: 'translateX(-50%)',
  minWidth: '20rem',
}));

type Props = {
  shouldShowAlert: Boolean;
  variant?: 'outlined' | 'filled';
  severity?: 'error' | 'warning' | 'info' | 'success';
  fadeTimeout?: number;
  timeout?: number;
  message: string;
};

const CustomAlert: FC<Props> = ({
  shouldShowAlert,
  variant = 'filled',
  severity = 'error',
  fadeTimeout = 1000,
  timeout = 5000,
  message,
}) => {
  const { resetAlert } = useActions();

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (shouldShowAlert) {
      setShowAlert(true);

      const timerId = setTimeout(() => {
        setShowAlert(false);

        setTimeout(() => resetAlert(), fadeTimeout); // wait for the fade to complete
      }, timeout);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [shouldShowAlert]);

  return (
    <Fade
      appear={showAlert}
      in={showAlert}
      timeout={fadeTimeout}
      unmountOnExit={true}
    >
      <StyledAlert
        severity={severity}
        variant={variant}
        onClose={() => setShowAlert(false)}
      >
        <AlertTitle>{message}</AlertTitle>
      </StyledAlert>
    </Fade>
  );
};

export default CustomAlert;
