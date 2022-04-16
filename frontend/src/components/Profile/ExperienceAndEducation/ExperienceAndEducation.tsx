import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { IProfile } from '../../../typings/types';
import ExperienceList from '@components/ExperienceList/ExperienceList';
import EducationList from '@components/EducationList/EducationList';
import { StyledBox, StyledCard, ExperienceOrEducationGrid } from './ExperienceAndEducation.styled';

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
        <ExperienceOrEducationGrid
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
        </ExperienceOrEducationGrid>

        <ExperienceOrEducationGrid
          item
          xs={12}
          md={6}
        >
          <StyledCard>
            <EducationList
              allowEditAndDelete={false}
              education={education}
            />
          </StyledCard>
        </ExperienceOrEducationGrid>
      </Grid>
    </StyledBox>
  );
};

export default ExperienceAndEducation;
