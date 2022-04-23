import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import LoadingButton from './LoadingButton';
import React from 'react';
import SaveIcon from '@mui/icons-material/Save';

export default {
  title: 'UI-Elements/LoadingButton',
  component: LoadingButton,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer sx={{ display: 'flex', justifyContent: 'center' }}>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof LoadingButton>;

const Template: ComponentStory<typeof LoadingButton> = (args) => <LoadingButton {...args}/>;

export const Default = Template.bind({});

Default.args = {
  variant: 'contained',
  isLoading: true,
  isDisabled: false,
  type: 'submit',
  text: 'Save',
  startIcon: <SaveIcon/>,
};
