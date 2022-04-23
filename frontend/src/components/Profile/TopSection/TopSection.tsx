import { Avatar, Box, Card, Typography } from '@mui/material';
import { IProfile } from '../../../typings/types';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconWithLink from '@ui-elements/IconWithLink/IconWithLink';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { FC } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

type Props = {
  selectedUserProfile: IProfile;
}

const TopSection:FC<Props> = ({ selectedUserProfile }) => {
  const {
    user,
    status,
    company,
    location,
    social,
    website
  } = selectedUserProfile;

  const { firstName, lastName, avatar } = user;

  const fullName = `${firstName} ${lastName}`;

  return (
    <Box sx={{ display: 'inline-block', width: '100%' }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar
          sx={{ height: '10rem', width: '10rem', m: 1.5 }}
          src={avatar}
          alt={fullName}
        />

        <Typography
          variant='h4'
          sx={{ my: 1 }}
        >
          {fullName}
        </Typography>

        <Typography variant='h6'>
          {status} {company && <span>at {company}</span>}
        </Typography>

        <Typography variant='body1' >
          {location}
        </Typography>

        <Box sx={{ my: 3, display: ' flex', gap: 2 }}>
          <IconWithLink
            href={website}
            icon={<LanguageIcon fontSize='medium'/>}
          />

          <IconWithLink
            href={social?.twitter}
            icon={<TwitterIcon fontSize='medium'/>}
          />

          <IconWithLink
            href={social?.facebook}
            icon={<FacebookIcon fontSize='medium'/>}
          />

          <IconWithLink
            href={social?.linkedin}
            icon={<LinkedInIcon fontSize='medium'/>}
          />

          <IconWithLink
            href={social?.youtube}
            icon={<YouTubeIcon fontSize='medium'/>}
          />

          <IconWithLink
            href={social?.instagram}
            icon={<InstagramIcon fontSize='medium'/>}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default TopSection;
