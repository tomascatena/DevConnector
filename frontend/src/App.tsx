import React, { FC, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MainLayout, MainBox } from './App.styled';
import { ROUTES } from './constants/constants';

const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

const App: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <MainLayout>
          <Header setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />

          <MainBox>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
              </Routes>
            </Suspense>
          </MainBox>

          <Footer />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
