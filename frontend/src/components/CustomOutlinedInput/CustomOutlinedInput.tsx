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
import { ValidatorResult } from '../../utils/validator';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useEffect } from 'react';
import { Nullable } from '../../typings/types';

interface FormState {
  value: string;
  isValid: boolean;
}

type Props = {
  inputState: FormState;
  setInputState: Dispatch<SetStateAction<FormState>>;
  type: string;
  label: string;
  validation: ValidatorResult;
  customHelperText?: string;
  serverValidationError?: Nullable<string>;
};

const CustomOutlinedInput: FC<Props> = ({
  inputState,
  setInputState,
  type,
  label,
  validation,
  customHelperText,
  serverValidationError = null,
}) => {
  const [isBlur, setIsBlur] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasServerValidationError, setHasServerValidationError] = useState(
    Boolean(serverValidationError)
  );

  const { isValid, validationErrors } = validation.exec();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState({
      value: event.target.value,
      isValid: isBlur && isValid,
    });

    setHasServerValidationError(false);
  };

  useEffect(() => {
    setInputState({
      ...inputState,
      isValid: isBlur && isValid,
    });

    // eslint-disable-next-line
  }, [isBlur, isValid, inputState.value]);

  useEffect(() => {
    setHasServerValidationError(Boolean(serverValidationError));

    // eslint-disable-next-line
  }, [serverValidationError]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const CustomFormHelperText = () => {
    let { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (hasServerValidationError) {
        return serverValidationError;
      }

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
  const shouldShowError = (isBlur && !isValid) || hasServerValidationError;

  let inputType = type;
  if (type === 'password') {
    inputType = showPassword ? 'text' : 'password';
  }

  const endAdornment = (
    <InputAdornment position='end'>
      {isBlur && isValid && !hasServerValidationError && (
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
