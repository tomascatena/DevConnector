import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RegisterPage from './RegisterPage';
import { MainBox, MainLayout } from 'App.styled';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { createRandomUser } from '../../helpers/mocks/randomMockCreators';

export default {
  title: 'Pages/RegisterPage',
  component: RegisterPage,
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
} as ComponentMeta<typeof RegisterPage>;

const Template: ComponentStory<typeof RegisterPage> = (args) => <RegisterPage {...args} />;

export const Standard = Template.bind({});
