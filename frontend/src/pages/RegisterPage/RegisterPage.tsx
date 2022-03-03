import React, { FC, useState, FormEvent, useEffect } from 'react';
import {
  RegisterContainer,
  StyledForm,
  StyledLink,
} from './RegisterPage.styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ROUTES } from '@constants/constants';
import { validate } from '@utils/validator';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomOutlinedInput from '@components/CustomOutlinedInput/CustomOutlinedInput';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { register } from '@store/features/auth/auth.thunk';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import LoadingButton from '@components/LoadingButton/LoadingButton';

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();
  const { serverValidationErrors, loading, isAuthenticated } = useTypedSelector(
    (state) => state.auth
  );

  const [emailState, setEmailState] = useState({
    value: '',
    isValid: false,
  });

  const [firstNameState, setFirstNameState] = useState({
    value: '',
    isValid: false,
  });

  const [lastNameState, setLastNameState] = useState({
    value: '',
    isValid: false,
  });

  const [passwordState, setPasswordState] = useState({
    value: '',
    isValid: false,
  });

  const [confirmPasswordState, setConfirmPasswordState] = useState({
    value: '',
    isValid: false,
  });

  const formData = [
    emailState,
    firstNameState,
    lastNameState,
    passwordState,
    confirmPasswordState,
  ];

  const isButtonDisabled = formData.some(({ isValid }) => !isValid);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const registerForm = {
      firstName: firstNameState.value,
      lastName: lastNameState.value,
      email: emailState.value,
      password: passwordState.value,
      confirmPassword: confirmPasswordState.value,
    };

    dispatch(register(registerForm));
  };

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');

  useEffect(() => {
    if (isAuthenticated) {
      if (redirect) {
        navigate(`/${redirect}`);
      } else {
        navigate(ROUTES.DASHBOARD);
      }
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <RegisterContainer>
      <Typography variant='h4' align='center'>
        Sign Up
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
          <Typography color='text.primary'>Create Your Account</Typography>
        </Box>

        <CustomOutlinedInput
          inputState={emailState}
          setInputState={setEmailState}
          validation={validate(emailState.value)
            .required()
            .isEmail()
            .custom(
              serverValidationErrors?.email?.msg || null,
              (value) => value !== serverValidationErrors?.email?.value
            )}
          type='email'
          label='Email'
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CustomOutlinedInput
              inputState={firstNameState}
              setInputState={setFirstNameState}
              validation={validate(firstNameState.value)
                .required()
                .isAlphaWithSpecialCharacters()
                .isLength({ min: 3, max: 30 })}
              type='text'
              label='First Name'
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CustomOutlinedInput
              inputState={lastNameState}
              setInputState={setLastNameState}
              validation={validate(lastNameState.value)
                .required()
                .isAlphaWithSpecialCharacters()
                .isLength({ min: 3, max: 30 })}
              type='text'
              label='Last Name'
            />
          </Grid>
        </Grid>

        <CustomOutlinedInput
          inputState={passwordState}
          setInputState={setPasswordState}
          validation={validate(passwordState.value).required().isLength({
            min: 6,
            max: 20,
          })}
          type='password'
          label='Password'
          customHelperText='Choose a strong password'
        />

        <CustomOutlinedInput
          inputState={confirmPasswordState}
          setInputState={setConfirmPasswordState}
          validation={validate(confirmPasswordState.value)
            .required()
            .isLength({
              min: 6,
              max: 20,
            })
            .custom(
              'Passwords must match',
              (value) => value === passwordState.value
            )}
          type='password'
          label='Confirm password'
        />

        <LoadingButton
          sx={{ maxWidth: { sm: '10rem' } }}
          variant='contained'
          isDisabled={isButtonDisabled}
          isLoading={loading}
          type='submit'
          text='Register'
        />

        <Typography
          color='text.primary'
          sx={{ alignSelf: 'flex-start' }}
          variant='body1'
          align='center'
        >
          Already have an account?{' '}
          <StyledLink to={ROUTES.LOGIN}>Sign In</StyledLink>
        </Typography>
      </StyledForm>
    </RegisterContainer>
  );
};

export default RegisterPage;
