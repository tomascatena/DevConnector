import React, { FC, useState, FormEvent, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ROUTES } from '@constants/constants';
import { validate } from '@utils/validator';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomOutlinedInput from '@components/CustomOutlinedInput/CustomOutlinedInput';
import { LoginContainer, StyledForm, StyledLink } from './LoginPage.styled';
import { useAppDispatch } from '@hooks/index';
import { login } from '@store/features/auth/auth.thunk';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CustomAlert from '@components/CustomAlert/CustomAlert';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import LoadingButton from '@components/LoadingButton/LoadingButton';
import { LocationState } from '@components/routing/ProtectedRoute/ProtectedRoute';

const RegisterPage: FC = () => {
  const [emailState, setEmailState] = useState({
    value: '',
    isValid: false,
  });

  const [passwordState, setPasswordState] = useState({
    value: '',
    isValid: false,
  });

  const formData = [emailState, passwordState];

  const isButtonDisabled = formData.some(({ isValid }) => !isValid);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginForm = {
      email: emailState.value,
      password: passwordState.value,
    };

    dispatch(login(loginForm));
  };

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const dispatch = useAppDispatch();
  const {
    serverValidationErrors, //
    loading,
    isAuthenticated,
  } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      if (state?.from?.pathname) {
        navigate(state?.from?.pathname);
      } else {
        navigate(ROUTES.DASHBOARD);
      }
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <LoginContainer>
      <Typography variant='h4' align='center'>
        Sign In
      </Typography>

      <CustomAlert
        shouldShowAlert={Boolean(serverValidationErrors)}
        message='Invalid credentials'
      />

      <StyledForm noValidate onSubmit={handleFormSubmit}>
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'flex-start',
            maxWidth: '30rem',
          }}
        >
          <PersonOutlineIcon color='action' />

          <Typography color='text.primary'>Sign Into Your Account</Typography>
        </Box>

        <CustomOutlinedInput
          inputState={emailState}
          setInputState={setEmailState}
          validation={validate(emailState.value).required()}
          type='email'
          label='Email'
          showCheckIcon={false}
        />

        <CustomOutlinedInput
          inputState={passwordState}
          setInputState={setPasswordState}
          validation={validate(passwordState.value).required()}
          type='password'
          label='Password'
          showCheckIcon={false}
        />

        <LoadingButton
          sx={{ maxWidth: { sm: '10rem' } }}
          variant='contained'
          isDisabled={isButtonDisabled}
          isLoading={loading}
          type='submit'
          text='Login'
        />

        <Typography
          color='text.primary'
          sx={{ alignSelf: 'flex-start' }}
          variant='body1'
          align='center'
        >
          Do not have an account?{' '}
          <StyledLink to={ROUTES.REGISTER}>Sign Up</StyledLink>
        </Typography>
      </StyledForm>
    </LoginContainer>
  );
};

export default RegisterPage;
