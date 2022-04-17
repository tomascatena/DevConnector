import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextWithIcon from './TextWithIcon';
import { UIElementBox, InputContainer } from '@helpers/StoriesStyledComponents.styled';
import PersonIcon from '@mui/icons-material/Person';

export default {
  title: 'UI-Elements/TextWithIcon',
  component: TextWithIcon,
  decorators: [
    (Story, context) => (
    <UIElementBox>
      <InputContainer sx={{ display: 'flex', justifyContent: 'center' }}>
        <Story {...context}/>
      </InputContainer>
    </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof TextWithIcon>;

const Template: ComponentStory<typeof TextWithIcon> = (args) => {
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
