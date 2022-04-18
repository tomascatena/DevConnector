import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddEducationPage from './AddEducationPage';
import { MainBox, MainLayout } from 'App.styled';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';

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
            <Story {...context}/>
          </MainBox>
        <Footer />
      </MainLayout>
    ),
  ]
} as ComponentMeta<typeof AddEducationPage>;

const Template: ComponentStory<typeof AddEducationPage> = (args) => <AddEducationPage {...args} />;

export const Standard = Template.bind({});
