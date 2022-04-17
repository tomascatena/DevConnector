import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExperienceList from './ExperienceList';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';
import { MOCK_EXPERIENCE_LIST } from '@helpers/mocks/mocks';

export default {
  title: 'Components/ExperienceList',
  component: ExperienceList,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceList>;

const Template: ComponentStory<typeof ExperienceList> = (args) => {
  return (
    <Box sx={{ width: '100%' }}>
      <ExperienceList {...args} />
    </Box>
  );
};

export const Standard = Template.bind({});

Standard.args = {
  experience: MOCK_EXPERIENCE_LIST,
  allowEditAndDelete: true
};
