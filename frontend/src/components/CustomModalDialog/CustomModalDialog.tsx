import React, { FC, ReactNode, Dispatch, SetStateAction } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

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
  buttonColor = 'primary'
}) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <CustomDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isDialogOpen}
    >
      <DialogTitle
        sx={{ m: 0, p: 2 }}
      >
        {dialogTitle}

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
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
    </CustomDialog>
  );
};

export default CustomModalDialog;
