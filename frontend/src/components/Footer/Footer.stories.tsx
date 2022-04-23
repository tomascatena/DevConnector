import { Box } from '@mui/material';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';
import React from 'react';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story, context) => (
      <ComponentBox>
        <Box sx={{ width: '100%' }}>
          {Story(context)}
        </Box>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Standard = Template.bind({});
