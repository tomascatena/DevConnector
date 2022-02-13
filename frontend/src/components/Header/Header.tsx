import React, { FC, useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';

const pages = [
  {
    title: 'Developers',
    route: ROUTES.DEVELOPERS,
  },
  {
    title: 'Register',
    route: ROUTES.REGISTER,
  },
  {
    title: 'Login',
    route: ROUTES.LOGIN,
  },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar: FC = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Title = ({ isMobile = false } = {}) => {
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

  const TitleDesktop = Title();
  const TitleMobile = Title({ isMobile: true });

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {TitleDesktop}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ title, route }) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => navigate(route)}
                    textAlign='center'
                  >
                    {title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {TitleMobile}

          {true ? (
            <Box
              sx={{
                justifyContent: 'flex-end',
                flexGrow: 1,
                gap: '1rem',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map(({ title, route }) => (
                <Button
                  key={title}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={route}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {title}
                </Button>
              ))}
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
