import { Box, Button } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UIElementBox } from '@helpers/StoriesStyledComponents.styled';
import CustomAlert from './CustomAlert';
import React, { useState } from 'react';

export default {
  title: 'UI-Elements/CustomAlert',
  component: CustomAlert,
  decorators: [
    (Story, context) => <UIElementBox>{Story(context)}</UIElementBox>
  ]
} as ComponentMeta<typeof CustomAlert>;

const Template: ComponentStory<typeof CustomAlert> = (args) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <Box sx={{ position: 'relative', display: 'flex', width: '100%', height: '100%' }}>
      <Box>
        <Button
          sx={{ ml: '2rem', mt: '2rem' }}
          onClick={() => setShowAlert(!showAlert)}
          variant='contained'
        >
          {showAlert ? 'Reset' : 'Show'} Alert
        </Button>
      </Box>

      <CustomAlert
        {...args}
        shouldShowAlert={showAlert}
      />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  severity: 'error',
  message: 'Alert message'
};
