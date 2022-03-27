import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';

type Props = {
  children: ReactNode[]
}

const TwoElementsGrid:FC<Props> = ({ children }) => {
  return (
    <Grid
      container
      spacing={3}
    >
    <Grid
      item
      xs={12}
      md={6}
    >
      {children && children[0]}
    </Grid>

    <Grid
      item
      xs={12}
      md={6}
    >
      {children && children[1]}
    </Grid>
  </Grid>
  );
};

export default TwoElementsGrid;
