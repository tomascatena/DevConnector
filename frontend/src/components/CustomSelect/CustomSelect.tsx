import { FC, useState, Dispatch, SetStateAction } from 'react';
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
import { useEffect } from 'react';
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
  showCheckIcon?: boolean;
  options: Option[];
};

const CustomSelect: FC<Props> = ({
  inputState,
  setInputState,
  label,
  validation,
  customHelperText,
  showCheckIcon = true,
  options,
}) => {
  const [isClose, setIsClose] = useState(false);

  const { isValid, validationErrors } = validation.exec();

  const handleChange = (event: SelectChangeEvent) => {
    setInputState({
      value: event.target.value,
      isValid: isClose && isValid,
    });
  };

  useEffect(() => {
    setInputState({
      ...inputState,
      isValid: isClose && isValid,
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

  const inputColor = isClose && isValid ? 'success' : undefined;
  const shouldShowError = isClose && !isValid;

  const endAdornment = (
    <InputAdornment position='end' sx={{ right: 35, position: 'absolute' }}>
      {showCheckIcon && isClose && isValid && (
        <CheckCircleOutlineIcon color='success' />
      )}
    </InputAdornment>
  );

  return (
    <FormControl
      sx={{ width: '100%', position: 'relative' }}
      color={inputColor}
      error={shouldShowError}
    >
      <InputLabel>{label}</InputLabel>

      <Select
        error={shouldShowError}
        color={inputColor}
        value={inputState.value}
        onChange={handleChange}
        endAdornment={endAdornment}
        label={label}
        onClose={() => setIsClose(true)}
      >
        <MenuItem value=''>
          <em>Please choose one...</em>
        </MenuItem>

        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>

      <CustomFormHelperText />
    </FormControl>
  );
};

export default CustomSelect;
