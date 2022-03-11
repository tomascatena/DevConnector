import { styled } from '@mui/system';
import { OutlinedInput, Input } from '@mui/material';

interface StyledOutlinedInputProps {
  isValidInput: boolean;
}

export const StyledOutlinedInput = styled(OutlinedInput, {
  shouldForwardProp: (props) => {
    return props !== 'isValidInput';
  },
})<StyledOutlinedInputProps>(({ theme, isValidInput }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',

  '& .MuiOutlinedInput-input': {
    width: 'auto',
    marginLeft: theme.spacing(1),
    color: isValidInput ? '' : 'red',
    paddingRight: theme.spacing(5)
  },
}));

interface StyledInputProps {
  isValidInput: boolean;
}

export const StyledInput = styled(Input, {
  shouldForwardProp: (props) => {
    return props !== 'isValidInput';
  },
})<StyledInputProps>(({ theme, isValidInput }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',

  '& .MuiInput-input': {
    width: 'auto',
    marginLeft: theme.spacing(1),
    color: isValidInput ? '' : 'red',
    paddingRight: theme.spacing(5),
  },
}));
