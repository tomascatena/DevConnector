import React, { FC, ChangeEvent, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { InputLabel, FormHelperText, FormControl, Chip, Typography, InputAdornment, Box } from '@mui/material';
import { StyledOutlinedInput, StyledInput } from './ChipsInput.styled';
import CheckIcon from '@mui/icons-material/Check';

interface FormFieldState {
  value: string[];
  isValid: boolean;
}

type Props = {
  inputState: FormFieldState;
  setInputState: Dispatch<SetStateAction<FormFieldState>>;
  label: string;
  customHelperText?: string;
  placeholder?: string;
  maxChips?: number;
  maxCharactersPerChip?: number;
  chipDelimiter?: string;
  isDisabled?:boolean;
  isRequired?:boolean;
  shouldShowCheckIcon?: boolean;
  variant?: 'standard' | 'outlined'
};

const ChipsInput: FC<Props> = ({
  inputState,
  setInputState,
  label,
  customHelperText,
  placeholder = '',
  maxChips = 10,
  maxCharactersPerChip = 25,
  chipDelimiter = ',',
  isDisabled = false,
  isRequired = false,
  shouldShowCheckIcon = true,
  variant = 'standard'
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState(inputState.value);

  const hasMoreChipsThanAllowed = chips.length >= maxChips;

  const isEmpty = inputState.value.length === 0;
  const isInitialInputValid = isRequired
    ? !isEmpty && inputValue.length <= maxCharactersPerChip
    : inputValue.length <= maxCharactersPerChip;

  const [isValidInput, setIsValidInput] = useState(isInitialInputValid);

  useEffect(() => {
    setInputState({ ...inputState, value: chips, });

    // eslint-disable-next-line
  }, [chips]);

  const handleDelete = (index: number) => {
    setChips((chips) => chips.filter((_, i) => i !== index));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const rawInput = event.target.value;
    const hasExcessiveLength = rawInput.length > maxCharactersPerChip;
    const isRepeated = chips.includes(rawInput);

    setIsValidInput(!hasExcessiveLength && !isRepeated);

    if (!hasExcessiveLength && !isRepeated && rawInput.trim().slice(-1) === chipDelimiter) {
      setChips([...chips, rawInput.trim().replace(chipDelimiter, '')]);
      setInputValue('');
    } else if (!hasExcessiveLength) {
      setInputValue(rawInput);
    }
  };

  const CustomFormHelperText = () => {
    const helperText = () => {
      if (isRequired && isEmpty) {
        return 'This field is required.';
      } else if (hasMoreChipsThanAllowed) {
        return `You can add up to ${maxChips}.`;
      } else if (chips.includes(inputValue)) {
        return `${inputValue} already exists.`;
      } else if (!isValidInput) {
        return `Maximum ${maxCharactersPerChip} characters.`;
      } else {
        return customHelperText || '';
      }
    };

    return <FormHelperText>{helperText()}</FormHelperText>;
  };

  const startAdornment = chips.map((item, index) => (
    <Box
      key={item}
      sx={{ paddingInline: 0.5, paddingBlock: 1.5 }}
    >
      <Chip
        onDelete={() => handleDelete(index)}
        label={<Typography>{item}</Typography>}
      />
    </Box>
  ));

  const placeholderText = (
    chips.length < maxChips
      ? isRequired ? `* ${placeholder}` : placeholder
      : `You can add up to ${maxChips}.`
  );

  const inputColor = isValidInput ? 'success' : undefined;
  const shouldShowError = isRequired
    ? !isValidInput || isEmpty
    : !isValidInput;

  const endAdornment = (
    <InputAdornment
      position='end'
      sx={{
        right: variant === 'outlined' ? 15 : 0,
        position: 'absolute',
        color: 'success.main'
      }}
    >
      {shouldShowCheckIcon && !shouldShowError && <CheckIcon />}
    </InputAdornment>
  );

  return (
    <FormControl
      sx={{ width: '100%', mt: 1 }}
      color={inputColor}
      error={shouldShowError}
    >
      <InputLabel htmlFor='custom-input'>{isRequired ? `* ${label}` : label}</InputLabel>

      {
        variant === 'outlined' &&
        <StyledOutlinedInput
          id='custom-input'
          error={shouldShowError}
          color={inputColor}
          readOnly={hasMoreChipsThanAllowed}
          value={inputValue}
          onChange={handleInputChange}
          startAdornment={startAdornment}
          label={isRequired ? `* ${label}` : label}
          isValidInput={isValidInput}
          placeholder={placeholderText}
          disabled={isDisabled}
          endAdornment={endAdornment}
        />
      }

      {
        variant === 'standard' &&
        <StyledInput
          id='custom-input'
          error={shouldShowError}
          color={inputColor}
          readOnly={hasMoreChipsThanAllowed}
          value={inputValue}
          onChange={handleInputChange}
          startAdornment={startAdornment}
          isValidInput={isValidInput}
          placeholder={placeholderText}
          disabled={isDisabled}
          endAdornment={endAdornment}
        />
      }

      <CustomFormHelperText />
    </FormControl>
  );
};

const areEqualProps = (prevProps: Props, nextProps: Props): boolean => {
  return prevProps.inputState === nextProps.inputState &&
    prevProps.isDisabled === nextProps.isDisabled;
};

export default React.memo(ChipsInput, areEqualProps);
