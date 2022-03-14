import React, { FC } from 'react';
import { IEducation } from '../../typings/types';
import { Typography, Box, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { duration, formatDate } from '@utils/dateTime';

type Props = {
  education: IEducation
}

const EducationItem:FC<Props> = ({ education }) => {
  return (
    <Box sx={{ color: 'text.primary', mb: 3, flex: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant='body1'>
            <strong>{education.degree}</strong>
          </Typography>

          <Typography variant='body1'>
            {education.school}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
          <Tooltip title="Edit Education">
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete Education">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Typography
        variant='body2'
        color='text.primary'
      >
        {education.fieldOfStudy}
      </Typography>

      <Typography
        variant='body2'
        color='text.secondary'
      >
        {formatDate(education.from)} - {education.current ? 'Present' : formatDate(education.to)}
        {' '}({duration(education.from, education.to)})
      </Typography>

      <Typography variant='body2'>
        {education.description}
      </Typography>
    </Box>
  );
};

export default EducationItem;
