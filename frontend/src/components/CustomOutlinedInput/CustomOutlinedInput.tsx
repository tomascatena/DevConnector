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
  shouldShowCheckIcon?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  isMultiline?: boolean;
  isDisabled?:boolean
};

const CustomOutlinedInput: FC<Props> = ({
  inputState,
  setInputState,
  type,
  label,
  validation,
  customHelperText,
  shouldShowCheckIcon = true,
  isRequired = false,
  placeholder = '',
  isMultiline = false,
  isDisabled = false
}) => {
  const [isBlur, setIsBlur] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { isValid, validationErrors } = validation.exec();

  const isEmpty = inputState.value === '';
  const hasChangedAndIsValid = isBlur && isValid;
  const hasChangedAndIsNotValid = isBlur && !isValid;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isEmptyAndNotRequired = event.target.value === '' && !isRequired;

    setInputState({
      value: event.target.value,
      isValid: isEmptyAndNotRequired ? true : hasChangedAndIsValid,
    });
  };

  useEffect(() => {
    const isEmptyAndNotRequired = isEmpty && !isRequired;

    setInputState({
      ...inputState,
      isValid: isEmptyAndNotRequired ? true : hasChangedAndIsValid,
    });

    // eslint-disable-next-line
  }, [isBlur, isValid, inputState.value]);

  useEffect(() => {
    if (!isRequired) {
      setInputState({ ...inputState, isValid: true, });
    }

    if (!isEmpty) {
      setIsBlur(true);
    }

    // eslint-disable-next-line
  }, [inputState.value]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const CustomFormHelperText = () => {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (focused && validationErrors.length && !isEmpty) {
        return validationErrors[0];
      }

      if (isBlur && !validationErrors.length) {
        return 'Looks good!';
      } else if (isBlur && !isRequired && isEmpty) {
        return customHelperText || '';
      } else if (isBlur && validationErrors.length) {
        return validationErrors[0];
      } else {
        return customHelperText || '';
      }
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  const inputColor = hasChangedAndIsValid ? 'success' : undefined;
  const shouldShowError = isRequired
    ? hasChangedAndIsNotValid && isEmpty
    : hasChangedAndIsNotValid;

  let inputType = type;
  if (type === 'password') {
    inputType = showPassword ? 'text' : 'password';
  }

  const endAdornment = (
    <InputAdornment position='end'>
      {shouldShowCheckIcon && hasChangedAndIsValid && <CheckCircleOutlineIcon color='success' />}

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
        disabled={isDisabled}
      />

      <CustomFormHelperText />
    </FormControl>
  );
};

export default CustomOutlinedInput;
