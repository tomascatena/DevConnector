import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EducationItem from './EducationItem';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { Grid } from '@mui/material';
import { MOCK_EDUCATION } from '@helpers/mocks/mocks';

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
  education: MOCK_EDUCATION,
  setSelectedEducation: () => {},
  setOpenEditDialog: () => {},
  setOpenDeleteDialog: () => {},
  allowEditAndDelete: true
};
