import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import { validate } from '../../../utils/validator/validator';
import CustomInput from './CustomInput';
import React, { useState } from 'react';

export default {
  title: 'UI-Elements/CustomInput',
  component: CustomInput,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof CustomInput>;

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
