import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC, Suspense, lazy, useState } from 'react';
import { MainBox, MainLayout } from './App.styled';
import { ROUTES } from '@constants/routes';
import { ThemeProvider } from '@mui/material/styles';
import { useTypedSelector } from './hooks';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CustomBackdrop from '@ui-elements/CustomBackdrop/CustomBackdrop';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ProtectedRoute from '@components/routing/ProtectedRoute/ProtectedRoute';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
// import { InputsVariant } from './typings/types';

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

// const INPUTS_VARIANT: InputsVariant = 'filled';

const App: FC = () => {
  const { isAuthenticated, user } = useTypedSelector((state) => state.auth);

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
              isAuthenticated={isAuthenticated}
              user={user}
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
                    element={<LoginPage/>}
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
