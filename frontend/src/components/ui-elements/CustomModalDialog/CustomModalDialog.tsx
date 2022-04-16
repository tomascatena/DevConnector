import React, { FC, ReactNode, Dispatch, SetStateAction } from 'react';
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledDialog, StyledIconButton } from './CustomModalDialog.styled';

export interface Props {
  children: ReactNode;
  dialogTitle: string;
  buttonText:string;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  isDialogOpen: boolean;
  onButtonClick: () => void
  buttonColor?: 'error' | 'inherit' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | undefined
}

const CustomModalDialog:FC<Props> = ({
  children,
  dialogTitle,
  buttonText,
  setOpenDialog,
  isDialogOpen,
  onButtonClick,
  buttonColor = 'inherit'
}) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <StyledDialog
      onClose={handleClose}
      open={isDialogOpen}
    >
      <DialogTitle
        sx={{ m: 0, p: 2 }}
      >
        {dialogTitle}

        <StyledIconButton
          aria-label="close"
          onClick={handleClose}
        >
          <CloseIcon />
        </StyledIconButton>
      </DialogTitle>

      <DialogContent dividers>
        {children}
      </DialogContent>

      <DialogActions>
        <Button
          color={buttonColor}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default CustomModalDialog;
