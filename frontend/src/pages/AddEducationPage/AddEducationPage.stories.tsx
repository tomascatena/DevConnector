import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainBox, MainLayout } from 'App.styled';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';
import AddEducationPage from './AddEducationPage';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';

export default {
  title: 'Pages/AddEducationPage',
  component: AddEducationPage,
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
} as ComponentMeta<typeof AddEducationPage>;

const Template: ComponentStory<typeof AddEducationPage> = (args) => <AddEducationPage {...args} />;

export const Standard = Template.bind({});
