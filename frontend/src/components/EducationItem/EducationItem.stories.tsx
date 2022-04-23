import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid } from '@mui/material';
import { createRandomEducation } from '@helpers/mocks/randomMockCreators';
import EducationItem from './EducationItem';
import React from 'react';

export default {
  title: 'Components/EducationItem',
  component: EducationItem,
  decorators: [
    (Story, context) => (
      <ComponentBox>
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
            {Story(context)}
          </Grid>
        </Grid>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof EducationItem>;

const Template: ComponentStory<typeof EducationItem> = (args) => <EducationItem {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  education: createRandomEducation(),
  setSelectedEducation: () => {},
  setOpenEditDialog: () => {},
  setOpenDeleteDialog: () => {},
  allowEditAndDelete: true
};
