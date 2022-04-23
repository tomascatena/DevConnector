import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import {
  Dispatch,
  FC,
  Fragment,
  MouseEvent,
  SetStateAction,
} from 'react';
import { Link } from 'react-router-dom';
import { pages, settings } from './Header';
import { useActions } from '@hooks/index';
import HeaderBrand from './HeaderBrand';
import MaterialUISwitch from '@ui-elements/MUISwitch/MUISwitch';
import MenuIcon from '@mui/icons-material/Menu';

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
  const { logout, clearProfile } = useActions();

  const handleLogout = () => {
    handleCloseUserMenu();

    clearProfile();
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
