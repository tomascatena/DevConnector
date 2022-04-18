import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LandingPage from './LandingPage';
import { MainBox, MainLayout } from 'App.styled';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
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
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => <LandingPage {...args} />;

export const Standard = Template.bind({});
