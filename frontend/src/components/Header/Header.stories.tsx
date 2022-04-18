import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { createRandomUser } from '@helpers/mocks/randomMockCreators';

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
  user: createRandomUser()
};
