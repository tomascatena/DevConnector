import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

type Props = {
  icon: JSX.Element;
  children: ReactNode;
  iconColor?: string;
};

const PrependIcon: FC<Props> = ({
  icon,
  children,
  iconColor = 'text.main',
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        color: iconColor,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#eee',
          display: 'flex',
          padding: 0.5,
          borderRadius: 1,
        }}
      >
        {icon}
      </Box>

      {children}
    </Box>
  );
};

export default PrependIcon;
