import React, { FC, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';
import { IEducation } from '../../typings/types';
import {
  addOrUpdateProfileEducation,
  getCurrentUserProfile
} from '@store/features/profile/profile.thunk';
import { AddEducationContainer, AddEducationPaper } from './AddEducationPage.styled';
import { Typography } from '@mui/material';
import CustomBackdrop from '@components/CustomBackdrop/CustomBackdrop';
import TextWithIcon from '@components/TextWithIcon/TextWithIcon';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EducationForm from '@components/EducationForm/EducationForm';

type Props = {};

const AddExperiencePage:FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { profile, isFetchingProfile, loading } = useTypedSelector((state) => state.profile);

  const navigate = useNavigate();

  const dispatchCreateOrUpdateEducation = (
    educationForm: Partial<IEducation>[]
  ) => {
    dispatch(addOrUpdateProfileEducation(educationForm)).then(() => {
      navigate(ROUTES.DASHBOARD);
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
    </AddEducationContainer>
  );
};

export default AddExperiencePage;
