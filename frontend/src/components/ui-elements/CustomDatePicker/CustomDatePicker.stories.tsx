import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomDatePicker from './CustomDatePicker';
import { UIElementBox, InputContainer } from '@helpers/StoriesStyledComponents.styled';

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

InteractiveCustomDatePicker.args = {
  setInputState: () => {},
  label: 'From Date',
  inputState: {
    value: '2020-10-23',
    isValid: true
  }
};
