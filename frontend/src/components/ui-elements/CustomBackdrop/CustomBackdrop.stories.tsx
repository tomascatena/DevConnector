import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomBackdrop from './CustomBackdrop';
import { UIElementBox } from '@helpers/StoriesStyledComponents.styled';

export default {
  title: 'UI-Elements/CustomBackdrop',
  component: CustomBackdrop,
  decorators: [
    (Story, context) => <UIElementBox>{Story(context)}</UIElementBox>
  ]
} as ComponentMeta<typeof CustomBackdrop>;

const Template: ComponentStory<typeof CustomBackdrop> = (args) => <CustomBackdrop {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
