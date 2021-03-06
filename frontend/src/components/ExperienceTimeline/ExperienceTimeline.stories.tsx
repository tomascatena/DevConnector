import { Box } from '@mui/material';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createRandomExperience } from '@helpers/mocks/randomMockCreators';
import ExperienceTimeline from './ExperienceTimeline';
import React from 'react';

export default {
  title: 'Components/ExperienceTimeline',
  component: ExperienceTimeline,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
        <Box sx={{ width: '100%' }}>
          {Story(context)}
        </Box>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceTimeline>;

const Template: ComponentStory<typeof ExperienceTimeline> = (args) => <ExperienceTimeline {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  experience: [
    createRandomExperience(),
    createRandomExperience(),
    createRandomExperience(),
  ],
  allowEditAndDelete: true
};
