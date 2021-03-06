import { FilledInput, Input, OutlinedInput } from '@mui/material';
import { styled } from '@mui/system';

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

interface StyledFilledInputProps {
  isValidInput: boolean;
}

export const StyledFilledInput = styled(FilledInput, {
  shouldForwardProp: (props) => {
    return props !== 'isValidInput';
  },
})<StyledFilledInputProps>(({ theme, isValidInput }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',

  '& .MuiFilledInput-input': {
    width: 'auto',
    marginLeft: theme.spacing(1),
    color: isValidInput ? '' : 'red',
    padding: 0,
    paddingRight: theme.spacing(5),
    minHeight: '3.5rem'
  },
}));
