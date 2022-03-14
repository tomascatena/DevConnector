import { FC, FormEvent } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { SxProps, Theme } from '@mui/material';

type Props = {
  isLoading: boolean;
  isDisabled: boolean;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  loadingText?: string;
  sx?: SxProps<Theme> | undefined;
  startIcon?: JSX.Element
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
};

const CustomButton: FC<Props> = ({
  isLoading,
  isDisabled,
  variant,
  type,
  text,
  loadingText,
  sx,
  startIcon,
  onSubmit
}) => {
  const loadingState = (
    <>
      <CircularProgress
        size={20}
        sx={{ marginRight: 1 }}
      />{' '}
      {loadingText || text}
    </>
  );

  return (
    <Button
      sx={sx}
      variant={variant}
      type={type}
      startIcon={startIcon}
      disabled={isDisabled || isLoading}
      {...(type === 'submit' ? onSubmit : undefined)}
    >
      {isLoading ? loadingState : <>{text}</>}
    </Button>
  );
};

export default CustomButton;
