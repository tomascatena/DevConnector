import { ExperienceGridItem } from './ExperienceList.styled';
import { Grid, Typography } from '@mui/material';
import { IExperience, Nullable } from '../../typings/types';
import { deleteProfileEducation, updateProfileExperience } from '@store/features/profile/profile.thunk';
import { sortISODates } from '@utils/dateTime/dateTime';
import { useActions, useAppDispatch, useTypedSelector } from '@hooks/index';
import CustomAlert from '@ui-elements/CustomAlert/CustomAlert';
import CustomDialog from '@ui-elements/CustomDialog/CustomDialog';
import CustomModalDialog from '@ui-elements/CustomModalDialog/CustomModalDialog';
import ExperienceForm from '@components/ExperienceForm/ExperienceForm';
import ExperienceItem from '@components/ExperienceItem/ExperienceItem';
import React, { FC, useState } from 'react';

type Props = {
  experience: IExperience[]
  allowEditAndDelete?: boolean
}

const EducationList:FC<Props> = ({ experience, allowEditAndDelete = true }) => {
  const { setAlert } = useActions();
  const dispatch = useAppDispatch();
  const { loading } = useTypedSelector((state) => state.profile);
  const { showAlert, message, severity } = useTypedSelector((state) => state.alert);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedEducation, setSelectedExperience] = useState<Nullable<Partial<IExperience>>>(null);

  const dispatchUpdateExperience = (experienceForm: Partial<IExperience>) => {
    dispatch(updateProfileExperience(experienceForm)).then(() => {
      setAlert({
        showAlert: true,
        message: 'Education updated',
        severity: 'success'
      });
    });
  };

  const dispatchDeleteExperience = (experienceId: string | undefined) => {
    if (experienceId) {
      dispatch(deleteProfileEducation(experienceId)).then(() => {
        setAlert({
          showAlert: true,
          message: 'Education deleted',
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
        <ExperienceGridItem
          item
          xs={12}
          md={allowEditAndDelete ? 6 : 9}
          allowEditAndDelete={allowEditAndDelete}
        >
          {
            experience.length
              ? [...experience]
                  .sort(sortISODates)
                  .map((experienceItem) =>
                    <ExperienceItem
                      key={experienceItem._id}
                      experience={experienceItem}
                      setOpenEditDialog={setOpenEditDialog}
                      setOpenDeleteDialog={setOpenDeleteDialog}
                      setSelectedExperience={setSelectedExperience}
                      allowEditAndDelete={allowEditAndDelete}
                    />
                  )
              : <Typography color='text.primary'>No experience credentials to show.</Typography>
          }
        </ExperienceGridItem>
      </Grid>

      <CustomDialog
        isDialogOpen={openEditDialog}
        setOpenDialog={setOpenEditDialog}
        title='Edit Education'
      >
        <ExperienceForm
          dispatchCreateOrUpdateExperience={dispatchUpdateExperience}
          loading={loading}
          isDialog
          setOpenDialog={setOpenEditDialog}
          experience={selectedEducation}
        />
      </CustomDialog>

      <CustomModalDialog
        isDialogOpen={openDeleteDialog}
        dialogTitle='Delete Education'
        setOpenDialog={setOpenDeleteDialog}
        buttonText='Delete'
        onButtonClick={() => dispatchDeleteExperience(selectedEducation?._id)}
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

export default EducationList;
