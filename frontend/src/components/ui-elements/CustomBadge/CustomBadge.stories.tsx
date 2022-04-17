import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomBadge } from './CustomBadge';
import { UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import { Box } from '@mui/material';

export default {
  title: 'UI-Elements/CustomBadge',
  component: CustomBadge,
  decorators: [
    (Story, context) => <UIElementBox><Story {...context}/></UIElementBox>
  ]
} as ComponentMeta<typeof CustomBadge>;

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

Default.args = {
  badgeColor: 'primary',
};
