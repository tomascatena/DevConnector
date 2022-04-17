import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomAlert from './CustomAlert';
import { UIElementBox } from '../UIElementStoriesHelpers.styled';
import { Button, Box } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/CustomAlert',
  component: CustomAlert,
  decorators: [
    (Story, context) => <UIElementBox><Story {...context}/></UIElementBox>
  ]
} as ComponentMeta<typeof CustomAlert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
