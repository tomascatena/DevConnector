import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import TextWithIcon from './TextWithIcon';

export default {
  title: 'UI-Elements/TextWithIcon',
  component: TextWithIcon,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer sx={{ display: 'flex', justifyContent: 'center' }}>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof TextWithIcon>;

const Template: ComponentStory<typeof TextWithIcon> = () => {
  return (
    <TextWithIcon
      icon={<PersonIcon color='action' />}
      text="Let's get some information to make your profile stand out."
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  icon: <PersonIcon color='action' />,
  text: "Let's get some information to make your profile stand out."
};
