import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createRandomUser } from '@helpers/mocks/randomMockCreators';
import Header from './Header';
import React from 'react';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story, context) => (
      <ComponentBox>
        {Story(context)}
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;

export const Standard = Template.bind({});

Standard.args = {
  setIsDarkTheme: () => {},
  isDarkTheme: true,
  isAuthenticated: false,
  user: createRandomUser()
};
