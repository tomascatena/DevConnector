import { EducationGridItem } from './EducationList.styled';
import { Grid, Typography } from '@mui/material';
import { IEducation, Nullable } from '../../typings/types';
import { deleteProfileEducation, updateProfileEducation } from '@store/features/profile/profile.thunk';
import { sortISODates } from '@utils/dateTime/dateTime';
import { useActions, useAppDispatch, useTypedSelector } from '@hooks/index';
import CustomAlert from '@ui-elements/CustomAlert/CustomAlert';
import CustomDialog from '@ui-elements/CustomDialog/CustomDialog';
import CustomModalDialog from '@ui-elements/CustomModalDialog/CustomModalDialog';
import EducationForm from '@components/EducationForm/EducationForm';
import EducationItem from '@components/EducationItem/EducationItem';
import React, { FC, useState } from 'react';

type Props = {
  education: IEducation[]
  allowEditAndDelete?: boolean
}

const EducationList:FC<Props> = ({ education, allowEditAndDelete = true }) => {
  const { setAlert } = useActions();
  const dispatch = useAppDispatch();
  const { loading } = useTypedSelector((state) => state.profile);
  const { showAlert, message, severity } = useTypedSelector((state) => state.alert);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<Nullable<Partial<IEducation>>>(null);

  const dispatchUpdateEducation = (educationForm: Partial<IEducation>) => {
    dispatch(updateProfileEducation(educationForm)).then(() => {
      setAlert({
        showAlert: true,
        message: 'Education updated',
        severity: 'success'
      });
    });
  };

  const dispatchDeleteEducation = (experienceId: string | undefined) => {
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
        Education Credentials
      </Typography>

      <Grid container>
        <EducationGridItem
          item
          xs={12}
          md={allowEditAndDelete ? 6 : 9}
          allowEditAndDelete={allowEditAndDelete}
        >
          {
            education.length
              ? [...education]
                  .sort(sortISODates)
                  .map((educationItem) =>
                    <EducationItem
                      key={educationItem._id}
                      education={educationItem}
                      setOpenEditDialog={setOpenEditDialog}
                      setOpenDeleteDialog={setOpenDeleteDialog}
                      setSelectedEducation={setSelectedEducation}
                      allowEditAndDelete={allowEditAndDelete}
                    />
                  )
              : <Typography color='text.primary'>No education credentials to show.</Typography>
          }
        </EducationGridItem>
      </Grid>

      <CustomDialog
        isDialogOpen={openEditDialog}
        setOpenDialog={setOpenEditDialog}
        title='Edit Education'
      >
        <EducationForm
          dispatchCreateOrUpdateEducation={dispatchUpdateEducation}
          loading={loading}
          isDialog
          setOpenDialog={setOpenEditDialog}
          education={selectedEducation}
        />
      </CustomDialog>

      <CustomModalDialog
        isDialogOpen={openDeleteDialog}
        dialogTitle='Delete Education'
        setOpenDialog={setOpenDeleteDialog}
        buttonText='Delete'
        onButtonClick={() => dispatchDeleteEducation(selectedEducation?._id)}
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
