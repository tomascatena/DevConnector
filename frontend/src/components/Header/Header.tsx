import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { ROUTES } from '@constants/routes';
import { useTypedSelector } from '@hooks/useTypedSelector';
import UserMenu from './UserMenu';
import GuestMenu from './GuestMenu';
import HeaderBrand from './HeaderBrand';
import MobileMenu from './MobileMenu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
    icon: <AccountBoxIcon />,
  },
  {
    title: 'Dashboard',
    route: ROUTES.DASHBOARD,
    icon: <DashboardIcon />,
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
