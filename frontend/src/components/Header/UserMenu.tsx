import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  Tooltip,
  Typography,
} from '@mui/material';
import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import { IUser, Nullable } from '../../typings/types';
import { Link } from 'react-router-dom';
import { UserMenuBox } from './UserMenu.styled';
import { settings } from './Header';
import { useActions } from '@hooks/index';
import LogoutIcon from '@mui/icons-material/Logout';
import MaterialUISwitch from '@ui-elements/MUISwitch/MUISwitch';

interface Props {
  isDarkTheme: boolean;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
  user: Nullable<Partial<IUser>>
}

const UserMenu: FC<Props> = ({
  isDarkTheme,
  anchorElUser,
  handleCloseUserMenu,
  setIsDarkTheme,
  handleOpenUserMenu,
  user
}) => {
  const { logout, clearProfile } = useActions();

  const handleLogout = () => {
    handleCloseUserMenu();

    clearProfile();
    logout();
  };

  return (
    <UserMenuBox>
      <MaterialUISwitch
        sx={{ display: { xs: 'none', md: 'flex' } }}
        checked={isDarkTheme}
        onChange={() => setIsDarkTheme(!isDarkTheme)}
      />

      <Typography>Welcome {user?.firstName}</Typography>

      <Tooltip title={<Typography color='inherit'>Open Settings</Typography>}>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}
        >
          <Avatar
            alt={`${user?.firstName} ${user?.lastName}`}
            src={user?.avatar}
          />
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
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: 1 }}>
          {settings.map(({ title, route, icon = null }) => (
            <Button
              key={title}
              onClick={handleCloseUserMenu}
              component={Link}
              to={route}
              startIcon={icon}
              sx={{
                marginBottom: 0.5,
                width: 175,
                justifyContent: 'flex-start',
                color: 'text.primary'
              }}
            >
              {title}
            </Button>
          ))}

          <Button
            key='logout'
            onClick={handleLogout}
            component={Link}
            to='/'
            startIcon={<LogoutIcon />}
            sx={{
              marginTop: 1,
              width: 175,
              justifyContent: 'flex-start',
              color: 'text.primary'
            }}
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </UserMenuBox>
  );
};

export default UserMenu;
