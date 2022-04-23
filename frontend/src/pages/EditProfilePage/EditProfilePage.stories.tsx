import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainBox, MainLayout } from 'App.styled';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';
import EditProfilePage from './EditProfilePage';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';

export default {
  title: 'Pages/EditProfilePage',
  component: EditProfilePage,
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
} as ComponentMeta<typeof EditProfilePage>;

const Template: ComponentStory<typeof EditProfilePage> = (args) => <EditProfilePage {...args} />;

export const Standard = Template.bind({});
