import { Box } from '@mui/material';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createRandomExperience } from '@helpers/mocks/randomMockCreators';
import ExperienceTimelineItem from './ExperienceTimelineItem';
import React from 'react';

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
