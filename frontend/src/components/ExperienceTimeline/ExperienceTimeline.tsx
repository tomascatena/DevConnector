import ExperienceItem from '@components/ExperienceItem/ExperienceItem';
import React, { FC, useState } from 'react';
import { IExperience, Nullable } from '../../typings/types';
import { Typography, Grid } from '@mui/material';
import { useTypedSelector, useAppDispatch, useActions } from '@hooks/index';
import { Timeline } from '@mui/lab';
import { deleteProfileExperience, updateProfileExperience } from '../../store/features/profile/profile.thunk';
import CustomDialog from '@components/CustomDialog/CustomDialog';
import ExperienceForm from '@components/ExperienceForm/ExperienceForm';
import CustomModalDialog from '@components/CustomModalDialog/CustomModalDialog';
import CustomAlert from '@components/CustomAlert/CustomAlert';
import { sortISODates } from '@utils/dateTime';

type Props = {
  experience: IExperience[]
}

const ExperienceTimeline:FC<Props> = ({ experience }) => {
  const { setAlert } = useActions();
  const dispatch = useAppDispatch();
  const { loading } = useTypedSelector((state) => state.profile);
  const { showAlert, message, severity } = useTypedSelector((state) => state.alert);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Nullable<Partial<IExperience>>>(null);

  const dispatchCreateOrUpdateExperience = (experienceForm: Partial<IExperience>) => {
    dispatch(updateProfileExperience(experienceForm)).then(() => {
      setAlert({
        showAlert: true,
        message: 'Experience updated',
        severity: 'success'
      });
    });
  };

  const dispatchDeleteExperience = (experienceId: string | undefined) => {
    if (experienceId) {
      dispatch(deleteProfileExperience(experienceId)).then(() => {
        setAlert({
          showAlert: true,
          message: 'Experience deleted',
          severity: 'info'
        });
      });
    }
  };

  return (
    <>
      <Typography variant='h5'>
        Experience Credentials
      </Typography>

      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
        >
          {
          experience.length
            ? (
              <Timeline sx={{ width: '100%' }}>
                {[...experience]
                  .sort(sortISODates)
                  .map((experienceItem) =>
                  <ExperienceItem
                    key={experienceItem._id}
                    experience={experienceItem}
                    setSelectedExperience={setSelectedExperience}
                    setOpenEditDialog={setOpenEditDialog}
                    setOpenDeleteDialog={setOpenDeleteDialog}
                  />
                  )}
              </Timeline>
              )
            : <Typography color='text.primary'>No experience credentials to show.</Typography>
          }
        </Grid>
      </Grid>

      <CustomDialog
        isDialogOpen={openEditDialog}
        setOpenDialog={setOpenEditDialog}
        title='Edit Experience'
      >
        <ExperienceForm
          dispatchCreateOrUpdateExperience={dispatchCreateOrUpdateExperience}
          loading={loading}
          isDialog
          setOpenDialog={setOpenEditDialog}
          experience={selectedExperience}
        />
      </CustomDialog>

      <CustomModalDialog
        isDialogOpen={openDeleteDialog}
        dialogTitle='Delete Experience'
        setOpenDialog={setOpenDeleteDialog}
        buttonText='Delete'
        onButtonClick={() => dispatchDeleteExperience(selectedExperience?._id)}
        buttonColor='error'
      >
        <div>
          Confirm delete experience from profile?<br/>
          This operation cannot be undone.
        </div>
      </CustomModalDialog>

      <CustomAlert
        shouldShowAlert={showAlert}
        message={message}
        severity={severity}
      />
    </>
  );
};

export default ExperienceTimeline;
