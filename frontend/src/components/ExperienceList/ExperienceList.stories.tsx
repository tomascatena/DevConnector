import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExperienceList from './ExperienceList';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';

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
  experience: [
    {
      _id: 'abc123',
      company: 'Acme Software Inc.',
      title: 'Principal Engineer',
      location: 'Austin, TX',
      from: '2017-02-01',
      to: null,
      current: true,
      description: 'In charge of developing high quality software'
    },
    {
      _id: 'abc456',
      company: 'Acme Software Inc.',
      title: 'Principal Engineer',
      location: 'Austin, TX',
      from: '2017-02-01',
      to: null,
      current: true,
      description: 'In charge of developing high quality software'
    },
    {
      _id: 'abc789',
      company: 'Acme Software Inc.',
      title: 'Principal Engineer',
      location: 'Austin, TX',
      from: '2017-02-01',
      to: null,
      current: true,
      description: 'In charge of developing high quality software'
    },
  ],
  allowEditAndDelete: true
};
