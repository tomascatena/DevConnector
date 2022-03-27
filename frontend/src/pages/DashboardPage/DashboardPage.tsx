import React, { useEffect, FC, useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useTypedSelector, useActions, useAppDispatch } from '@hooks/index';
import { getCurrentUserProfile, deleteAccount } from '@store/features/profile/profile.thunk';
import { styled } from '@mui/system';
import { ROUTES } from '@constants/routes';
import TextWithIcon from '@ui-elements/TextWithIcon/TextWithIcon';
import PersonIcon from '@mui/icons-material/Person';
import DashboardActions from '@components/DashboardActions/DashboardActions';
import LinkButton from '@ui-elements/LinkButton/LinkButton';
import CustomBackdrop from '@ui-elements/CustomBackdrop/CustomBackdrop';
import ExperienceTimeline from '@components/ExperienceTimeline/ExperienceTimeline';
import EducationList from '@components/EducationList/EducationList';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import CustomModalDialog from '@ui-elements/CustomModalDialog/CustomModalDialog';
import WarningIcon from '@mui/icons-material/Warning';
import { useNavigate } from 'react-router';

export const DashboardContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(7),
}));

type Props = {};

const DashboardPage: FC<Props> = () => {
  const { setAlert } = useActions();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, profile, isFetchingProfile } = useTypedSelector((state) => state.profile);
  const { user } = useTypedSelector((state) => state.auth);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    if (!profile) {
      dispatch(getCurrentUserProfile());
    }

    // eslint-disable-next-line
  }, []);

  const dispatchDeleteAccount = () => {
    dispatch(deleteAccount()).then(() => {
      setAlert({
        showAlert: true,
        message: 'Your account has been permanently deleted.',
        severity: 'info'
      });
      navigate('/');
    });
  };

  return (
    <DashboardContainer>
      <Typography
        variant='h4'
        align='center'
      >
        Dashboard
      </Typography>

      <TextWithIcon
        text={`Welcome ${user?.firstName}`}
        icon={<PersonIcon color='action' />}
      />

      {loading ? (
        <CustomBackdrop
          isOpen={loading}
          message='Loading profile. Please wait.'
        />
      ) : (
        <>
          {profile === null ? (
            <>
              <Typography
                color='text.primary'
                variant='body1'
                align='left'
              >
                You have not yet setup a profile, please add some info.
              </Typography>

              <LinkButton to={ROUTES.CREATE_PROFILE} >
                Create Profile
              </LinkButton>
            </>
          ) : (
            <>
              <Typography
                variant='body1'
                align='center'
              >
                User Profile
              </Typography>

              <DashboardActions isFetchingProfile={isFetchingProfile}/>

              <ExperienceTimeline experience={profile.experience}/>

              <EducationList education={profile.education}/>

              <Box sx={{ my: 2 }}>
                <Button
                  startIcon={<PersonRemoveIcon/>}
                  variant='contained'
                  color='error'
                  onClick={() => setOpenDeleteDialog(true)}
                >
                  Delete my account
                </Button>
              </Box>
            </>
          )}
        </>
      )}

      <CustomModalDialog
        isDialogOpen={openDeleteDialog}
        dialogTitle='Permanently Delete Account'
        setOpenDialog={setOpenDeleteDialog}
        buttonText='Delete'
        onButtonClick={() => dispatchDeleteAccount()}
        buttonColor='error'
      >
        <div>
          <Typography>
            Are you sure you want to delete your account?
            This includes your profile, posts and comments.
          </Typography>

          <Typography sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <WarningIcon color='warning'/> This operation cannot be undone.
          </Typography>
        </div>
      </CustomModalDialog>
    </DashboardContainer>
  );
};

export default DashboardPage;
