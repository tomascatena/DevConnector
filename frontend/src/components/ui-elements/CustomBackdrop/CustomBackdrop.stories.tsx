import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomBackdrop from './CustomBackdrop';
import { UIElementBox } from '../UIElementStoriesHelpers.styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/CustomBackdrop',
  component: CustomBackdrop,
  decorators: [
    (Story, context) => <UIElementBox><Story {...context}/></UIElementBox>
  ]
} as ComponentMeta<typeof CustomBackdrop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomBackdrop> = (args) => <CustomBackdrop {...args} />;

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  isOpen: true,
};
