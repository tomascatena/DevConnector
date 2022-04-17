import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from './Footer';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story, context) => (
      <ComponentBox>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Standard = Template.bind({});
