import { FC } from 'react';
import { Typography, Box } from '@mui/material';

type Props = {
  icon: JSX.Element;
  text: string;
};

const TextWithIcon: FC<Props> = ({ icon, text }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {icon}

      <Typography color='text.primary'>{text}</Typography>
    </Box>
  );
};

export default TextWithIcon;
