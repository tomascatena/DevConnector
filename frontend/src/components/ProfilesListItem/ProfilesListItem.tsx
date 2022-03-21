import { IProfile } from '../../typings/types';
import React, { FC } from 'react';
import { Typography, Avatar, Box, Card, CardContent, Divider, Chip } from '@mui/material';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';
import { styled } from '@mui/system';

export const TypographyLink = styled(Typography)(({ theme }) => ({
  display: 'inline-block',

  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));

type Props = {
  profile: IProfile
}

const ProfileItem:FC<Props> = ({ profile }) => {
  const navigate = useNavigate();

  const { user, status, company, location, skills } = profile;
  const { firstName, lastName, avatar } = user;

  const fullName = `${firstName} ${lastName}`;

  return (
    <Box sx={{ display: 'inline-block', width: '100%' }}>
      <Card sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', my: 3, minHeight: '10rem' }}>
        <Avatar
          sx={{ height: '6rem', width: '6rem', m: 1.5 }}
          src={avatar}
          alt={fullName}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <TypographyLink
              variant="h5"
              onClick={() => navigate(`${ROUTES.PROFILE}/${user._id}`)}
              color='primary'
            >
              {fullName}
            </TypographyLink>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {status} at {company}
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {location}
            </Typography>

            <Divider
              variant='middle'
              sx={{ my: 2 }}
            />

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {skills.map(skill =>
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  color='primary'
                />
              )}
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileItem;
