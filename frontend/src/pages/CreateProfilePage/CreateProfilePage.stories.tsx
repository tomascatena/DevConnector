import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainBox, MainLayout } from 'App.styled';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';
import CreateProfilePage from './CreateProfilePage';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';

export default {
  title: 'Pages/CreateProfilePage',
  component: CreateProfilePage,
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
} as ComponentMeta<typeof CreateProfilePage>;

const Template: ComponentStory<typeof CreateProfilePage> = (args) => <CreateProfilePage {...args} />;

export const Standard = Template.bind({});
