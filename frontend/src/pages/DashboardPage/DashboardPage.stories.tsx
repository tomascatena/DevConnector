import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardPage from './DashboardPage';
import { MainBox, MainLayout } from 'App.styled';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';

export default {
  title: 'Pages/DashboardPage',
  component: DashboardPage,
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
} as ComponentMeta<typeof DashboardPage>;

const Template: ComponentStory<typeof DashboardPage> = (args) => <DashboardPage {...args} />;

export const Standard = Template.bind({});
