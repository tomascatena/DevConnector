import { AppBar, Container, Toolbar } from '@mui/material';
import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react';
import { IUser, Nullable } from '../../typings/types';
import { ROUTES } from '@constants/routes';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import GuestMenu from './GuestMenu';
import HeaderBrand from './HeaderBrand';
import MobileMenu from './MobileMenu';
import UserMenu from './UserMenu';

export const pages = [
  {
    title: 'Developers',
    route: ROUTES.PROFILES,
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
  {
    title: 'Developers',
    route: ROUTES.PROFILES,
    icon: <GroupIcon />,
  },
];

interface Props {
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
  isDarkTheme: boolean;
  isAuthenticated: boolean,
  user: Nullable<Partial<IUser>>
}

const ResponsiveAppBar: FC<Props> = ({ setIsDarkTheme, isDarkTheme, isAuthenticated, user }) => {
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
              user={user}
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
