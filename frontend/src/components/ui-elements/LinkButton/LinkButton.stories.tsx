import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkButton from './LinkButton';
import { UIElementBox, InputContainer } from '../UIElementStoriesHelpers.styled';
import PersonIcon from '@mui/icons-material/Person';
import { ROUTES } from '@constants/routes';

export default {
  title: 'UI-Elements/LinkButton',
  component: LinkButton,
  decorators: [
    (Story, context) => (
    <UIElementBox>
      <InputContainer sx={{ display: 'flex', justifyContent: 'center' }}>
        <Story {...context}/>
      </InputContainer>
    </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => {
  return (
    <LinkButton {...args}>
      Edit Profile
    </LinkButton>
  );
};

export const Default = Template.bind({});

Default.args = {
  to: ROUTES.EDIT_PROFILE,
  startIcon: <PersonIcon />
};
