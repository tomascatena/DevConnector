import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';
import { validate } from '../../utils/validator';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomOutlinedInput from '../../components/CustomOutlinedInput/CustomOutlinedInput';
import {
  RegisterContainer,
  StyledForm,
  StyledLink,
} from './RegisterPage.styled';

const RegisterPage: FC = () => {
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

  return (
    <RegisterContainer>
      <Typography variant='h4' align='center'>
        Sign Up
      </Typography>

      <StyledForm>
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
          validation={validate(emailState.value).required().isEmail()}
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
            min: 2,
            max: 5,
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
              min: 2,
              max: 5,
            })
            .custom(
              'Passwords must match',
              (value) => value === passwordState.value
            )}
          type='password'
          label='Confirm password'
        />

        <Button
          sx={{ maxWidth: { sm: '10rem' } }}
          component={Link}
          to={ROUTES.REGISTER}
          variant='contained'
          disabled={isButtonDisabled}
        >
          Register
        </Button>

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
