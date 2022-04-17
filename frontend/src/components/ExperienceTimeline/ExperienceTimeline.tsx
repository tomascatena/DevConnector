import ExperienceTimelineItem from '@components/ExperienceTimelineItem/ExperienceTimelineItem';
import React, { FC, useState } from 'react';
import { IExperience, Nullable } from '../../typings/types';
import { Typography, Grid } from '@mui/material';
import { useTypedSelector, useAppDispatch, useActions } from '@hooks/index';
import { deleteProfileExperience, updateProfileExperience } from '@store/features/profile/profile.thunk';
import CustomDialog from '@ui-elements/CustomDialog/CustomDialog';
import ExperienceForm from '@components/ExperienceForm/ExperienceForm';
import CustomModalDialog from '@ui-elements/CustomModalDialog/CustomModalDialog';
import CustomAlert from '@ui-elements/CustomAlert/CustomAlert';
import { sortISODates } from '@utils/dateTime/dateTime';
import { StyledExperienceTimeline } from './ExperienceTimeline.styled';

type Props = {
  experience: IExperience[]
  allowEditAndDelete?: boolean
}

const ExperienceTimeline:FC<Props> = ({ experience, allowEditAndDelete = true }) => {
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
          md={allowEditAndDelete ? 8 : 12}
        >
          {
          experience.length
            ? (
                <StyledExperienceTimeline>
                  {[...experience]
                    .sort(sortISODates)
                    .map((experienceItem) =>
                    <ExperienceTimelineItem
                      key={experienceItem._id}
                      experience={experienceItem}
                      setSelectedExperience={setSelectedExperience}
                      setOpenEditDialog={setOpenEditDialog}
                      setOpenDeleteDialog={setOpenDeleteDialog}
                      allowEditAndDelete={allowEditAndDelete}
                    />
                    )}
                </StyledExperienceTimeline>
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
