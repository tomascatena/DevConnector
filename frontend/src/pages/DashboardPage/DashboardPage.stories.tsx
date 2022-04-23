import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainBox, MainLayout } from 'App.styled';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';
import DashboardPage from './DashboardPage';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';

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
