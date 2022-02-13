import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.grey[900],
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const Footer: FC = () => {
  return (
    <FooterContainer>
      <Typography align='center' color='text.primary'>
        Copyright &copy; DevConnector
      </Typography>

      <Typography align='center' color='text.primary'>
        Built by <strong>Tomás Catena</strong>
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
