import { Box } from '@mui/material';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createRandomExperience } from '@helpers/mocks/randomMockCreators';
import ExperienceList from './ExperienceList';
import React from 'react';

export default {
  title: 'Components/ExperienceList',
  component: ExperienceList,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
        <Box sx={{ width: '100%' }}>
          {Story(context)}
        </Box>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceList>;

const Template: ComponentStory<typeof ExperienceList> = (args) => <ExperienceList {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  experience: [
    createRandomExperience(),
    createRandomExperience(),
    createRandomExperience(),
  ],
  allowEditAndDelete: true
};
