import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainBox, MainLayout } from 'App.styled';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';
import AddExperiencePage from './AddExperiencePage';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';

export default {
  title: 'Pages/AddExperiencePage',
  component: AddExperiencePage,
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
} as ComponentMeta<typeof AddExperiencePage>;

const Template: ComponentStory<typeof AddExperiencePage> = (args) => <AddExperiencePage {...args} />;

export const Standard = Template.bind({});
