import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EducationList from './EducationList';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';

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
  education: [
    {
      _id: 'abc123',
      school: 'University of Somewhere',
      degree: 'Informatics Engineer',
      fieldOfStudy: 'Computer Science',
      from: '2005-02-01',
      to: '2011-04-01',
      current: false,
      description: 'Computer science degree focused on web development'
    },
    {
      _id: 'abc456',
      school: 'University of Somewhere',
      degree: 'Informatics Engineer',
      fieldOfStudy: 'Computer Science',
      from: '2005-02-01',
      to: '2011-04-01',
      current: false,
      description: 'Computer science degree focused on web development'
    },
    {
      _id: 'abc789',
      school: 'University of Somewhere',
      degree: 'Informatics Engineer',
      fieldOfStudy: 'Computer Science',
      from: '2005-02-01',
      to: '2011-04-01',
      current: false,
      description: 'Computer science degree focused on web development'
    },
  ],
  allowEditAndDelete: true
};
