import React, { FC, Dispatch, SetStateAction, MouseEvent } from 'react';
import MaterialUISwitch from '@components/MUISwitch/MUISwitch';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { settings } from './Header';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { useActions, useTypedSelector } from '@hooks/index';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  alignItems: 'center',
  justifyContent: 'end',
  flex: 1,
  gap: theme.spacing(3),
}));

interface Props {
  isDarkTheme: boolean;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
}

const UserMenu: FC<Props> = ({
  isDarkTheme,
  anchorElUser,
  handleCloseUserMenu,
  setIsDarkTheme,
  handleOpenUserMenu,
}) => {
  const { logout } = useActions();
  const { user } = useTypedSelector((state) => state.auth);

  const handleLogout = () => {
    handleCloseUserMenu();

    logout();
  };

  return (
    <StyledBox>
      <MaterialUISwitch
        sx={{ display: { xs: 'none', md: 'flex' } }}
        checked={isDarkTheme}
        onChange={() => setIsDarkTheme(!isDarkTheme)}
      />

      <Typography>Welcome {user?.firstName}</Typography>

      <Tooltip title={<Typography color='inherit'>Open Settings</Typography>}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
        <>
          {settings.map(({ title, route }) => (
            <Button
              key={title}
              onClick={handleCloseUserMenu}
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
        </>
      </Menu>
    </StyledBox>
  );
};

export default UserMenu;
