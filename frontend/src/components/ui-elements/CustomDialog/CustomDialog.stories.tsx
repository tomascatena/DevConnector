import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomDialog from './CustomDialog';
import { UIElementBox, InputContainer } from '../UIElementStoriesHelpers.styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/CustomDialog',
  component: CustomDialog,
  argTypes: {
    type: { control: 'select', options: ['text', 'password'], defaultValue: 'text' },
  },
  decorators: [
    (Story, context) => (
    <UIElementBox>
      <InputContainer>
        <Story {...context}/>
      </InputContainer>
    </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof CustomDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomDialog> = (args) => {
  return (
    <CustomDialog
      {...args}
      title='Custom Dialog Title'
    >
      <h3>Content</h3>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ipsum odit iste, ut explicabo rem labore dolores ratione ullam alias nam nobis ducimus architecto facere obcaecati harum saepe nemo. Placeat?</p>
    </CustomDialog>
  );
};

export const InteractiveCustomDialog = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InteractiveCustomDialog.args = {
  setOpenDialog: () => {},
  isDialogOpen: true
};
