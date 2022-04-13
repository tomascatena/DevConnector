import React, { FC } from 'react';
import { Typography, Box, Card, Chip, Divider } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { IProfile } from '../../../typings/types';

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
  <Box sx={{ display: 'inline-block', width: '100%' }}>
    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 3 }}>
      {
        bio &&
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Typography variant='h5'>
              {firstName}{firstName?.slice(-1) === 's' ? "'" : 's'} Bio
            </Typography>

            {
              bio &&
              <Typography variant='body1'>
                {bio}
              </Typography>
            }
          </Box>

          <Divider
            flexItem
            sx={{ my: 3 }}
          />
        </>
      }

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant='h5'>
          Skill Set
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
        </Box>
      </Box>
    </Card>
  </Box>
  );
};

export default BioAndSkills;
