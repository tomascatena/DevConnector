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

      {
        [
          { top: 0, severity: 'error', message: 'This Is An Error Alert' },
          { top: '5rem', severity: 'warning', message: 'This Is A Warning Alert' },
          { top: '10rem', severity: 'info', message: 'This Is An Info Alert' },
          { top: '15rem', severity: 'success', message: 'This Is A Success Alert' },
        ].map((alert, index) => {
          return (
            <Box
              key={index}
              sx={{ position: 'absolute', top: alert.top, width: '100%' }}
            >
                <CustomAlert
                  {...args}
                  shouldShowAlert={showAlert}
                  severity={(alert.severity as 'error' | 'warning' | 'info' | 'success')}
                  message={alert.message}
                />
            </Box>
          );
        })
      }
    </Box>
  );
};

export const Default = Template.bind({});
