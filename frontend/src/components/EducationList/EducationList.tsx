import EducationItem from '@components/EducationItem/EducationItem';
import React, { FC, useState } from 'react';
import { IEducation, Nullable } from '../../typings/types';
import { Typography, Grid } from '@mui/material';
import { deleteProfileEducation, updateProfileEducation } from '../../store/features/profile/profile.thunk';
import { useTypedSelector, useAppDispatch } from '@hooks/index';
import CustomDialog from '@components/CustomDialog/CustomDialog';
import EducationForm from '@components/EducationForm/EducationForm';
import CustomModalDialog from '../CustomModalDialog/CustomModalDialog';

type Props = {
  education: IEducation[]
}

const EducationList:FC<Props> = ({ education }) => {
  const dispatch = useAppDispatch();
  const { loading } = useTypedSelector((state) => state.profile);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<Nullable<Partial<IEducation>>>(null);

  const dispatchUpdateEducation = (
    educationForm: Partial<IEducation>
  ) => {
    dispatch(updateProfileEducation(educationForm));
  };

  const dispatchDeleteEducation = (
    experienceId: string | undefined
  ) => {
    if (experienceId) {
      dispatch(deleteProfileEducation(experienceId));
    }
  };
  return (
    <>
      <Typography variant='h5'>
        Education Credentials
      </Typography>

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
        >
          {
          education.length
            ? education.map((educationItem) =>
            <EducationItem
              key={educationItem._id}
              education={educationItem}
              setOpenEditDialog={setOpenEditDialog}
              setOpenDeleteDialog={setOpenDeleteDialog}
              setSelectedEducation={setSelectedEducation}
            />
            )
            : <Typography color='text.primary'>No education credentials to show.</Typography>
          }
        </Grid>
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
    </>
  );
};

export default EducationList;
