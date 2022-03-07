import {
  FC,
  KeyboardEvent,
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import {
  InputLabel,
  FormHelperText,
  FormControl,
  Chip,
  Typography,
} from '@mui/material';
import { StyledOutlinedInput } from './ChipsInput.styled';

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
};

const ChipsInput: FC<Props> = ({
  inputState,
  setInputState,
  label,
  customHelperText,
  placeholder = '',
  maxChips = 10,
  maxCharactersPerChip = 25,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState(inputState.value);
  const [isValidInput, setIsValidInput] = useState(
    inputValue.length <= maxCharactersPerChip
  );

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter' && inputValue !== '') {
      setChips([...chips, inputValue]);

      setInputValue('');

      setInputState({
        ...inputState,
        value: chips,
      });
    }
  };

  const handleDelete = (index: number) => {
    setChips((chips) => chips.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rawInput = event.target.value.trim();

    setIsValidInput(rawInput.length <= maxCharactersPerChip);

    if (isValidInput) {
      setInputValue(rawInput);
    }
  };

  useEffect(() => {
    setInputState({
      ...inputState,
      isValid: true,
    });

    // eslint-disable-next-line
  }, []);

  const CustomFormHelperText = () => {
    const helperText = () => {
      if (chips.length >= maxChips) {
        return `You can add up to ${maxChips}.`;
      } else if (!isValidInput) {
        return `Maximum ${maxCharactersPerChip} characters.`;
      } else {
        return customHelperText || '';
      }
    };

    return <FormHelperText>{helperText()}</FormHelperText>;
  };

  const startAdornment = chips.map((item, index) => (
    <Chip
      onDelete={() => handleDelete(index)}
      sx={{ m: 0.5 }}
      key={item}
      label={<Typography>{item}</Typography>}
    />
  ));

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel>{label}</InputLabel>

      <StyledOutlinedInput
        readOnly={chips.length >= maxChips}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        startAdornment={startAdornment}
        label={label}
        isValidInput={isValidInput}
        placeholder={
          chips.length < maxChips
            ? placeholder
            : `You can add up to ${maxChips}.`
        }
      />

      <CustomFormHelperText />
    </FormControl>
  );
};

export default ChipsInput;
