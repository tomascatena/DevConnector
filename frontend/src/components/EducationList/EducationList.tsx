import EducationItem from '@components/EducationItem/EducationItem';
import React, { FC } from 'react';
import { IEducation } from '../../typings/types';
import { Typography, Grid } from '@mui/material';

type Props = {
  education: IEducation[]
}

const EducationList:FC<Props> = ({ education }) => {
  return (
    <>
      <Typography variant='h5'>
        Education Credentials
      </Typography>

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
        >
          {education.map((educationItem, index) =>
            <EducationItem
              key={index}
              education={educationItem}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default EducationList;
