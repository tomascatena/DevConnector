import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExperienceTimelineItem from './ExperienceTimelineItem';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';

export default {
  title: 'Components/ExperienceTimelineItem',
  component: ExperienceTimelineItem,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 5 }}>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceTimelineItem>;

const Template: ComponentStory<typeof ExperienceTimelineItem> = (args) => {
  return (
    <Box sx={{ width: '100%' }}>
      <ExperienceTimelineItem {...args} />
    </Box>
  );
};

export const Standard = Template.bind({});

Standard.args = {
  experience: {
    _id: 'abc123',
    company: 'Acme Software Inc.',
    title: 'Principal Engineer',
    location: 'Austin, TX',
    from: '2017-02-01',
    to: null,
    current: true,
    description: 'In charge of developing high quality software'
  },
  setSelectedExperience: () => {},
  setOpenEditDialog: () => {},
  setOpenDeleteDialog: () => {},
  allowEditAndDelete: true
};
