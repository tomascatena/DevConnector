import { FC } from 'react';
import { TextWithIconBox } from './TextWithIcon.styled';
import { Typography } from '@mui/material';

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
