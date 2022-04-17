import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EducationItem from './EducationItem';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Grid } from '@mui/material';

export default {
  title: 'Components/EducationItem',
  component: EducationItem,
  decorators: [
    (Story, context) => (
      <ComponentBox>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof EducationItem>;

const Template: ComponentStory<typeof EducationItem> = (args) => {
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
        <EducationItem {...args} />
      </Grid>
    </Grid>
  );
};

export const Standard = Template.bind({});

Standard.args = {
  education: {
    _id: 'abc123',
    school: 'University of Somewhere',
    degree: 'Informatics Engineer',
    fieldOfStudy: 'Computer Science',
    from: '2005-02-01',
    to: '2011-04-01',
    current: false,
    description: 'Computer science degree focused on web development'
  },
  setSelectedEducation: () => {},
  setOpenEditDialog: () => {},
  setOpenDeleteDialog: () => {},
  allowEditAndDelete: true
};
