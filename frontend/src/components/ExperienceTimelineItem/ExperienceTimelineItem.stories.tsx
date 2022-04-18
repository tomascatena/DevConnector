import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExperienceTimelineItem from './ExperienceTimelineItem';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';
import { createRandomExperience } from '@helpers/mocks/randomMockCreators';

export default {
  title: 'Components/ExperienceTimelineItem',
  component: ExperienceTimelineItem,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
        <Box sx={{ width: '100%' }}>
          {Story(context)}
        </Box>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceTimelineItem>;

const Template: ComponentStory<typeof ExperienceTimelineItem> = (args) => <ExperienceTimelineItem {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  experience: createRandomExperience(),
  setSelectedExperience: () => {},
  setOpenEditDialog: () => {},
  setOpenDeleteDialog: () => {},
  allowEditAndDelete: true
};
