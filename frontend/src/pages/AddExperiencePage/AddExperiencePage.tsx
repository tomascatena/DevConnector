import React, { FC, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';
import { IExperience } from '../../typings/types';
import {
  addProfileExperience,
  getCurrentUserProfile
} from '@store/features/profile/profile.thunk';
import { AddExperienceContainer, AddExperiencePaper } from './AddExperiencePage.styled';
import { Typography } from '@mui/material';
import CustomBackdrop from '@components/CustomBackdrop/CustomBackdrop';
import TextWithIcon from '@components/TextWithIcon/TextWithIcon';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ExperienceForm from '@components/ExperienceForm/ExperienceForm';

type Props = {};

const AddExperiencePage:FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { profile, isFetchingProfile, loading } = useTypedSelector((state) => state.profile);

  const navigate = useNavigate();

  const dispatchCreateOrUpdateExperience = (
    experienceForm: Partial<IExperience>
  ) => {
    dispatch(addProfileExperience(experienceForm)).then(() => {
      navigate(ROUTES.DASHBOARD);
    });
  };

  useEffect(() => {
    if (!profile) {
      dispatch(getCurrentUserProfile());
    }
  }, [profile]);

  return (
    <AddExperienceContainer>
      <AddExperiencePaper elevation={3}>
        <Typography
          variant='h4'
          align='center'
        >
          Add An Experience
        </Typography>

        <TextWithIcon
          text='Add any developer/programming experience that you have had in the past.'
          icon={<WorkOutlineIcon color='action' />}
        />

        {isFetchingProfile ? (
          <CustomBackdrop
            isOpen={isFetchingProfile}
            message='Loading profile. Please wait.'
          />
        ) : (
          <ExperienceForm
            dispatchCreateOrUpdateExperience={dispatchCreateOrUpdateExperience}
            loading={loading}
          />
        )}
      </AddExperiencePaper>
    </AddExperienceContainer>
  );
};

export default AddExperiencePage;
