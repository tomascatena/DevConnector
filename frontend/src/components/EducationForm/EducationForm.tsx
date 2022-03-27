import { useState, FC, FormEvent, Dispatch, SetStateAction } from 'react';
import { StyledForm, ButtonsBox } from './EducationForm.styled';
import { validate } from '../../utils/validator';
import CustomInput from '@ui-elements/CustomInput/CustomInput';
import LoadingButton from '@ui-elements/LoadingButton/LoadingButton';
import { IEducation, Nullable } from '../../typings/types';
import { ROUTES } from '@constants/routes';
import TwoElementsGrid from '@components/ui-elements/TwoElementsGrid/TwoElementsGrid';
import LinkButton from '@ui-elements/LinkButton/LinkButton';
import SaveIcon from '@mui/icons-material/Save';
import CustomDatePicker from '@ui-elements/CustomDatePicker/CustomDatePicker';
import CustomCheckbox from '@ui-elements/CustomCheckbox/CustomCheckbox';
import { Button } from '@mui/material';

type Props = {
  dispatchCreateOrUpdateEducation: (educationForm: Partial<IEducation>) => void;
  loading: boolean;
  education?: Nullable<Partial<IEducation>>;
  isDialog?: boolean;
  setOpenDialog?: Dispatch<SetStateAction<boolean>>;
};

const EducationForm: FC<Props> = ({
  dispatchCreateOrUpdateEducation,
  loading,
  education,
  isDialog = false,
  setOpenDialog
}) => {
  const initialDegreeState = { value: education?.degree || '', isValid: Boolean(education?.degree) };
  const initialSchoolState = { value: education?.school || '', isValid: Boolean(education?.school) };
  const initialFieldOfStudyState = { value: education?.fieldOfStudy || '', isValid: Boolean(education?.fieldOfStudy) };
  const initialFromDateState = { value: education?.from || null, isValid: Boolean(education?.from) };
  const initialToDateState = { value: education?.from || null, isValid: Boolean(education?.from) };
  const initialDescriptionState = { value: education?.description || '', isValid: Boolean(education?.description) };

  const [degreeState, setDegreeState] = useState(initialDegreeState);
  const [schoolState, setSchoolState] = useState(initialSchoolState);
  const [fieldOfStudyState, setFieldOfStudyState] = useState(initialFieldOfStudyState);
  const [fromDateState, setFromDateState] = useState(initialFromDateState);
  const [toDateState, setToDateState] = useState(initialToDateState);
  const [descriptionState, setDescriptionState] = useState(initialDescriptionState);

  const [isCurrent, setIsCurrent] = useState(education?.current || false);

  const formData = [
    degreeState,
    schoolState,
    fieldOfStudyState,
    fromDateState,
    toDateState,
    descriptionState
  ];

  const isButtonDisabled = formData.some(({ isValid }) => !isValid);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const educationForm = {
      _id: education?._id,
      degree: degreeState.value,
      school: schoolState.value,
      fieldOfStudy: fieldOfStudyState.value,
      from: fromDateState.value,
      to: toDateState.value,
      description: descriptionState.value,
      current: isCurrent
    };

    dispatchCreateOrUpdateEducation(educationForm);
  };

  return (
    <StyledForm
      noValidate
      onSubmit={handleFormSubmit}
    >
      <CustomInput
        inputState={degreeState}
        setInputState={setDegreeState}
        validation={validate(degreeState.value).required().isLength({ min: 3, max: 50 })}
        type='text'
        label='Degree Or Certificate'
        placeholder='Degree Or Certificate'
        isDisabled={loading}
        isRequired
      />

      <CustomInput
        inputState={schoolState}
        setInputState={setSchoolState}
        validation={validate(schoolState.value).required().isLength({ min: 3, max: 50 })}
        type='text'
        label='School'
        placeholder='School'
        isDisabled={loading}
        isRequired
      />

      <CustomInput
        inputState={fieldOfStudyState}
        setInputState={setFieldOfStudyState}
        validation={validate(fieldOfStudyState.value).isLength({ min: 3, max: 50 })}
        type='text'
        label='Field Of Study'
        placeholder='Field Of Study'
        isDisabled={loading}
      />

      <CustomCheckbox
        inputState={isCurrent}
        setInputState={setIsCurrent}
        label='Current?'
      />

      <TwoElementsGrid>
        <CustomDatePicker
          inputState={fromDateState}
          setInputState={setFromDateState}
          label='From Date'
          isRequired
        />

        {!isCurrent &&
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
        label='Program Description'
        placeholder='Program Description.'
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
          isDialog && setOpenDialog ? (
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
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

export default EducationForm;
