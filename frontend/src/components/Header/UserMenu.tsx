import { FC, Dispatch, SetStateAction, MouseEvent } from 'react';
import MaterialUISwitch from '@components/MUISwitch/MUISwitch';
import {
  Avatar,
  Tooltip,
  Menu,
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
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
  const { logout, clearProfile } = useActions();
  const { user } = useTypedSelector((state) => state.auth);

  const handleLogout = () => {
    handleCloseUserMenu();

    clearProfile();
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
            }}
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </StyledBox>
  );
};

export default UserMenu;
