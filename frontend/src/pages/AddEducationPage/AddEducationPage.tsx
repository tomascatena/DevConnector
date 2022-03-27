import React, { FC, useEffect } from 'react';
import { useAppDispatch, useTypedSelector, useActions } from '@hooks/index';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';
import { IEducation } from '../../typings/types';
import {
  addProfileEducation,
  getCurrentUserProfile
} from '@store/features/profile/profile.thunk';
import { AddEducationContainer, AddEducationPaper } from './AddEducationPage.styled';
import { Typography } from '@mui/material';
import CustomBackdrop from '@ui-elements/CustomBackdrop/CustomBackdrop';
import TextWithIcon from '@ui-elements/TextWithIcon/TextWithIcon';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EducationForm from '@components/EducationForm/EducationForm';
import CustomAlert from '@ui-elements/CustomAlert/CustomAlert';

const AddExperiencePage:FC = () => {
  const { setAlert } = useActions();
  const dispatch = useAppDispatch();

  const { profile, isFetchingProfile, loading } = useTypedSelector((state) => state.profile);
  const { showAlert, message, severity } = useTypedSelector((state) => state.alert);

  const navigate = useNavigate();

  const dispatchCreateOrUpdateEducation = (
    educationForm: Partial<IEducation>
  ) => {
    dispatch(addProfileEducation(educationForm)).then(() => {
      navigate(ROUTES.DASHBOARD);
      setAlert({
        showAlert: true,
        message: 'Education added',
        severity: 'success'
      });
    });
  };

  useEffect(() => {
    if (!profile) {
      dispatch(getCurrentUserProfile());
    }
  }, [profile]);

  return (
    <AddEducationContainer>
      <AddEducationPaper elevation={3}>
        <Typography
          variant='h4'
          align='center'
        >
          Add Your Education
        </Typography>

        <TextWithIcon
          text='Add any school or bootcamp that you have attended.'
          icon={<WorkOutlineIcon color='action' />}
        />

        {isFetchingProfile ? (
          <CustomBackdrop
            isOpen={isFetchingProfile}
            message='Loading profile. Please wait.'
          />
        ) : (
          <EducationForm
            dispatchCreateOrUpdateEducation={dispatchCreateOrUpdateEducation}
            loading={loading}
          />
        )}
      </AddEducationPaper>

      <CustomAlert
        shouldShowAlert={showAlert}
        message={message}
        severity={severity}
      />
    </AddEducationContainer>
  );
};

export default AddExperiencePage;
