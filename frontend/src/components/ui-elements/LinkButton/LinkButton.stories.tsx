import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import { ROUTES } from '@constants/routes';
import LinkButton from './LinkButton';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';

export default {
  title: 'UI-Elements/LinkButton',
  component: LinkButton,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer sx={{ display: 'flex', justifyContent: 'center' }}>
          {Story(context)}
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
