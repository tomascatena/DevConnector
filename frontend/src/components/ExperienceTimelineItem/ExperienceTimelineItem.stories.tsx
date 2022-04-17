import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExperienceTimelineItem from './ExperienceTimelineItem';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';
import { MOCK_EXPERIENCE } from '@helpers/mocks/mocks';

export default {
  title: 'Components/ExperienceTimelineItem',
  component: ExperienceTimelineItem,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceTimelineItem>;

const Template: ComponentStory<typeof ExperienceTimelineItem> = (args) => {
  return (
    <Box sx={{ width: '100%' }}>
      <ExperienceTimelineItem {...args} />
    </Box>
  );
};

export const Standard = Template.bind({});

Standard.args = {
  experience: MOCK_EXPERIENCE,
  setSelectedExperience: () => {},
  setOpenEditDialog: () => {},
  setOpenDeleteDialog: () => {},
  allowEditAndDelete: true
};
