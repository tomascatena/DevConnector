import React, { FC } from 'react';
import { Typography, Chip, Divider } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { IProfile } from '../../../typings/types';
import { BioAndSkillsBox, StyledCard, SubsectionBox, SkillsBox } from './BioAndSkills.styled';

type Props = {
  selectedUserProfile: IProfile;
}

const BioAndSkills:FC<Props> = ({ selectedUserProfile }) => {
  const {
    user,
    skills,
    bio
  } = selectedUserProfile;

  const { firstName } = user;

  return (
  <BioAndSkillsBox>
    <StyledCard>
      {
        bio &&
        <>
          <SubsectionBox>
            <Typography variant='h5'>
              {firstName}{firstName?.slice(-1) === 's' ? "'" : 's'} Bio
            </Typography>

            {
              bio &&
              <Typography variant='body1'>
                {bio}
              </Typography>
            }
          </SubsectionBox>

          <Divider
            flexItem
            sx={{ my: 3 }}
          />
        </>
      }

      <SubsectionBox>
        <Typography variant='h5'>
          Skill Set
        </Typography>

        <SkillsBox>
          {skills.map(skill =>
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              onDelete={() => {}}
              onClick={() => {}}
              deleteIcon={<DoneIcon />}
            />
          )}
        </SkillsBox>
      </SubsectionBox>
    </StyledCard>
  </BioAndSkillsBox>
  );
};

export default BioAndSkills;
