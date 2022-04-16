import { FC, ReactNode } from 'react';
import { PrependIconBox, IconBox } from './PrependIcon.styled';

type Props = {
  icon: JSX.Element;
  children: ReactNode;
  iconColor?: string;
};

const PrependIcon: FC<Props> = ({ icon, children, iconColor = 'text.main' }) => {
  return (
    <PrependIconBox iconColor={iconColor} >
      <IconBox>
        {icon}
      </IconBox>

      {children}
    </PrependIconBox>
  );
};

export default PrependIcon;
