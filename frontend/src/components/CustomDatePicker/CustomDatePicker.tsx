import React, { FC, Dispatch, SetStateAction, } from 'react';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { formatISO, isValid } from 'date-fns';

interface FormFieldState {
  value: string | null;
  isValid: boolean;
}

type Props = {
  inputState: FormFieldState;
  setInputState: Dispatch<SetStateAction<FormFieldState>>;
  label:string;
  variant?: 'outlined' | 'standard' | 'filled';
  isDisabled?:boolean
}

const CustomDatePicker:FC<Props> = ({
  inputState,
  setInputState,
  label,
  variant = 'outlined',
  isDisabled = false
}) => {
  const handleChange = (newDate: Date | null) => {
    setInputState({
      value: newDate && formatISO(newDate),
      isValid: isValid(newDate)
    });
  };

  return (
    <DatePicker
      label={label}
      inputFormat="dd/MM/yyyy"
      value={inputState.value}
      onChange={handleChange}
      disabled={isDisabled}
      renderInput={(params) =>
        <TextField
          variant={variant}
          fullWidth
          {...params}
        />
      }
    />
  );
};

export default CustomDatePicker;
