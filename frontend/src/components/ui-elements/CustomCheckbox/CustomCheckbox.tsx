import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

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
