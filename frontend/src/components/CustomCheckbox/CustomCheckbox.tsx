import React, { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

type Props = {
  inputState: boolean;
  setInputState: Dispatch<SetStateAction<boolean>>;
  label: string;
}

const CustomCheckbox:FC<Props> = ({ inputState, setInputState, label }) => {
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
          />
        }
      />
  );
};

export default CustomCheckbox;
