import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircularLoader from './CircularLoader';
import { UIElementBox } from '@helpers/StoriesStyledComponents.styled';

export default {
  title: 'UI-Elements/CircularLoader',
  component: CircularLoader,
  decorators: [
    (Story, context) => <UIElementBox>{Story(context)}</UIElementBox>
  ]
} as ComponentMeta<typeof CircularLoader>;

const Template: ComponentStory<typeof CircularLoader> = (args) => <CircularLoader {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 80,
  thickness: 4
};
