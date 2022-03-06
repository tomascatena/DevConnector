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
  OutlinedInput,
  InputLabel,
  FormHelperText,
  FormControl,
  Chip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  paddingTop: theme.spacing(1.5),
  alignItems: 'center',

  '& .MuiOutlinedInput-input': {
    width: 'auto',
    marginLeft: theme.spacing(1),
  },
}));

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
  maxCharactersInChip?: number;
};

const ChipsInput: FC<Props> = ({
  inputState,
  setInputState,
  label,
  customHelperText,
  placeholder = '',
  maxChips = 10,
  maxCharactersInChip = 25,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState(inputState.value);
  const [isValidInput, setIsValidInput] = useState(
    inputValue.length <= maxCharactersInChip
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

    setIsValidInput(rawInput.length <= maxCharactersInChip);

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
        return `Maximum ${maxCharactersInChip} characters.`;
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
        sx={{ color: isValidInput ? '' : 'red' }}
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
