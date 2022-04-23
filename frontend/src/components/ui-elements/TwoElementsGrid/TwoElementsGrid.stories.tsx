import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import { validate } from '../../../utils/validator/validator';
import CustomInput from '@ui-elements/CustomInput/CustomInput';
import React, { useState } from 'react';
import TwoElementsGrid from './TwoElementsGrid';

export default {
  title: 'UI-Elements/TwoElementsGrid',
  component: TwoElementsGrid,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof TwoElementsGrid>;

const Template: ComponentStory<typeof TwoElementsGrid> = () => {
  const [localFirstInputState, setLocalFirstInputState] = useState({ value: '', isValid: true });
  const [localSecondInputState, setSecondLocalInputState] = useState({ value: '', isValid: true });

  return (
    <TwoElementsGrid>
      <CustomInput
        inputState={localFirstInputState}
        setInputState={setLocalFirstInputState}
        validation={validate(localFirstInputState.value)
          .required()
          .isAlphaWithSpecialCharacters()
          .isLength({ min: 3, max: 30 })}
        type='text'
        label='First Name'
        isRequired
      />

      <CustomInput
        inputState={localSecondInputState}
        setInputState={setSecondLocalInputState}
        validation={validate(localSecondInputState.value)
          .required()
          .isAlphaWithSpecialCharacters()
          .isLength({ min: 3, max: 30 })}
        type='text'
        label='Last Name'
        isRequired
      />
    </TwoElementsGrid>
  );
};

export const InteractiveTwoElementsGrid = Template.bind({});
