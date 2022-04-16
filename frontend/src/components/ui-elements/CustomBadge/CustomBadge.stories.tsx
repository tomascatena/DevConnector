import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomBadge } from './CustomBadge';
import { UIElementBox } from '../UIElementStoriesHelpers.styled';
import { Box } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/CustomBadge',
  component: CustomBadge,
  decorators: [
    (Story, context) => <UIElementBox><Story {...context}/></UIElementBox>
  ]
} as ComponentMeta<typeof CustomBadge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomBadge> = (args) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

      {
        ['primary', 'secondary', 'error', 'warning', 'info', 'success'].map((badge, index) =>
          <CustomBadge
            key={index}
            {...args}
            badgeColor={(badge as 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success')}
          >
            Custom Badge {badge.replace(/^\w/, (c) => c.toUpperCase())}
          </CustomBadge>
        )
      }
    </Box>
  );
};

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  badgeColor: 'primary',
};