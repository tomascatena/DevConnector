import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import { PROFESSIONAL_STATUS_OPTIONS } from '@constants/constants';
import { validate } from '../../../utils/validator/validator';
import CustomSelect from './CustomSelect';
import React, { useState } from 'react';

export default {
  title: 'UI-Elements/CustomSelect',
  component: CustomSelect,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args) => {
  const [localInputState, setLocalInputState] = useState(args.inputState);

  return (
    <CustomSelect
      {...args}
      inputState={localInputState}
      setInputState={setLocalInputState}
      validation={validate(localInputState.value).required()}
    />
  );
};

export const InteractiveCustomSelect = Template.bind({});

InteractiveCustomSelect.args = {
  setInputState: () => {},
  inputState: {
    value: '',
    isValid: true
  },
  label: 'Select Your Professional Status',
  customHelperText: 'Give us an idea of where you are in your career.',
  options: PROFESSIONAL_STATUS_OPTIONS,
};
