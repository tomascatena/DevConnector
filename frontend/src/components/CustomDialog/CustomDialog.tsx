import React, { FC, Dispatch, SetStateAction, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
}

const CustomDialog:FC<Props> = ({ open, setOpen, children, title }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll='body'
      PaperProps={{
        style: {
          width: '60rem'
        },
      }}
    >
    <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>

    <DialogContent>
      {children}
    </DialogContent>
  </Dialog>
  );
};

export default CustomDialog;
