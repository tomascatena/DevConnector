import React, { FC } from 'react';
import { Typography, Box, Avatar, Card, Chip, Divider, Grid } from '@mui/material';
import { IProfile } from '../../typings/types';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconWithLink from '../IconWithLink/IconWithLink';
import DoneIcon from '@mui/icons-material/Done';
import ExperienceTimeline from '@components/ExperienceTimeline/ExperienceTimeline';
import EducationList from '@components/EducationList/EducationList';

type Props = {
  profile: IProfile
}

const Profile:FC<Props> = ({ profile }) => {
  const {
    user,
    status,
    company,
    location,
    skills,
    social,
    experience,
    education,
    website,
    bio
  } = profile;
  const { firstName, lastName, avatar } = user;

  const fullName = `${firstName} ${lastName}`;

  return (
    <>
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

      <Box sx={{ display: 'inline-block', width: '100%' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 3 }}>
          {
            bio &&
            <>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography variant='h5'>
                  {firstName}{firstName?.slice(-1) === 's' ? "'" : 's'} Bio
                </Typography>

                {
                  bio &&
                  <Typography variant='body1'>
                    {bio}
                  </Typography>
                }
              </Box>

              <Divider
                flexItem
                sx={{ my: 3 }}
              />
            </>
          }

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Typography variant='h5'>
              Skill Set
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {skills.map(skill =>
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  onDelete={() => {}}
                  onClick={() => {}}
                  deleteIcon={<DoneIcon />}
                />
              )}
            </Box>
          </Box>
        </Card>
      </Box>

      <Box sx={{ display: 'inline-block', width: '100%' }}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                p: 3,
                flex: 1
              }}
            >
              <ExperienceTimeline
                experience={experience}
                allowEditAndDelete={false}
              />
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                p: 3,
                flex: 1
              }}
            >
              <EducationList
                allowEditAndDelete={false}
                education={education}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
