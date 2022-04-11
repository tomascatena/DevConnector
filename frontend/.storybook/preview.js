import React from 'react';
import { ThemeProvider } from '@mui/material';
import darkTheme from '../src/themes/darkTheme';
import lightTheme from '../src/themes/lightTheme';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

// https://github.com/nemrosim/storybook-decorators-examples
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'lightning',
      items: ['dark', 'light'],
      showName: true,
    },
  },
};

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;

    return (
      <React.StrictMode>
        <CssBaseline />

        <Emotion10ThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MainBox>
                <Story {...context} />
              </MainBox>
            </LocalizationProvider>
          </ThemeProvider>
        </Emotion10ThemeProvider>
      </React.StrictMode>
    );
  },
];
