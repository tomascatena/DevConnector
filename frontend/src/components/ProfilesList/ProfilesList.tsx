import React, { FC, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '@hooks/index';
import { getAllProfiles } from '@store/features/profile/profile.thunk';
import CustomBackdrop from '@components/CustomBackdrop/CustomBackdrop';

type Props = {}

const ProfilesList:FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { loading, profiles } = useTypedSelector(state => state.profile);

  useEffect(() => {
    dispatch(getAllProfiles());
  }, []);

  return (
    <div>
    {
      loading ? (
        <CustomBackdrop
          isOpen={loading}
          message='Loading profiles. Please wait.'
        />
      ) : (
          <p>Profiles List</p>
      )
    }
    </div>
  );
};

export default ProfilesList;
