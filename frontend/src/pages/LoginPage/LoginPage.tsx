import React, { FC, useState, FormEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ROUTES } from '../../constants/constants';
import { validate } from '../../utils/validator';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomOutlinedInput from '../../components/CustomOutlinedInput/CustomOutlinedInput';
import { LoginContainer, StyledForm, StyledLink } from './LoginPage.styled';
import { useAppDispatch, useTypedSelector } from '../../hooks';
import { userLogin } from '../../store/features/userLogin/userLogin.thunk';

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();

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

    dispatch(userLogin(loginForm));
  };

  return (
    <LoginContainer>
      <Typography variant='h4' align='center'>
        Sign In
      </Typography>

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
        />

        <CustomOutlinedInput
          inputState={passwordState}
          setInputState={setPasswordState}
          validation={validate(passwordState.value).required()}
          type='password'
          label='Password'
        />

        <Button
          sx={{ maxWidth: { sm: '10rem' } }}
          variant='contained'
          disabled={isButtonDisabled}
          type='submit'
        >
          Login
        </Button>

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
