import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExperienceForm from './ExperienceForm';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';

export default {
  title: 'Components/ExperienceForm',
  component: ExperienceForm,
  decorators: [
    (Story, context) => (
      <ComponentBox>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceForm>;

const Template: ComponentStory<typeof ExperienceForm> = (args) => <ExperienceForm {...args} />;

export const ExperienceFormFilled = Template.bind({});

ExperienceFormFilled.args = {
  loading: false,
  dispatchCreateOrUpdateExperience: () => {},
  inputsVariant: 'filled'
};

export const ExperienceFormOutlined = Template.bind({});

ExperienceFormOutlined.args = {
  loading: false,
  dispatchCreateOrUpdateExperience: () => {},
  inputsVariant: 'outlined'
};

export const ExperienceFormStandard = Template.bind({});

ExperienceFormStandard.args = {
  loading: false,
  dispatchCreateOrUpdateExperience: () => {},
  inputsVariant: 'standard'
};
