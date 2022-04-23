import { Box } from '@mui/material';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createRandomEducation } from '@helpers/mocks/randomMockCreators';
import EducationList from './EducationList';
import React from 'react';

export default {
  title: 'Components/EducationList',
  component: EducationList,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
        <Box sx={{ width: '100%' }}>
          {Story(context)}
        </Box>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof EducationList>;

const Template: ComponentStory<typeof EducationList> = (args) => <EducationList {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  education: [
    createRandomEducation(),
    createRandomEducation(),
    createRandomEducation(),
  ],
  allowEditAndDelete: true
};
