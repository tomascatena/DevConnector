import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import DashboardActions from './DashboardActions';
import React from 'react';

export default {
  title: 'Components/DashboardActions',
  component: DashboardActions,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof DashboardActions>;

const Template: ComponentStory<typeof DashboardActions> = (args) => <DashboardActions {...args} />;

export const InteractiveDashboardActions = Template.bind({});

InteractiveDashboardActions.args = {
  isFetchingProfile: false
};
