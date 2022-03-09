import React, { FC, useState, Dispatch, SetStateAction, useEffect } from 'react';
import {
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
} from '@mui/material';
import { ValidatorResult } from '@utils/validator';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { SelectChangeEvent } from '@mui/material/Select';

type FormFieldState = {
  value: string;
  isValid: boolean;
};

type Option = {
  value: string;
  label: string;
};

type Props = {
  inputState: FormFieldState;
  setInputState: Dispatch<SetStateAction<FormFieldState>>;
  label: string;
  validation: ValidatorResult;
  customHelperText?: string;
  shouldShowCheckIcon?: boolean;
  options: Option[];
  isDisabled?:boolean;
  isRequired?: boolean;
  defaultOption?: string;
  variant?: 'outlined' | 'filled' | 'standard'
};

const CustomSelect: FC<Props> = ({
  inputState,
  setInputState,
  label,
  validation,
  customHelperText,
  shouldShowCheckIcon = true,
  options,
  isDisabled = false,
  isRequired = false,
  defaultOption = 'Please choose one...',
  variant = 'outlined'
}) => {
  const [isClose, setIsClose] = useState(false);

  const { isValid, validationErrors } = validation.exec();

  const hasChangedAndIsValid = isClose && isValid;
  const hasChangedAndIsNotValid = isClose && !isValid;
  const isEmpty = inputState.value === '';

  const handleChange = (event: SelectChangeEvent) => {
    const isEmptyAndNotRequired = event.target.value === '' && !isRequired;

    setInputState({
      value: event.target.value,
      isValid: isEmptyAndNotRequired ? true : hasChangedAndIsValid,
    });
  };

  useEffect(() => {
    if (!isEmpty) {
      setIsClose(true);
    }

    // eslint-disable-next-line
  }, [inputState.value]);

  useEffect(() => {
    const isEmptyAndNotRequired = isEmpty && !isRequired;

    setInputState({
      ...inputState,
      isValid: isEmptyAndNotRequired ? true : hasChangedAndIsValid,
    });

    // eslint-disable-next-line
  }, [isClose, isValid, inputState.value]);

  const CustomFormHelperText = () => {
    let helperText;
    if (isClose && validationErrors.length) {
      helperText = validationErrors[0];
    } else {
      helperText = customHelperText || '';
    }

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  const inputColor = hasChangedAndIsValid && !isEmpty ? 'success' : undefined;
  const shouldShowError = isRequired
    ? hasChangedAndIsNotValid || isEmpty
    : isEmpty ? false : hasChangedAndIsNotValid;

  const endAdornment = (
    <InputAdornment
      position='end'
      sx={{ right: 35, position: 'absolute' }}
    >
      {
        shouldShowCheckIcon &&
        !isEmpty &&
        hasChangedAndIsValid &&
        <CheckCircleOutlineIcon color='success' />
      }
    </InputAdornment>
  );

  const DefaultOption = (
    <MenuItem value=''>
      <em>{defaultOption}</em>
    </MenuItem>
  );

  const OptionsList = (
    options.map(({ value, label }) => (
     <MenuItem
       key={value}
       value={value}
     >
       {label}
     </MenuItem>
    ))
  );

  return (
    <FormControl
      sx={{ width: '100%', position: 'relative' }}
      color={inputColor}
      error={shouldShowError}
    >
      <InputLabel>{isRequired ? `* ${label}` : label}</InputLabel>

      <Select
        error={shouldShowError}
        color={inputColor}
        value={inputState.value}
        onChange={handleChange}
        endAdornment={endAdornment}
        label={isRequired ? `* ${label}` : label}
        onClose={() => setIsClose(true)}
        disabled={isDisabled}
        variant={variant}
      >
        {DefaultOption}

        {OptionsList}
      </Select>

      <CustomFormHelperText />
    </FormControl>
  );
};

const areEqualProps = (prevProps: Props, nextProps: Props): boolean => {
  return prevProps.inputState === nextProps.inputState &&
    prevProps.isDisabled === nextProps.isDisabled;
};

export default React.memo(CustomSelect, areEqualProps);
