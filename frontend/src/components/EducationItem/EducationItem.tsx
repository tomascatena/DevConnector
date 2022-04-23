import { Box, Tooltip, Typography } from '@mui/material';
import { EditAndDeleteBox, EducationItemBox, HeadingBox } from './EducationItem.styled';
import { IEducation, Nullable } from '../../typings/types';
import { duration, formatDate } from '@utils/dateTime/dateTime';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import React, { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  education: IEducation;
  setSelectedEducation: Dispatch<SetStateAction<Nullable<Partial<IEducation>>>>
  setOpenEditDialog: Dispatch<SetStateAction<boolean>>
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>
  allowEditAndDelete?: boolean
}

const EducationItem:FC<Props> = ({
  education,
  setSelectedEducation,
  setOpenEditDialog,
  setOpenDeleteDialog,
  allowEditAndDelete = true
}) => {
  const handleEditExperience = () => {
    setSelectedEducation(education);
    setOpenEditDialog(true);
  };

  const handleDeleteExperience = () => {
    setSelectedEducation(education);
    setOpenDeleteDialog(true);
  };

  return (
    <EducationItemBox>
      <HeadingBox>
        <Box>
          <Typography variant='body1'>
            <strong>{education.degree}</strong>
          </Typography>

          <Typography variant='body1'>
            {education.school}
          </Typography>
        </Box>

        {
          allowEditAndDelete &&
          <EditAndDeleteBox>
            <Tooltip title="Edit Education">
              <IconButton
                onClick={handleEditExperience}
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip
              onClick={handleDeleteExperience}
              title="Delete Education"
            >
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </EditAndDeleteBox>
        }
      </HeadingBox>

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
    </EducationItemBox>
  );
};

export default EducationItem;
