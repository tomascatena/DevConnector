import ExperienceItem from '@components/ExperienceItem/ExperienceItem';
import React, { FC } from 'react';
import { IExperience } from '../../typings/types';
import { Typography, Grid } from '@mui/material';
import { Timeline } from '@mui/lab';

type Props = {
  experience: IExperience[]
}

const ExperienceTimeline:FC<Props> = ({ experience }) => {
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
              />
            )}
          </Timeline>
        </Grid>
      </Grid>
    </>
  );
};

export default ExperienceTimeline;
