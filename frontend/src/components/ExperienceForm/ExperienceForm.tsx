import { useState, FC, FormEvent } from 'react';
import { StyledForm, ButtonsBox } from './ExperienceForm.styled';
import { validate } from '../../utils/validator';
import CustomOutlinedInput from '@components/CustomOutlinedInput/CustomOutlinedInput';
import LoadingButton from '@components/LoadingButton/LoadingButton';
import { IExperience, Nullable } from '../../typings/types';
import { ROUTES } from '@constants/routes';
import TwoElementsGrid from '@components/TwoElementsGrid/TwoElementsGrid';
import LinkButton from '@components/LinkButton/LinkButton';
import SaveIcon from '@mui/icons-material/Save';
import CustomDatePicker from '@components/CustomDatePicker/CustomDatePicker';
import CustomCheckbox from '@components/CustomCheckbox/CustomCheckbox';

type Props = {
  dispatchCreateOrUpdateProfile: (profileForm: Partial<IExperience>[]) => void;
  loading: boolean;
  experience?: Nullable<Partial<IExperience>>;
};

const ExperienceForm: FC<Props> = ({ dispatchCreateOrUpdateProfile, loading, experience }) => {
  const initialTitleState = { value: experience?.title || '', isValid: Boolean(experience?.title) };
  const initialCompanyState = { value: experience?.company || '', isValid: Boolean(experience?.company) };
  const initialLocationState = { value: experience?.location || '', isValid: Boolean(experience?.location) };
  const initialFromDateState = { value: experience?.from || null, isValid: Boolean(experience?.from) };
  const initialToDateState = { value: experience?.from || null, isValid: Boolean(experience?.from) };
  const initialDescriptionState = { value: experience?.description || '', isValid: Boolean(experience?.description) };

  const [titleState, setTitleState] = useState(initialTitleState);
  const [companyState, setCompanyState] = useState(initialCompanyState);
  const [locationState, setLocationState] = useState(initialLocationState);
  const [fromDateState, setFromDateState] = useState(initialFromDateState);
  const [toDateState, setToDateState] = useState(initialToDateState);
  const [descriptionState, setDescriptionState] = useState(initialDescriptionState);

  const [isCurrentJob, setIsCurrentJob] = useState(experience?.current || false);

  const formData = [
    companyState,
    locationState,
  ];

  const isButtonDisabled = formData.some(({ isValid }) => !isValid);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const experienceForm = [{
      company: companyState.value,
      location: locationState.value,
    }];

    dispatchCreateOrUpdateProfile(experienceForm);
  };

  return (
    <StyledForm
      noValidate
      onSubmit={handleFormSubmit}
    >
        <CustomOutlinedInput
          inputState={titleState}
          setInputState={setTitleState}
          validation={validate(titleState.value).required().isLength({ min: 3, max: 50 })}
          type='text'
          label='Job Title'
          placeholder='Job Title'
          isDisabled={loading}
          isRequired
        />

      <TwoElementsGrid>
        <CustomOutlinedInput
          inputState={companyState}
          setInputState={setCompanyState}
          validation={validate(companyState.value).required().isLength({ min: 3, max: 50 })}
          type='text'
          label='Company'
          placeholder='Company'
          isDisabled={loading}
          isRequired
        />

        <CustomOutlinedInput
          inputState={locationState}
          setInputState={setLocationState}
          validation={validate(locationState.value).required().isLength({ min: 3, max: 50 })}
          type='text'
          label='Location'
          placeholder='Location'
          customHelperText='City &amp; state suggested (eg. Austin, TX).'
          isDisabled={loading}
          isRequired
        />
      </TwoElementsGrid>

      <CustomCheckbox
        inputState={isCurrentJob}
        setInputState={setIsCurrentJob}
        label='Current Job?'
      />

      <TwoElementsGrid>
        <CustomDatePicker
          inputState={fromDateState}
          setInputState={setFromDateState}
          label='From Date'
        />

        <CustomDatePicker
          inputState={toDateState}
          setInputState={setToDateState}
          label='To Date'
          isDisabled={isCurrentJob}
        />
      </TwoElementsGrid>

      <CustomOutlinedInput
        inputState={descriptionState}
        setInputState={setDescriptionState}
        validation={validate(descriptionState.value).isLength({ min: 1, max: 100 })}
        type='text'
        label='Job Description'
        placeholder='Job Description.'
        isMultiline
        isDisabled={loading}
      />

      <ButtonsBox>
        <LoadingButton
          sx={{ maxWidth: { sm: '10rem' } }}
          variant='contained'
          isDisabled={isButtonDisabled}
          isLoading={loading}
          type='submit'
          text='Save'
          startIcon={<SaveIcon/>}
        />

        <LinkButton to={ROUTES.DASHBOARD}>
          Go To Dashboard
        </LinkButton>
      </ButtonsBox>
    </StyledForm>
  );
};

export default ExperienceForm;
