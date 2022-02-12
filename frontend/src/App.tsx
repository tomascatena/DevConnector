import React, { FC, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import defaultTheme from './Themes/defaultDarkTheme';
import defaultDarkTheme from './Themes/defaultDarkTheme';
import { ThemeProvider } from '@mui/material/styles';

const HomePage = lazy(() => import('./Pages/HomePage'));

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
