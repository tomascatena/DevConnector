import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import CustomBackdrop from './CustomBackdrop';
import React from 'react';

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
