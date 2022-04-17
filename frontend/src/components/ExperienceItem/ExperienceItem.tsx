import React, { FC, Dispatch, SetStateAction } from 'react';
import { IExperience, Nullable } from '../../typings/types';
import { Typography, Box, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { duration, formatDate } from '@utils/dateTime/dateTime';
import { EditAndDeleteBox, ExperienceItemBox, ExperienceItemHeaderBox } from './ExperienceItem.styled';

type Props = {
  experience: IExperience;
  setSelectedExperience: Dispatch<SetStateAction<Nullable<Partial<IExperience>>>>
  setOpenEditDialog: Dispatch<SetStateAction<boolean>>
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>
  allowEditAndDelete?: boolean
}

const ExperienceItem:FC<Props> = ({
  experience,
  setSelectedExperience,
  setOpenEditDialog,
  setOpenDeleteDialog,
  allowEditAndDelete = true
}) => {
  const handleEditExperience = () => {
    setSelectedExperience(experience);
    setOpenEditDialog(true);
  };

  const handleDeleteExperience = () => {
    setSelectedExperience(experience);
    setOpenDeleteDialog(true);
  };

  return (
    <ExperienceItemBox>
      <ExperienceItemHeaderBox>
        <Box>
          <Typography variant='body1'>
            <strong>{experience.title}</strong>
          </Typography>

          <Typography variant='body1'>
            {experience.company} {experience.location && `(${experience.location})`}
          </Typography>
        </Box>

        {
          allowEditAndDelete &&
          <EditAndDeleteBox>
            <Tooltip title="Edit Experience">
              <IconButton
                onClick={handleEditExperience}
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip
              onClick={handleDeleteExperience}
              title="Delete Experience"
            >
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </EditAndDeleteBox>
        }
      </ExperienceItemHeaderBox>

      <Typography
        variant='body2'
        color='text.secondary'
      >
        {formatDate(experience.from)} - {experience.current ? 'Present' : formatDate(experience.to)}
        {' '}({duration(experience.from, experience.to)})
      </Typography>

      <Typography variant='body2'>
        {experience.description}
      </Typography>
    </ExperienceItemBox>
  );
};

export default ExperienceItem;
