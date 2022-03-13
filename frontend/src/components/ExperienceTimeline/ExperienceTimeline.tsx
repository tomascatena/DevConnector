import Experience from '@components/Experience/Experience';
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
        Experience
      </Typography>

      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
        >
          <Timeline sx={{ width: '100%' }}>
            {experience.map((experience, index) =>
              <Experience
                key={index}
                experience={experience}
              />
            )}
          </Timeline>
        </Grid>
      </Grid>
    </>
  );
};

export default ExperienceTimeline;
