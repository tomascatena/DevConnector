import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MOCK_GITHUB_REPOS } from '@helpers/mocks/githubRepos.mock';
import { PageContainer } from '@helpers/StoriesStyledComponents.styled';
import { createRandomUserProfile } from '@helpers/mocks/randomMockCreators';
import Profile from './Profile';
import React from 'react';

export default {
  title: 'Components/Profile',
  component: Profile,
  decorators: [
    (Story, context) => (
      <PageContainer>
        {Story(context)}
      </PageContainer>
    ),
  ]
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args}/>;

export const Standard = Template.bind({});

Standard.args = {
  selectedUserProfile: createRandomUserProfile(),
  // @ts-ignore
  repos: MOCK_GITHUB_REPOS
};
