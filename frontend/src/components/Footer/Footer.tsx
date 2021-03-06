import { FC } from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.grey[900]
      : theme.palette.grey.A400,
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const Footer: FC = () => {
  return (
    <FooterContainer>
      <Typography
        align='center'
        color='text.primary'
      >
        Copyright &copy; DevConnector
      </Typography>

      <Typography
        align='center'
        color='text.primary'
      >
        Built by <strong>Tomás Catena</strong>
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
