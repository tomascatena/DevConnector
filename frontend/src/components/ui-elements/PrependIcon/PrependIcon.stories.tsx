import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import { validate } from '../../../utils/validator/validator';
import CustomInput from '@ui-elements/CustomInput/CustomInput';
import PrependIcon from './PrependIcon';
import React, { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';

export default {
  title: 'UI-Elements/PrependIcon',
  component: PrependIcon,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof PrependIcon>;

const Template: ComponentStory<typeof PrependIcon> = (args) => {
  const [localInputState, setLocalInputState] = useState({ value: '', isValid: true });

  return (
    <PrependIcon
      {...args}
      icon={<TwitterIcon />}
      iconColor='#1DA1F2'
    >
      <CustomInput
        inputState={localInputState}
        setInputState={setLocalInputState}
        validation={validate(localInputState.value).isURL()}
        type='text'
        label='Twitter URL'
        placeholder='Twitter URL'
      />
    </PrependIcon>
  );
};

export const InteractivePrependIcon = Template.bind({});

InteractivePrependIcon.args = {
  icon: <TwitterIcon/>,
  iconColor: '#1DA1F2'
};
