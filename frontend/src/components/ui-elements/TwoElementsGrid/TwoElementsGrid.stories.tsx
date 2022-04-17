import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TwoElementsGrid from './TwoElementsGrid';
import { UIElementBox, InputContainer } from '@helpers/StoriesStyledComponents.styled';
import CustomInput from '@ui-elements/CustomInput/CustomInput';
import { validate } from '../../../utils/validator/validator';

export default {
  title: 'UI-Elements/TwoElementsGrid',
  component: TwoElementsGrid,
  decorators: [
    (Story, context) => (
    <UIElementBox>
      <InputContainer>
        <Story {...context}/>
      </InputContainer>
    </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof TwoElementsGrid>;

const Template: ComponentStory<typeof TwoElementsGrid> = (args) => {
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
