import React, { FC } from 'react';
import { Typography, Box, Avatar, Card, Chip, Divider, Grid, Link } from '@mui/material';
import { IGithubRepo, IProfile, Nullable } from '../../typings/types';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconWithLink from '@ui-elements/IconWithLink/IconWithLink';
import DoneIcon from '@mui/icons-material/Done';
import ExperienceTimeline from '@components/ExperienceTimeline/ExperienceTimeline';
import EducationList from '@components/EducationList/EducationList';
import { CustomBadge } from '@ui-elements/CustomBadge/CustomBadge';

type Props = {
  selectedUserProfile: IProfile;
  repos: Nullable<IGithubRepo[]>
}

const Profile:FC<Props> = ({ selectedUserProfile, repos }) => {
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
    bio,
    githubUsername
  } = selectedUserProfile;
  const { firstName, lastName, avatar } = user;

  const fullName = `${firstName} ${lastName}`;

  const renderRepoLanguages = (languages: { [key: string]: number }) => {
    return Object.entries(languages).map(([key, value], index) => {
      const totalLanguages = Object.values(languages).length - 1;
      const languagePercentage = <span key={key}>{key} {(value / languages.total * 100).toFixed(2)}%{index < totalLanguages - 1 && ', '}</span>;

      return key !== 'total' && languagePercentage;
    });
  };

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

      {
      githubUsername && repos &&
      <Box sx={{ display: 'inline-block', width: '100%' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 3 }}>
          {
            githubUsername &&
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%' }}>
              <Typography variant='h5'>
                Github Repos
              </Typography>

              {
                repos &&
                repos.map(repo =>
                  <Card
                    sx={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', p: 3 }}
                    key={repo.id}
                  >
                    <Box>
                      <Link
                        href={repo.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {repo.full_name}
                      </Link>

                      <Typography variant='body1'>
                        {repo.description}
                      </Typography>

                      <Typography variant='body2'>
                        Languages:{' '}
                        {renderRepoLanguages(repo.languages)}
                      </Typography>

                      {
                        repo.license &&
                        <Typography variant='body1'>
                          {repo.license.name}
                        </Typography>
                      }
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <CustomBadge badgeColor='success'>
                        Stars: {repo.stargazers_count}
                      </CustomBadge>

                      <CustomBadge badgeColor='primary'>
                        Watchers: {repo.watchers_count}
                      </CustomBadge>

                      <CustomBadge badgeColor='info'>
                        Forks: {repo.forks_count}
                      </CustomBadge>
                    </Box>
                  </Card>
                )
              }
            </Box>
          }
        </Card>
      </Box>
      }
    </>
  );
};

export default Profile;
