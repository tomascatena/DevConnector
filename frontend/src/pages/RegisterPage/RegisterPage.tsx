import { FC, useState, FormEvent, useEffect } from 'react';
import {
  RegisterContainer,
  RegisterPaper,
  StyledForm,
  StyledLink,
} from './RegisterPage.styled';
import { Typography } from '@mui/material';
import { ROUTES } from '@constants/routes';
import { validate } from '@utils/validator';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomInput from '@ui-elements/CustomInput/CustomInput';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { register } from '@store/features/auth/auth.thunk';
import { useNavigate } from 'react-router';
import LoadingButton from '@components/ui-elements/LoadingButton/LoadingButton';
import TextWithIcon from '@ui-elements/TextWithIcon/TextWithIcon';
import TwoElementsGrid from '@components/ui-elements/TwoElementsGrid/TwoElementsGrid';

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

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.DASHBOARD);
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <RegisterContainer>
      <RegisterPaper elevation={3}>
        <Typography
          variant='h4'
          align='center'
        >
          Sign Up
        </Typography>

        <StyledForm
          noValidate
          onSubmit={handleFormSubmit}
        >
          <TextWithIcon
            text='Create Your Account'
            icon={<PersonOutlineIcon color='action' />}
          />

          <CustomInput
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
            isRequired
            autofocus
          />

          <TwoElementsGrid>
            <CustomInput
              inputState={firstNameState}
              setInputState={setFirstNameState}
              validation={validate(firstNameState.value)
                .required()
                .isAlphaWithSpecialCharacters()
                .isLength({ min: 3, max: 30 })}
              type='text'
              label='First Name'
              isRequired
            />

            <CustomInput
              inputState={lastNameState}
              setInputState={setLastNameState}
              validation={validate(lastNameState.value)
                .required()
                .isAlphaWithSpecialCharacters()
                .isLength({ min: 3, max: 30 })}
              type='text'
              label='Last Name'
              isRequired
            />
          </TwoElementsGrid>

          <CustomInput
            inputState={passwordState}
            setInputState={setPasswordState}
            validation={validate(passwordState.value).required().isLength({
              min: 6,
              max: 20,
            })}
            type='password'
            label='Password'
            customHelperText='Choose a strong password'
            isRequired
          />

          <CustomInput
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
            isRequired
          />

          <LoadingButton
            sx={{ maxWidth: { sm: '10rem' }, mt: 5 }}
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
      </RegisterPaper>
    </RegisterContainer>
  );
};

export default RegisterPage;
