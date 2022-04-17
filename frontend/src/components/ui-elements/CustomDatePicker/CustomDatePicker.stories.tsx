import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomDatePicker from './CustomDatePicker';
import { UIElementBox, InputContainer } from '../UIElementStoriesHelpers.styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/CustomDatePicker',
  component: CustomDatePicker,
  decorators: [
    (Story, context) => (
    <UIElementBox sx={{ alignItems: 'flex-start', pt: '4rem' }}>
      <InputContainer>
        <Story {...context}/>
      </InputContainer>
    </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof CustomDatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomDatePicker> = (args) => {
  const [localInputState, setLocalInputState] = useState(args.inputState);

  return (
    <CustomDatePicker
      {...args}
      inputState={localInputState}
      setInputState={setLocalInputState}
      isRequired
    />
  );
};

export const InteractiveCustomDatePicker = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InteractiveCustomDatePicker.args = {
  setInputState: () => {},
  label: 'From Date',
  inputState: {
    value: '2020-10-23',
    isValid: true
  }
};
