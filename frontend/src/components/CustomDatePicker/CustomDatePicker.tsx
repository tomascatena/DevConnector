import React, { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { formatISO, isValid, subYears, parse, isBefore, isFuture } from 'date-fns';

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
  isRequired?: boolean
}

const CustomDatePicker:FC<Props> = ({
  inputState,
  setInputState,
  label,
  variant = 'filled',
  isDisabled = false,
  isRequired = false,
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
  }, [isRequired]);

  const [hasError, setHasError] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleDateChange = (newDate: Date | null) => {
    const isValidDate = Boolean(newDate) && isValid(newDate);

    setHasError(!isValidDate);

    setInputState({
      value: isValidDate ? formatISO(newDate!) : null,
      isValid: isValidDate
    });
  };

  const handleDateError = (
    reason:'shouldDisableDate' | 'disablePast' | 'disableFuture' | 'minDate' | 'maxDate' | 'invalidDate' | null
  ) => {
    let text = INVALID_DATE_MESSAGE;
    if (reason === 'disableFuture') {
      text = INVALID_DATE_MESSAGE_FUTURE;
    } else if (reason === 'minDate') {
      text = INVALID_DATE_MESSAGE_PAST;
    }

    setHelperText(reason ? text : '');
    setHasError(Boolean(reason));
  };

  const handleInputChange = (event:any) => {
    const parsedDate = parse(event.target.value, 'dd/MM/yyyy', new Date());
    const isValidDate = isValid(parsedDate) && !isBefore(parsedDate, MIN_DATE) && !isFuture(parsedDate);

    let text = INVALID_DATE_MESSAGE;
    if (isBefore(parsedDate, MIN_DATE)) {
      text = INVALID_DATE_MESSAGE_PAST;
    } else if (isFuture(parsedDate)) {
      text = INVALID_DATE_MESSAGE_FUTURE;
    }

    setHasError(!isValidDate);
    setHelperText(!isValidDate ? text : '');

    setInputState({
      isValid: isValidDate,
      value: isValidDate ? formatISO(parsedDate) : null,
    });
  };

  useEffect(() => {
    if (isRequired && hasChanged && !inputState.value) {
      setHasError(true);
      setHelperText(REQUIRED_MESSAGE);
    }
  }, [hasChanged]);

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
        <TextField
          variant={variant}
          fullWidth
          disabled={isDisabled}
          onBlur={() => setHasChanged(true)}
          onChange={handleInputChange}
          {...params}
          error={isRequired && hasError}
          helperText={hasError && helperText}
        />
      }
    />
  );
};

const areEqualProps = (prevProps: Props, nextProps: Props): boolean => {
  return prevProps.inputState === nextProps.inputState &&
    prevProps.isDisabled === nextProps.isDisabled;
};

export default React.memo(CustomDatePicker, areEqualProps);
