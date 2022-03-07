import {
  FC,
  ChangeEvent,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import {
  OutlinedInput,
  InputLabel,
  IconButton,
  InputAdornment,
  FormHelperText,
  FormControl,
} from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ValidatorResult } from '@utils/validator';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
  isRequired?: boolean;
  placeholder?: string;
  isMultiline?: boolean;
};

const CustomOutlinedInput: FC<Props> = ({
  inputState,
  setInputState,
  type,
  label,
  validation,
  customHelperText,
  showCheckIcon = true,
  isRequired = true,
  placeholder = '',
  isMultiline = false,
}) => {
  const [isBlur, setIsBlur] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { isValid, validationErrors } = validation.exec();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState({
      value: event.target.value,
      isValid: event.target.value === '' && !isRequired ? true : isBlur && isValid,
    });
  };

  useEffect(() => {
    setInputState({
      ...inputState,
      isValid: inputState.value === '' && !isRequired ? true : isBlur && isValid,
    });

    // eslint-disable-next-line
  }, [isBlur, isValid, inputState.value]);

  useEffect(() => {
    if (!isRequired) {
      setInputState({
        ...inputState,
        isValid: true,
      });
    }

    // eslint-disable-next-line
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const CustomFormHelperText = () => {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (focused && validationErrors.length && inputState.value !== '') {
        return validationErrors[0];
      }

      if (isBlur && !validationErrors.length) {
        return 'Looks good!';
      } else if (isBlur && !isRequired && inputState.value === '') {
        return customHelperText || '';
      } else if (isBlur && validationErrors.length) {
        return validationErrors[0];
      } else {
        return customHelperText || '';
      }
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  const inputColor = isBlur && isValid ? 'success' : undefined;
  const shouldShowError = isRequired
    ? isBlur && !isValid
    : isBlur && !isValid && inputState.value !== '';

  let inputType = type;
  if (type === 'password') {
    inputType = showPassword ? 'text' : 'password';
  }

  const endAdornment = (
    <InputAdornment position='end'>
      {showCheckIcon && isBlur && isValid && <CheckCircleOutlineIcon color='success' />}

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
      <InputLabel>{isRequired ? `* ${label}` : label}</InputLabel>

      <OutlinedInput
        required={isRequired}
        error={shouldShowError}
        color={inputColor}
        type={inputType}
        placeholder={isRequired ? `* ${placeholder}` : placeholder}
        value={inputState.value}
        onChange={handleChange}
        endAdornment={endAdornment}
        label={isRequired ? `* ${label}` : label}
        onBlur={() => setIsBlur(true)}
        multiline={isMultiline}
        minRows={2}
        maxRows={4}
      />

      <CustomFormHelperText />
    </FormControl>
  );
};

export default CustomOutlinedInput;
