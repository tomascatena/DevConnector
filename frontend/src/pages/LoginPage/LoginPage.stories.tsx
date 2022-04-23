import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainBox, MainLayout } from 'App.styled';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import LoginPage from './LoginPage';
import React from 'react';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  decorators: [
    (Story, context) => (
      <MainLayout>
        <Header
          setIsDarkTheme={() => {}}
          isDarkTheme={true}
          isAuthenticated={true}
          user={createRandomUser()}
        />
        <MainBox>
          {Story(context)}
        </MainBox>
        <Footer />
      </MainLayout>
    ),
  ]
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />;

export const Standard = Template.bind({});
