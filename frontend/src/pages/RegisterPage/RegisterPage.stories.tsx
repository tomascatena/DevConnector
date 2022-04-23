import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainBox, MainLayout } from 'App.styled';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';
import RegisterPage from './RegisterPage';

export default {
  title: 'Pages/RegisterPage',
  component: RegisterPage,
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
} as ComponentMeta<typeof RegisterPage>;

const Template: ComponentStory<typeof RegisterPage> = (args) => <RegisterPage {...args} />;

export const Standard = Template.bind({});
