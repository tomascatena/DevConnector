import ExperienceItem from '@components/ExperienceItem/ExperienceItem';
import React, { FC, useState } from 'react';
import { IExperience, Nullable } from '../../typings/types';
import { Typography, Grid } from '@mui/material';
import { useTypedSelector, useAppDispatch } from '@hooks/index';
import { Timeline } from '@mui/lab';
import { updateProfileExperience } from '../../store/features/profile/profile.thunk';
import CustomDialog from '@components/CustomDialog/CustomDialog';
import ExperienceForm from '@components/ExperienceForm/ExperienceForm';

import Button from '@mui/material/Button';

type Props = {
  experience: IExperience[]
}

const ExperienceTimeline:FC<Props> = ({ experience }) => {
  const dispatch = useAppDispatch();
  const { loading } = useTypedSelector((state) => state.profile);

  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Nullable<Partial<IExperience>>>(null);

  const handleOpenDialog = () => () => {
    setOpen(true);
  };

  const dispatchCreateOrUpdateExperience = (
    experienceForm: Partial<IExperience>
  ) => {
    dispatch(updateProfileExperience(experienceForm)).then(() => {
      setOpen(false);
      setSelectedExperience(null);
    });
  };

  console.log(selectedExperience);

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
          <Timeline sx={{ width: '100%' }}>
            {experience.map((experienceItem, index) =>
              <ExperienceItem
                key={index}
                experience={experienceItem}
                setSelectedExperience={setSelectedExperience}
              />
            )}
          </Timeline>
        </Grid>

        <div>
          <Button onClick={handleOpenDialog()}>scroll=body</Button>

          <CustomDialog
            open={open}
            setOpen={setOpen}
            title='Edit Experience'
          >
            <ExperienceForm
              dispatchCreateOrUpdateExperience={dispatchCreateOrUpdateExperience}
              loading={loading}
              isDialog
              setOpen={setOpen}
              experience={selectedExperience}
            />
          </CustomDialog>
        </div>
      </Grid>
    </>
  );
};

export default ExperienceTimeline;
