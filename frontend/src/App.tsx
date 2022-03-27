import { FC, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MainLayout, MainBox } from './App.styled';
import { ROUTES } from '@constants/routes';
import ProtectedRoute from '@components/routing/ProtectedRoute/ProtectedRoute';
import CustomBackdrop from '@ui-elements/CustomBackdrop/CustomBackdrop';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const LandingPage = lazy(() => import('@pages/LandingPage/LandingPage'));
const LoginPage = lazy(() => import('@pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('@pages/RegisterPage/RegisterPage'));
const DashboardPage = lazy(() => import('@pages/DashboardPage/DashboardPage'));
const CreateProfilePage = lazy(() => import('@pages/CreateProfilePage/CreateProfilePage'));
const EditProfilePage = lazy(() => import('@pages/EditProfilePage/EditProfilePage'));
const AddEducationPage = lazy(() => import('@pages/AddEducationPage/AddEducationPage'));
const AddExperiencePage = lazy(() => import('@pages/AddExperiencePage/AddExperiencePage'));
const ProfilesPage = lazy(() => import('@pages/ProfilesPage/ProfilesPage'));
const ProfilePage = lazy(() => import('@pages/ProfilePage/ProfilePage'));

const App: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const SuspenseFallback = (
    <CustomBackdrop
      isOpen={true}
      message='Loading... Please wait.'
    />
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>

          <MainLayout>
            <Header
              setIsDarkTheme={setIsDarkTheme}
              isDarkTheme={isDarkTheme}
            />

            <MainBox>
              <Suspense fallback={SuspenseFallback}>
                <Routes>
                  <Route
                    path='/'
                    element={<LandingPage />}
                  />

                  <Route
                    path={ROUTES.LOGIN}
                    element={<LoginPage />}
                  />

                  <Route
                    path={ROUTES.REGISTER}
                    element={<RegisterPage />}
                  />

                  <Route
                    path={ROUTES.PROFILES}
                    element={<ProfilesPage />}
                  />

                  <Route path={ROUTES.PROFILE}>
                    <Route
                      path=':userId'
                      element={<ProfilePage />}
                    />
                    </Route>

                  <Route
                    path={ROUTES.DASHBOARD}
                    element={
                      <ProtectedRoute>
                        <DashboardPage />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path={ROUTES.CREATE_PROFILE}
                    element={
                      <ProtectedRoute>
                        <CreateProfilePage />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path={ROUTES.EDIT_PROFILE}
                    element={
                      <ProtectedRoute>
                        <EditProfilePage />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path={ROUTES.ADD_EDUCATION}
                    element={
                      <ProtectedRoute>
                        <AddEducationPage />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path={ROUTES.ADD_EXPERIENCE}
                    element={
                      <ProtectedRoute>
                        <AddExperiencePage />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Suspense>
            </MainBox>

            <Footer />
          </MainLayout>
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
