import { FC, KeyboardEvent, useState, Dispatch, SetStateAction } from 'react';
import {
  OutlinedInput,
  InputLabel,
  FormHelperText,
  FormControl,
  Chip,
} from '@mui/material';

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
};

const ChipsInput: FC<Props> = ({
  inputState,
  setInputState,
  label,
  customHelperText,
  placeholder = '',
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState(inputState.value);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter') {
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

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel>{label}</InputLabel>

      <OutlinedInput
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
        startAdornment={chips.map((item, index) => (
          <Chip
            onDelete={() => handleDelete(index)}
            sx={{ marginRight: 1 }}
            key={item}
            label={item}
          />
        ))}
        label={label}
      />

      <FormHelperText>{customHelperText || ''}</FormHelperText>
    </FormControl>
  );
};

export default ChipsInput;
