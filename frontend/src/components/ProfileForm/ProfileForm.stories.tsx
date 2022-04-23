import { ComponentBox } from '@helpers/StoriesStyledComponents.styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MOCK_USER_PROFILE } from '@helpers/mocks/mocks';
import ProfileForm from './ProfileForm';
import React from 'react';

export default {
  title: 'Components/ProfileForm',
  component: ProfileForm,
  decorators: [
    (Story, context) => (
      <ComponentBox>
        {Story(context)}
      </ComponentBox>
    ),
  ]
} as ComponentMeta<typeof ProfileForm>;

const Template: ComponentStory<typeof ProfileForm> = (args) => <ProfileForm {...args} />;

export const ProfileFormFilled = Template.bind({});

ProfileFormFilled.args = {
  profile: MOCK_USER_PROFILE,
  loading: false,
  dispatchCreateOrUpdateProfile: () => {},
  inputsVariant: 'filled'
};

export const ProfileFormOutlined = Template.bind({});

ProfileFormOutlined.args = {
  profile: MOCK_USER_PROFILE,
  loading: false,
  dispatchCreateOrUpdateProfile: () => {},
  inputsVariant: 'outlined'
};

export const ProfileFormStandard = Template.bind({});

ProfileFormStandard.args = {
  profile: MOCK_USER_PROFILE,
  loading: false,
  dispatchCreateOrUpdateProfile: () => {},
  inputsVariant: 'standard'
};
