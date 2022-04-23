import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid } from '@mui/material';
import { createRandomExperience } from '@helpers/mocks/randomMockCreators';
import ExperienceItem from './ExperienceItem';
import React from 'react';

export default {
  title: 'Components/ExperienceItem',
  component: ExperienceItem,
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
            lg={4}
          >
            {Story(context)}
          </Grid>
        </Grid>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceItem>;

const Template: ComponentStory<typeof ExperienceItem> = (args) => <ExperienceItem {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  experience: createRandomExperience(),
  setSelectedExperience: () => {},
  setOpenEditDialog: () => {},
  setOpenDeleteDialog: () => {},
  allowEditAndDelete: true
};
