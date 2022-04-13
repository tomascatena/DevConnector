import React, { FC } from 'react';
import { Box, Card, Grid } from '@mui/material';
import { IProfile } from '../../../typings/types';
import ExperienceTimeline from '@components/ExperienceTimeline/ExperienceTimeline';
import EducationList from '@components/EducationList/EducationList';

type Props = {
  selectedUserProfile: IProfile;
}

const ExperienceAndEducation:FC<Props> = ({ selectedUserProfile }) => {
  const {
    experience,
    education
  } = selectedUserProfile;

  return (
  <Box sx={{ display: 'inline-block', width: '100%' }}>
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        md={6}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            p: 3,
            flex: 1
          }}
        >
          <ExperienceTimeline
            experience={experience}
            allowEditAndDelete={false}
          />
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            p: 3,
            flex: 1
          }}
        >
          <EducationList
            allowEditAndDelete={false}
            education={education}
          />
        </Card>
      </Grid>
    </Grid>
  </Box>
  );
};

export default ExperienceAndEducation;
