import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';

type Props = {
  isDialogOpen: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
}

const CustomDialog:FC<Props> = ({ isDialogOpen, setOpenDialog, children, title }) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={isDialogOpen}
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
