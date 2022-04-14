import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircularLoader from './CircularLoader';
import { UIElementBox } from '../UIElementStoriesHelpers.styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/CircularLoader',
  component: CircularLoader,
  decorators: [
    (Story, context) => <UIElementBox><Story {...context}/></UIElementBox>
  ]
} as ComponentMeta<typeof CircularLoader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircularLoader> = (args) => <CircularLoader {...args} />;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  size: 80,
  thickness: 4
};
