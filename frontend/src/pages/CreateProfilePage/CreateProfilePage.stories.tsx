import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CreateProfilePage from './CreateProfilePage';
import { MainBox, MainLayout } from 'App.styled';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';

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
            <Story {...context}/>
          </MainBox>
        <Footer />
      </MainLayout>
    ),
  ]
} as ComponentMeta<typeof CreateProfilePage>;

const Template: ComponentStory<typeof CreateProfilePage> = (args) => <CreateProfilePage {...args} />;

export const Standard = Template.bind({});
