import { FC, Dispatch, SetStateAction } from 'react';
import MaterialUISwitch from '@ui-elements/MUISwitch/MUISwitch';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { pages } from './Header';
import { GuestMenuBox } from './GuestMenu.styled';

interface Props {
  isDarkTheme: boolean;
  handleCloseNavMenu: () => void;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const GuestMenu: FC<Props> = ({
  isDarkTheme,
  handleCloseNavMenu,
  setIsDarkTheme,
}) => {
  return (
    <GuestMenuBox >
      <MaterialUISwitch
        sx={{ my: 2, display: { xs: 'none', md: 'flex' } }}
        checked={isDarkTheme}
        onChange={() => setIsDarkTheme(!isDarkTheme)}
      />

      {pages.map(({ title, route }) => (
        <Button
          key={title}
          onClick={handleCloseNavMenu}
          component={Link}
          to={route}
          sx={{
            my: 2,
            color: 'white',
            display: 'block'
          }}
        >
          {title}
        </Button>
      ))}
    </GuestMenuBox>
  );
};

export default GuestMenu;
