import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createRandomExperience } from '@helpers/mocks/randomMockCreators';
import ExperienceForm from './ExperienceForm';
import React from 'react';

export default {
  title: 'Components/ExperienceForm',
  component: ExperienceForm,
  decorators: [
    (Story, context) => (
      <ComponentBox>
        {Story(context)}
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ExperienceForm>;

const Template: ComponentStory<typeof ExperienceForm> = (args) => <ExperienceForm {...args} />;

export const ExperienceFormFilled = Template.bind({});

ExperienceFormFilled.args = {
  loading: false,
  experience: createRandomExperience(),
  dispatchCreateOrUpdateExperience: () => {},
  inputsVariant: 'filled'
};

export const ExperienceFormOutlined = Template.bind({});

ExperienceFormOutlined.args = {
  loading: false,
  experience: createRandomExperience(),
  dispatchCreateOrUpdateExperience: () => {},
  inputsVariant: 'outlined'
};

export const ExperienceFormStandard = Template.bind({});

ExperienceFormStandard.args = {
  loading: false,
  experience: createRandomExperience(),
  dispatchCreateOrUpdateExperience: () => {},
  inputsVariant: 'standard'
};
