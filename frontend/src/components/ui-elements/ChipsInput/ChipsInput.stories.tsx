import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import ChipsInput from './ChipsInput';
import React, { useState } from 'react';

export default {
  title: 'UI-Elements/ChipsInput',
  component: ChipsInput,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    )
  ],
} as ComponentMeta<typeof ChipsInput>;

const Template: ComponentStory<typeof ChipsInput> = (args) => {
  const [localInputState, setLocalInputState] = useState(args.inputState);

  return (
    <ChipsInput
      {...args}
      inputState={localInputState}
      setInputState={setLocalInputState}
      isRequired
    />
  );
};

const LABEL = 'Skills';
const PLACEHOLDER = 'Add a skill and a comma.';
const CUSTOM_HELPER_TEXT = 'Add your skills separated by commas (eg. Javascript, PHP, Java, SQL, etc).';

export const InteractiveChipsInput = Template.bind({});

InteractiveChipsInput.args = {
  inputState: {
    value: ['PHP', 'Javascript', 'React', 'NodeJS'],
    isValid: true,
  },
  setInputState: () => {},
  label: LABEL,
  placeholder: PLACEHOLDER,
  customHelperText: CUSTOM_HELPER_TEXT,
};
