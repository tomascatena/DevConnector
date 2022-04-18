import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoadingButton from './LoadingButton';
import { UIElementBox, InputContainer } from '@helpers/StoriesStyledComponents.styled';
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
