import React from 'react';
import { ThemeProvider } from '@mui/material';
import darkTheme from '../src/themes/darkTheme';
import lightTheme from '../src/themes/lightTheme';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
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

export const decorators = [
  // MUI Theme
  (Story, context) => {
    const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;

    return (
      <React.StrictMode>
        <CssBaseline />

        <Emotion10ThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Story {...context} />
            </LocalizationProvider>
          </ThemeProvider>
        </Emotion10ThemeProvider>
      </React.StrictMode>
    );
  },
  // Redux Toolkit
  (Story, context) => (
    <Provider store={store}>
      <Story {...context} />
    </Provider>
  ),
  // React Router
  (Story, context) => (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Story {...context} />} />
      </Routes>
    </BrowserRouter>
  ),
];
