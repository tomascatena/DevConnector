import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconWithLink from './IconWithLink';
import { UIElementBox, InputContainer } from '../UIElementStoriesHelpers.styled';
import LanguageIcon from '@mui/icons-material/Language';

export default {
  title: 'UI-Elements/IconWithLink',
  component: IconWithLink,
  decorators: [
    (Story, context) => (
    <UIElementBox >
      <InputContainer sx={{ display: 'flex', justifyContent: 'center' }}>
        <Story {...context}/>
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
