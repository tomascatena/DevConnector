import React, { FC, Dispatch, SetStateAction, useState, useEffect, ChangeEvent } from 'react';
import { DatePicker } from '@mui/lab';
import { TextField, InputAdornment, Box } from '@mui/material';
import { formatISO, isValid, subYears, parse, isBefore, isAfter } from 'date-fns';
import CheckIcon from '@mui/icons-material/Check';

interface FormFieldState {
  value: string | null;
  isValid: boolean;
}

type Props = {
  inputState: FormFieldState;
  setInputState: Dispatch<SetStateAction<FormFieldState>>;
  label:string;
  variant?: 'outlined' | 'standard' | 'filled';
  isDisabled?:boolean;
  isRequired?: boolean;
  shouldShowCheckIcon?: boolean
}

const CustomDatePicker:FC<Props> = ({
  inputState,
  setInputState,
  label,
  variant = 'filled',
  isDisabled = false,
  isRequired = false,
  shouldShowCheckIcon = true
}) => {
  const TODAY_DATE = Date.now();
  const MIN_DATE = subYears(TODAY_DATE, 100);

  const INVALID_DATE_MESSAGE = 'Invalid Date. Please use this format "dd/mm/yyyy".';
  const INVALID_DATE_MESSAGE_FUTURE = 'Cannot be a date in the future.';
  const INVALID_DATE_MESSAGE_PAST = 'Minimum date can be 100 years ago.';
  const REQUIRED_MESSAGE = 'This field is required.';

  useEffect(() => {
    if (!isRequired) {
      setInputState({ ...inputState, isValid: true });
    }
  }, []);

  const [hasError, setHasError] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleDateChange = (newDate: Date | null) => {
    const isValidDate = Boolean(newDate) && isValid(newDate);
    setHasError(!isValidDate);

    if (isValidDate) {
      setHelperText('');
    }

    setInputState({
      value: newDate && isValid(newDate) ? formatISO(newDate) : null,
      isValid: isValidDate
    });
  };

  const handleDateError = (
    reason:'shouldDisableDate' | 'disablePast' | 'disableFuture' | 'minDate' | 'maxDate' | 'invalidDate' | null,
  ) => {
    let text = INVALID_DATE_MESSAGE;
    if (reason === 'disableFuture') {
      text = INVALID_DATE_MESSAGE_FUTURE;
    } else if (reason === 'minDate') {
      text = INVALID_DATE_MESSAGE_PAST;
    }

    const isValidDate = reason === null;

    setHelperText(reason ? text : '');
    setHasError(!isValidDate);

    setInputState({
      ...inputState,
      isValid: isValidDate,
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const parsedDate = parse(event.target.value, 'dd/MM/yyyy', new Date());
    const isValidDate = isValid(parsedDate) && !isBefore(parsedDate, MIN_DATE) && !isAfter(parsedDate, TODAY_DATE);

    let text = INVALID_DATE_MESSAGE;
    if (isBefore(parsedDate, MIN_DATE)) {
      text = INVALID_DATE_MESSAGE_PAST;
    } else if (isAfter(parsedDate, TODAY_DATE)) {
      text = INVALID_DATE_MESSAGE_FUTURE;
    }

    setHasError(!isValidDate);
    setHelperText(!isValidDate ? text : '');

    setInputState({
      isValid: isValidDate,
      value: isValid(parsedDate) ? formatISO(parsedDate) : null,
    });
  };

  useEffect(() => {
    if (isRequired && hasChanged && !inputState.value) {
      setHasError(true);
      setHelperText(REQUIRED_MESSAGE);
    }
  }, [hasChanged, inputState.value]);

  const showCheckIcon = shouldShowCheckIcon && inputState.value && inputState.isValid;

  const endAdornment = (
    <InputAdornment
      position='start'
      sx={{ position: 'absolute', top: 30, right: 40 }}
    >
      {showCheckIcon && <CheckIcon color='success' />}
    </InputAdornment>
  );

  return (
    <DatePicker
      label={isRequired ? `* ${label}` : label}
      onError={handleDateError}
      inputFormat="dd/MM/yyyy"
      value={inputState.value}
      onChange={handleDateChange}
      disabled={isDisabled}
      disableFuture
      minDate={MIN_DATE}
      renderInput={(params) =>
        <Box sx={{ position: 'relative' }}>
          <TextField
            variant={variant}
            fullWidth
            disabled={isDisabled}
            onBlur={() => setHasChanged(true)}
            onChange={handleInputChange}
            {...params}
            error={isRequired && hasError}
            helperText={helperText}
          />

          {endAdornment}
        </Box>
      }
    />
  );
};

const areEqualProps = (prevProps: Props, nextProps: Props): boolean => {
  return prevProps.inputState === nextProps.inputState &&
    prevProps.isDisabled === nextProps.isDisabled;
};

export default React.memo(CustomDatePicker, areEqualProps);
