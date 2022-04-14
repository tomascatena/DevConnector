import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChipsInput from './ChipsInput';
import { UIElementBox, InputContainer } from '../UIElementStoriesHelpers.styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/ChipsInput',
  component: ChipsInput,
  decorators: [
    (Story, context) => (
    <UIElementBox>
      <InputContainer>
        <Story {...context}/>
      </InputContainer>
    </UIElementBox>
    )
  ]
} as ComponentMeta<typeof ChipsInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChipsInput> = (args) => <ChipsInput {...args} />;

const LABEL = 'Skills';
const PLACEHOLDER = 'Add a skill and a comma.';
const CUSTOM_HELPER_TEXT = 'Add your skills separated by commas (eg. Javascript, PHP, Java, SQL, etc).';

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  inputState: {
    value: ['PHP', 'Javascript', 'React', 'NodeJS'],
    isValid: true,
  },
  setInputState: () => {},
  label: LABEL,
  placeholder: PLACEHOLDER,
  customHelperText: CUSTOM_HELPER_TEXT,
};
