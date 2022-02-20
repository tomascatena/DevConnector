import {
  FC,
  ChangeEvent,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import { ValidatorResult } from '@utils/validator';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useEffect } from 'react';

interface FormFieldState {
  value: string;
  isValid: boolean;
}

type Props = {
  inputState: FormFieldState;
  setInputState: Dispatch<SetStateAction<FormFieldState>>;
  type: string;
  label: string;
  validation: ValidatorResult;
  customHelperText?: string;
  showCheckIcon?: boolean;
};

const CustomOutlinedInput: FC<Props> = ({
  inputState,
  setInputState,
  type,
  label,
  validation,
  customHelperText,
  showCheckIcon = true,
}) => {
  const [isBlur, setIsBlur] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { isValid, validationErrors } = validation.exec();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState({
      value: event.target.value,
      isValid: isBlur && isValid,
    });
  };

  useEffect(() => {
    setInputState({
      ...inputState,
      isValid: isBlur && isValid,
    });

    // eslint-disable-next-line
  }, [isBlur, isValid, inputState.value]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const CustomFormHelperText = () => {
    let { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (focused && validationErrors.length) {
        return validationErrors[0];
      }

      if (isBlur && !validationErrors.length) {
        return 'Looks good!';
      } else if (isBlur && validationErrors.length) {
        return validationErrors[0];
      } else {
        return customHelperText || '';
      }
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  const inputColor = isBlur && isValid ? 'success' : undefined;
  const shouldShowError = isBlur && !isValid;

  let inputType = type;
  if (type === 'password') {
    inputType = showPassword ? 'text' : 'password';
  }

  const endAdornment = (
    <InputAdornment position='end'>
      {showCheckIcon && isBlur && isValid && (
        <CheckCircleOutlineIcon color='success' />
      )}

      {type === 'password' && (
        <IconButton
          aria-label='toggle password visibility'
          onClick={handleClickShowPassword}
          edge='end'
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      )}
    </InputAdornment>
  );

  return (
    <FormControl
      sx={{ width: '100%' }}
      color={inputColor}
      error={shouldShowError}
    >
      <InputLabel>{label}</InputLabel>

      <OutlinedInput
        error={shouldShowError}
        color={inputColor}
        type={inputType}
        value={inputState.value}
        onChange={handleChange}
        endAdornment={endAdornment}
        label={label}
        onBlur={() => setIsBlur(true)}
      />

      <CustomFormHelperText />
    </FormControl>
  );
};

export default CustomOutlinedInput;
