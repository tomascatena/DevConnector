import { FC } from 'react';
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography';

type Props = {
  isMobile?: boolean;
};

const HeaderBrand: FC<Props> = ({ isMobile = false }) => {
  const navigate = useNavigate();

  const stylesDesktop = {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    cursor: 'pointer',
  };

  const stylesMobile = {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
    cursor: 'pointer',
  };

  return (
    <Typography
      variant='h6'
      noWrap
      component='div'
      sx={isMobile ? stylesMobile : stylesDesktop}
      onClick={() => navigate('/')}
    >
      DevConnector
    </Typography>
  );
};

export default HeaderBrand;
