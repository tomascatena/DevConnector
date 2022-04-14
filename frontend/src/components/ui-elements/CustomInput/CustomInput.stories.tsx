import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { validate } from '../../../utils/validator';
import CustomInput from './CustomInput';
import { UIElementBox, InputContainer } from '../UIElementStoriesHelpers.styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/CustomInput',
  component: CustomInput,
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
} as ComponentMeta<typeof CustomInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomInput> = (args) => {
  const [localInputState, setLocalInputState] = useState(args.inputState);

  return (
    <CustomInput
      {...args}
      inputState={localInputState}
      setInputState={setLocalInputState}
      validation={validate(localInputState.value).required().isLength({ min: 3, max: 20 })}
      isRequired
    />
  );
};

export const InteractiveCustomInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InteractiveCustomInput.args = {
  setInputState: () => {},
  type: 'text',
  label: 'Location',
  placeholder: 'Location',
  customHelperText: 'City & state suggested (eg. Austin, TX).',
  inputState: {
    value: '',
    isValid: true
  }
};
