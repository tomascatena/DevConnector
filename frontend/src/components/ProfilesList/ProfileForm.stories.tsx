import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilesList from './ProfilesList';
import React from 'react';

export default {
  title: 'Components/ProfilesList',
  component: ProfilesList,
  decorators: [
    (Story, context) => (
      <ComponentBox sx={{ px: 3 }}>
        {Story(context)}
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ProfilesList>;

const Template: ComponentStory<typeof ProfilesList> = (args) => <ProfilesList {...args} />;

export const Standard = Template.bind({});
