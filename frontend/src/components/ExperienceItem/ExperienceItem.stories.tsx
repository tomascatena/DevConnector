import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExperienceItem from './ExperienceItem';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Grid } from '@mui/material';

export default {
  title: 'Components/ExperienceItem',
  component: ExperienceItem,
  decorators: [
    (Story, context) => (
      <ComponentBox>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceItem>;

const Template: ComponentStory<typeof ExperienceItem> = (args) => {
  return (
    <Grid
      container
      sx={{ justifyContent: 'center' }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          margin: 'auto',
          marginTop: 2
        }}
      >
        <ExperienceItem {...args} />
      </Grid>
    </Grid>
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
