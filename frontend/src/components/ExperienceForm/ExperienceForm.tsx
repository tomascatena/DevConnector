import { useState, FC, FormEvent, Dispatch, SetStateAction } from 'react';
import { StyledForm, ButtonsBox } from './ExperienceForm.styled';
import { validate } from '../../utils/validator';
import CustomInput from '@components/CustomInput/CustomInput';
import LoadingButton from '@components/LoadingButton/LoadingButton';
import { IExperience, Nullable } from '../../typings/types';
import { ROUTES } from '@constants/routes';
import TwoElementsGrid from '@components/TwoElementsGrid/TwoElementsGrid';
import LinkButton from '@components/LinkButton/LinkButton';
import SaveIcon from '@mui/icons-material/Save';
import CustomDatePicker from '@components/CustomDatePicker/CustomDatePicker';
import CustomCheckbox from '@components/CustomCheckbox/CustomCheckbox';
import { Button } from '@mui/material';

type Props = {
  dispatchCreateOrUpdateExperience: (profileForm: Partial<IExperience>) => void;
  loading: boolean;
  experience?: Nullable<Partial<IExperience>>;
  isDialog?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

const ExperienceForm: FC<Props> = ({
  dispatchCreateOrUpdateExperience,
  loading,
  experience,
  isDialog = false,
  setOpen
}) => {
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
    titleState,
    companyState,
    locationState,
    fromDateState,
    toDateState,
    descriptionState
  ];

  const isButtonDisabled = formData.some(({ isValid }) => !isValid);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const experienceForm = {
      _id: experience?._id,
      title: titleState.value,
      company: companyState.value,
      location: locationState.value,
      from: fromDateState.value,
      to: toDateState.value,
      description: descriptionState.value,
      current: isCurrentJob
    };

    console.log(experienceForm);

    dispatchCreateOrUpdateExperience(experienceForm);
  };

  return (
    <StyledForm
      noValidate
      onSubmit={handleFormSubmit}
    >
      <CustomInput
        inputState={titleState}
        setInputState={setTitleState}
        validation={validate(titleState.value).required().isLength({ min: 3, max: 50 })}
        type='text'
        label='Job Title'
        placeholder='Job Title'
        isDisabled={loading}
        isRequired
      />

      <CustomInput
        inputState={companyState}
        setInputState={setCompanyState}
        validation={validate(companyState.value).required().isLength({ min: 3, max: 50 })}
        type='text'
        label='Company'
        placeholder='Company'
        isDisabled={loading}
        isRequired
      />

      <CustomInput
        inputState={locationState}
        setInputState={setLocationState}
        validation={validate(locationState.value).isLength({ min: 3, max: 50 })}
        type='text'
        label='Location'
        placeholder='Location'
        customHelperText='City &amp; state suggested (eg. Austin, TX).'
        isDisabled={loading}
      />

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
          isRequired
        />

        {!isCurrentJob &&
          <CustomDatePicker
            inputState={toDateState}
            setInputState={setToDateState}
            label='To Date'
          />
        }
      </TwoElementsGrid>

      <CustomInput
        inputState={descriptionState}
        setInputState={setDescriptionState}
        validation={validate(descriptionState.value).isLength({ min: 1, max: 100 })}
        type='text'
        label='Job Description'
        placeholder='Job Description.'
        isMultiline
        isDisabled={loading}
      />

      <ButtonsBox isDialog={isDialog}>
        <LoadingButton
          sx={{ maxWidth: { sm: '10rem' } }}
          variant='contained'
          isDisabled={isButtonDisabled}
          isLoading={loading}
          type='submit'
          text='Save'
          startIcon={<SaveIcon/>}
        />

        {
          isDialog && setOpen ? (
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          ) : (
            <LinkButton to={ROUTES.DASHBOARD}>
              Go To Dashboard
            </LinkButton>
          )
        }
      </ButtonsBox>
    </StyledForm>
  );
};

export default ExperienceForm;
