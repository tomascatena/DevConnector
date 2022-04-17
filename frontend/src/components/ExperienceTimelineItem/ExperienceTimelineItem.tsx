import React, { FC, Dispatch, SetStateAction } from 'react';
import { IExperience, Nullable } from '../../typings/types';
import { Typography, Box, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { duration, formatDate } from '@utils/dateTime';
import { EditAndDeleteBox, HeadlineBox, TimelineContentBox } from './ExperienceTimelineItem.styled';
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector
} from '@mui/lab';

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
    <TimelineItem>
      <TimelineOppositeContent
        color="text.secondary"
        sx={{ flex: 0.3 }}
      >
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {formatDate(experience.from)} - {experience.current ? 'Present' : formatDate(experience.to)}
          <br/>
          ({duration(experience.from, experience.to)})
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <TimelineContentBox>
          <HeadlineBox>
            <Box>
              <Typography variant='body1'>
                <strong>{experience.title}</strong>
              </Typography>

              <Typography variant='body1'>
                {experience.company}
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

                <Tooltip title="Delete Experience">
                  <IconButton
                    onClick={handleDeleteExperience}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </EditAndDeleteBox>
            }
          </HeadlineBox>

          <Typography
            variant='body2'
            color='text.secondary'
          >
            {experience.location}
          </Typography>

          <Typography variant='body2'>
            {experience.description}
          </Typography>
        </TimelineContentBox>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceItem;
