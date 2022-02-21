import React, {
  FC,
  Dispatch,
  SetStateAction,
  MouseEvent,
  Fragment,
} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { pages, settings } from './Header';
import MenuItem from '@mui/material/MenuItem';
import HeaderBrand from './HeaderBrand';
import MaterialUISwitch from '@components/MUISwitch/MUISwitch';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useActions } from '@hooks/index';

type Props = {
  isAuthenticated: boolean;
  isDarkTheme: boolean;
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
  handleCloseUserMenu: () => void;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
  handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void;
};

const MobileMenu: FC<Props> = ({
  isAuthenticated,
  isDarkTheme,
  anchorElNav,
  handleCloseNavMenu,
  handleCloseUserMenu,
  setIsDarkTheme,
  handleOpenNavMenu,
}) => {
  const { logout } = useActions();

  const handleLogout = () => {
    handleCloseUserMenu();

    logout();
  };

  return (
    <Fragment>
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
          {isAuthenticated ? (
            <div>
              {settings.map(({ title, route }) => (
                <Button
                  key={title}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={route}
                  sx={{ my: 1, color: 'white', display: 'block' }}
                >
                  {title}
                </Button>
              ))}

              <Button
                key='logout'
                onClick={handleLogout}
                component={Link}
                to='/'
                sx={{ my: 1, color: 'white', display: 'block' }}
              >
                Logout
              </Button>
            </div>
          ) : (
            pages.map(({ title, route }) => (
              <Button
                key={title}
                onClick={handleCloseUserMenu}
                component={Link}
                to={route}
                sx={{ my: 1, color: 'white', display: 'block' }}
              >
                {title}
              </Button>
            ))
          )}
        </Menu>
      </Box>

      <HeaderBrand isMobile />

      <MenuItem>
        <MaterialUISwitch
          sx={{ display: { xs: 'flex', md: 'none' } }}
          checked={isDarkTheme}
          onChange={() => setIsDarkTheme(!isDarkTheme)}
        />
      </MenuItem>
    </Fragment>
  );
};

export default MobileMenu;
