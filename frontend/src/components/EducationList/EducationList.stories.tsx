import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EducationList from './EducationList';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';
import { MOCK_EDUCATION_LIST } from '@helpers/mocks/mocks';

export default {
  title: 'Components/EducationList',
  component: EducationList,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof EducationList>;

const Template: ComponentStory<typeof EducationList> = (args) => {
  return (
    <Box sx={{ width: '100%' }}>
      <EducationList {...args} />
    </Box>
  );
};

export const Standard = Template.bind({});

Standard.args = {
  education: MOCK_EDUCATION_LIST,
  allowEditAndDelete: true
};
