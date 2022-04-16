import { FC } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { ROUTES } from '@constants/routes';
import LinkButton from '@ui-elements/LinkButton/LinkButton';
import { DashboardActionsBox } from './DashboardActions.styled';

type Props = {
  isFetchingProfile: boolean;
};

const DashboardActions:FC<Props> = ({ isFetchingProfile }) => {
  return (
    <DashboardActionsBox>
      <LinkButton
        to={ROUTES.EDIT_PROFILE}
        startIcon={<PersonIcon />}
        isLoading={isFetchingProfile}
      >
        Edit Profile
      </LinkButton>

      <LinkButton
        to={ROUTES.ADD_EXPERIENCE}
        startIcon={<WorkIcon />}
      >
        Add Experience
      </LinkButton>

      <LinkButton
        to={ROUTES.ADD_EDUCATION}
        startIcon={<SchoolIcon />}
      >
        Add Education
      </LinkButton>
    </DashboardActionsBox>
  );
};

export default DashboardActions;
