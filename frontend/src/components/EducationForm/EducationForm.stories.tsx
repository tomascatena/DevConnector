import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EducationForm from './EducationForm';
import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';

export default {
  title: 'Components/EducationForm',
  component: EducationForm,
  decorators: [
    (Story, context) => (
      <ComponentBox>
          <Story {...context}/>
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof EducationForm>;

const Template: ComponentStory<typeof EducationForm> = (args) => <EducationForm {...args} />;

export const EducationFormFilled = Template.bind({});

EducationFormFilled.args = {
  loading: false,
  dispatchCreateOrUpdateEducation: () => {},
  inputsVariant: 'filled'
};

export const EducationFormOutlined = Template.bind({});

EducationFormOutlined.args = {
  loading: false,
  dispatchCreateOrUpdateEducation: () => {},
  inputsVariant: 'outlined'
};

export const EducationFormStandard = Template.bind({});

EducationFormStandard.args = {
  loading: false,
  dispatchCreateOrUpdateEducation: () => {},
  inputsVariant: 'standard'
};
