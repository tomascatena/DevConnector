import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilesList from './ProfilesList';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { MOCK_USER_PROFILE } from '@helpers/mocks/mocks';

export default {
  title: 'Components/ProfilesList',
  component: ProfilesList,
  decorators: [
    (Story, context) => (
      <ComponentBox>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ProfilesList>;

const Template: ComponentStory<typeof ProfilesList> = (args) => <ProfilesList {...args} />;

export const Standard = Template.bind({});
