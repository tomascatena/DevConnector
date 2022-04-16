import { FC } from 'react';
import { Typography } from '@mui/material';
import { TextWithIconBox } from './TextWithIcon.styled';

type Props = {
  icon: JSX.Element;
  text: string;
};

const TextWithIcon: FC<Props> = ({ icon, text }) => {
  return (
    <TextWithIconBox>
      {icon}

      <Typography color='text.primary'>{text}</Typography>
    </TextWithIconBox>
  );
};

export default TextWithIcon;
