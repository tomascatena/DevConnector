import React, { FC, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import defaultTheme from './themes/defaultDarkTheme';
import defaultDarkTheme from './themes/defaultDarkTheme';
import { ThemeProvider } from '@mui/material/styles';

const HomePage = lazy(() => import('./pages/HomePage'));

const App: FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme ? defaultDarkTheme : defaultTheme}>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback='Loading...'>
                <HomePage />
              </Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
