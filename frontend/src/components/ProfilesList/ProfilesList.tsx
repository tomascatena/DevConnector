import React, { FC, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { getAllProfiles } from '@store/features/profile/profile.thunk';
import CustomBackdrop from '@components/CustomBackdrop/CustomBackdrop';
import { Typography, Grid } from '@mui/material';
import ProfilesListItem from '@components/ProfilesListItem/ProfilesListItem';

type Props = {}

const ProfilesList:FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { loading, profiles } = useTypedSelector(state => state.profile);

  useEffect(() => {
    dispatch(getAllProfiles());
  }, []);

  return (
    <>
    {
      loading ? (
        <CustomBackdrop
          isOpen={loading}
          message='Loading profiles. Please wait.'
        />
      ) : (
        <>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {
          profiles?.length
            ? profiles.map(profile =>
              <Grid
                key={profile._id}
                item
                xs={12}
                md={6}
              >
                <ProfilesListItem profile={profile}/>
              </Grid>
            )
            : <Typography>No profiles found</Typography>
          }
        </Grid>
        </>
      )
    }
    </>
  );
};

export default ProfilesList;
