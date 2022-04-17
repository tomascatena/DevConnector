import React, { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

type Props = {
  inputState: boolean;
  setInputState: Dispatch<SetStateAction<boolean>>;
  label: string;
  isDisabled?: boolean
}

const CustomCheckbox:FC<Props> = ({ inputState, setInputState, label, isDisabled }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.checked);
  };

  return (
      <FormControlLabel
        sx={{ width: 'fit-content' }}
        label={
          <Typography color='text.primary'>
            {label}
          </Typography>
        }
        control={
          <Checkbox
            onChange={handleChange}
            checked={inputState}
            disabled={isDisabled}
          />
        }
      />
  );
};

export default CustomCheckbox;
