import { styled } from '@mui/system';
import { OutlinedInput } from '@mui/material';

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
  paddingTop: theme.spacing(1.5),
  alignItems: 'center',

  '& .MuiOutlinedInput-input': {
    width: 'auto',
    marginLeft: theme.spacing(1),
    color: isValidInput ? '' : 'red',
  },
}));
