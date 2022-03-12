import React, {
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
  Input,
  FilledInput
} from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ValidatorResult } from '@utils/validator';
import CheckIcon from '@mui/icons-material/Check';

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
  isDisabled?:boolean;
  variant?: 'standard' | 'outlined';
  successMessage?: string;
};

const CustomInput: FC<Props> = ({
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
  isDisabled = false,
  variant = 'filled',
  successMessage = null,
}) => {
  const [isBlur, setIsBlur] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { isValid, validationErrors } = validation.exec();

  const isEmpty = inputState.value === '';
  const hasChangedAndIsInputValid = isBlur && inputState.isValid;
  const hasChangedAndIsNotInputValid = isBlur && !inputState.isValid;
  const hasChangedAndPassValidation = isBlur && isValid;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isEmptyAndNotRequired = event.target.value === '' && !isRequired;

    setInputState({
      value: event.target.value,
      isValid: isEmptyAndNotRequired ? true : hasChangedAndPassValidation,
    });
  };

  useEffect(() => {
    const isEmptyAndNotRequired = isEmpty && !isRequired;

    setInputState({
      ...inputState,
      isValid: isEmptyAndNotRequired ? true : hasChangedAndPassValidation,
    });

    // eslint-disable-next-line
  }, [isBlur, isValid]);

  useEffect(() => {
    if (!isRequired) {
      setInputState({ ...inputState, isValid: true, });
    }

    if (!isEmpty) {
      setIsBlur(true);
    }

    // eslint-disable-next-line
  }, []);

  const CustomFormHelperText = () => {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (focused && validationErrors.length && !isEmpty) {
        return validationErrors[0];
      }

      if (isBlur && !validationErrors.length) {
        return successMessage || '';
      } else if (isBlur && !isRequired && isEmpty) {
        return customHelperText || '';
      } else if (isBlur && validationErrors.length) {
        return validationErrors[0];
      } else {
        return customHelperText || '';
      }
    }, [focused, isBlur, isEmpty, isRequired]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  type InputColor = 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined;
  const inputColor: InputColor = hasChangedAndIsInputValid && !isEmpty ? 'success' : undefined;

  const shouldShowError = isRequired
    ? hasChangedAndIsNotInputValid
    : isEmpty ? false : hasChangedAndIsNotInputValid;

  let inputType = type;
  if (type === 'password') {
    inputType = showPassword ? 'text' : 'password';
  }

  const endAdornment = (
    <InputAdornment position='end'>
      {
        shouldShowCheckIcon &&
        !isEmpty &&
        hasChangedAndIsInputValid &&
        <CheckIcon color='success' />
      }

      {type === 'password' && (
        <IconButton
          aria-label='toggle password visibility'
          onClick={() => setShowPassword(!showPassword)}
          edge='end'
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      )}
    </InputAdornment>
  );

  const labelText = isRequired ? `* ${label}` : label;
  const placeholderText = isRequired ? `* ${placeholder}` : placeholder;

  const props = {
    id: 'custom-input',
    required: isRequired,
    error: shouldShowError,
    ...((variant !== 'filled') && { color: inputColor }),
    type: inputType,
    placeholder: placeholderText,
    value: inputState.value,
    onChange: handleChange,
    endAdornment: endAdornment,
    label: labelText,
    onBlur: () => setIsBlur(true),
    multiline: isMultiline,
    minRows: 4,
    maxRows: 6,
    disabled: isDisabled,
  };

  let ElementType = FilledInput;
  if (variant === 'filled') {
    ElementType = FilledInput;
  } else if (variant === 'standard') {
    ElementType = Input;
  } else if (variant === 'outlined') {
    ElementType = OutlinedInput;
  }

  const InputElement = React.createElement(ElementType, props);

  return (
    <FormControl
      sx={{ width: '100%', mt: 1 }}
      color={inputColor}
      error={shouldShowError}
    >
      <InputLabel htmlFor='custom-input'>{labelText}</InputLabel>

      {InputElement}

      <CustomFormHelperText />
    </FormControl>
  );
};

const areEqualProps = (prevProps: Props, nextProps: Props): boolean => {
  return prevProps.inputState === nextProps.inputState &&
    prevProps.isDisabled === nextProps.isDisabled;
};

export default React.memo(CustomInput, areEqualProps);
