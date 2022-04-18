import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilesListItem from './ProfilesListItem';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { createRandomUserProfile } from '@helpers/mocks/randomMockCreators';
import { Grid } from '@mui/material';

export default {
  title: 'Components/ProfilesListItem',
  component: ProfilesListItem,
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
            <Story {...context}/>
          </Grid>
        </Grid>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ProfilesListItem>;

const Template: ComponentStory<typeof ProfilesListItem> = (args) => <ProfilesListItem {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  profile: createRandomUserProfile()
};
