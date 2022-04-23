import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import CircularLoader from './CircularLoader';

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
