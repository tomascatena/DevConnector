import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { IProfile } from '../../../typings/types';
import ExperienceList from '@components/ExperienceList/ExperienceList';
import EducationList from '@components/EducationList/EducationList';
import { StyledBox, StyledCard } from './ExperienceAndEducation.styled';

type Props = {
  selectedUserProfile: IProfile;
}

const ExperienceAndEducation:FC<Props> = ({ selectedUserProfile }) => {
  const {
    experience,
    education
  } = selectedUserProfile;

  return (
    <StyledBox>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <StyledCard>
            <ExperienceList
              experience={experience}
              allowEditAndDelete={false}
            />
          </StyledCard>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <StyledCard>
            <EducationList
              allowEditAndDelete={false}
              education={education}
            />
          </StyledCard>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default ExperienceAndEducation;
