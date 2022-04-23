import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainBox, MainLayout } from 'App.styled';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import ProfilesPage from './ProfilesPage';
import React from 'react';

export default {
  title: 'Pages/ProfilesPage',
  component: ProfilesPage,
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
} as ComponentMeta<typeof ProfilesPage>;

const Template: ComponentStory<typeof ProfilesPage> = (args) => <ProfilesPage {...args} />;

export const Standard = Template.bind({});
