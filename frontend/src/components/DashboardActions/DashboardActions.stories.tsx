import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardActions from './DashboardActions';
import { UIElementBox, InputContainer } from '@helpers/StoriesStyledComponents.styled';

export default {
  title: 'Components/DashboardActions',
  component: DashboardActions,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer>
          <Story {...context}/>
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
