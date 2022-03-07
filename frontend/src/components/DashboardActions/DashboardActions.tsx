import React from 'react';
import { Button, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

type Props = {};

const DashboardActions = (props: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
      }}
    >
      <Button
        component={Link}
        to={ROUTES.EDIT_PROFILE}
        variant='contained'
        startIcon={<PersonIcon />}
      >
        Edit Profile
      </Button>

      <Button
        component={Link}
        to={ROUTES.ADD_EXPERIENCE}
        variant='contained'
        startIcon={<WorkIcon />}
      >
        Add Experience
      </Button>

      <Button
        component={Link}
        to={ROUTES.ADD_EDUCATION}
        variant='contained'
        startIcon={<SchoolIcon />}
      >
        Add Education
      </Button>
    </Box>
  );
};

export default DashboardActions;
