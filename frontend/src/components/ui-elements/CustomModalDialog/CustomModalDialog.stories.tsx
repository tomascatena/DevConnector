import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer, UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import { Typography } from '@mui/material';
import CustomModalDialog from './CustomModalDialog';
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';

export default {
  title: 'UI-Elements/CustomModalDialog',
  component: CustomModalDialog,
  decorators: [
    (Story, context) => (
      <UIElementBox>
        <InputContainer>
          {Story(context)}
        </InputContainer>
      </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof CustomModalDialog>;

const Template: ComponentStory<typeof CustomModalDialog> = (args) => {
  return (
    <CustomModalDialog
      {...args}
      dialogTitle='Permanently Delete Account'
      setOpenDialog={() => {}}
      buttonText='Delete'
      onButtonClick={() => {}}
      buttonColor='error'
    >
      <div>
        <Typography>
          Are you sure you want to delete your account?
          This includes your profile, posts and comments.
        </Typography>

        <Typography sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <WarningIcon color='warning'/> This operation cannot be undone.
        </Typography>
      </div>
    </CustomModalDialog>
  );
};

export const InteractiveCustomModalDialog = Template.bind({});

InteractiveCustomModalDialog.args = {
  setOpenDialog: () => {},
  isDialogOpen: true
};
