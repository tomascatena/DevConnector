import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExperienceTimeline from './ExperienceTimeline';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';
import { MOCK_EXPERIENCE_LIST } from '@helpers/mocks/mocks';

export default {
  title: 'Components/ExperienceTimeline',
  component: ExperienceTimeline,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceTimeline>;

const Template: ComponentStory<typeof ExperienceTimeline> = (args) => {
  return (
    <Box sx={{ width: '100%' }}>
      <ExperienceTimeline {...args} />
    </Box>
  );
};

export const Standard = Template.bind({});

Standard.args = {
  experience: MOCK_EXPERIENCE_LIST,
  allowEditAndDelete: true
};
