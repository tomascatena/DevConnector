import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilesPage from './ProfilesPage';
import { MainBox, MainLayout } from 'App.styled';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';

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
            <Story {...context}/>
          </MainBox>
        <Footer />
      </MainLayout>
    ),
  ]
} as ComponentMeta<typeof ProfilesPage>;

const Template: ComponentStory<typeof ProfilesPage> = (args) => <ProfilesPage {...args} />;

export const Standard = Template.bind({});
