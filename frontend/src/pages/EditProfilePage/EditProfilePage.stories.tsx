import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditProfilePage from './EditProfilePage';
import { MainBox, MainLayout } from 'App.styled';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';

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
            <Story {...context}/>
          </MainBox>
        <Footer />
      </MainLayout>
    ),
  ]
} as ComponentMeta<typeof EditProfilePage>;

const Template: ComponentStory<typeof EditProfilePage> = (args) => <EditProfilePage {...args} />;

export const Standard = Template.bind({});
