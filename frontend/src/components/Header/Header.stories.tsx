import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story, context) => (
      <ComponentBox>
          <Story {...context}/>
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
  user: {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://s.gravatar.com/avatar/7909a0b37d81a8e276bd319f1f84c1f6?s=200&r=pg&d=retro',
    _id: 'abc123',
  }
};
