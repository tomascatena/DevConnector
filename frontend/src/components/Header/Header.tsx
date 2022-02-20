import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { ROUTES } from '@constants/constants';
import { useTypedSelector } from '@hooks/useTypedSelector';
import UserMenu from './UserMenu';
import GuestMenu from './GuestMenu';
import HeaderBrand from './HeaderBrand';
import MobileMenu from './MobileMenu';

export const pages = [
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

export const settings = [
  {
    title: 'Profile',
    route: ROUTES.PROFILE,
  },
  {
    title: 'Account',
    route: ROUTES.ACCOUNT,
  },
  {
    title: 'Dashboard',
    route: ROUTES.DASHBOARD,
  },
];

interface Props {
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
  isDarkTheme: boolean;
}

const ResponsiveAppBar: FC<Props> = ({ setIsDarkTheme, isDarkTheme }) => {
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <HeaderBrand />

          <MobileMenu
            isAuthenticated={isAuthenticated}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            setIsDarkTheme={setIsDarkTheme}
            isDarkTheme={isDarkTheme}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseUserMenu={handleCloseUserMenu}
          />

          {isAuthenticated ? (
            <UserMenu
              setIsDarkTheme={setIsDarkTheme}
              isDarkTheme={isDarkTheme}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
              anchorElUser={anchorElUser}
            />
          ) : (
            <GuestMenu
              setIsDarkTheme={setIsDarkTheme}
              isDarkTheme={isDarkTheme}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
