import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddExperiencePage from './AddExperiencePage';
import { MainBox, MainLayout } from 'App.styled';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';

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
            <Story {...context}/>
          </MainBox>
        <Footer />
      </MainLayout>
    ),
  ]
} as ComponentMeta<typeof AddExperiencePage>;

const Template: ComponentStory<typeof AddExperiencePage> = (args) => <AddExperiencePage {...args} />;

export const Standard = Template.bind({});
