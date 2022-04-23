import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import IconWithLink from './IconWithLink';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react';

export default {
  title: 'UI-Elements/IconWithLink',
  component: IconWithLink,
  decorators: [
    (Story, context) => (
      <UIElementBox >
        <InputContainer sx={{ display: 'flex', justifyContent: 'center' }}>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof IconWithLink>;

const Template: ComponentStory<typeof IconWithLink> = (args) => <IconWithLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  href: 'https://www.google.com',
  icon: <LanguageIcon fontSize='medium'/>,
};
