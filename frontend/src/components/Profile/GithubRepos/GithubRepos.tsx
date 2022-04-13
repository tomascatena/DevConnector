import React, { FC } from 'react';
import { Typography, Box, Card, Link } from '@mui/material';
import { IGithubRepo, Nullable } from '../../../typings/types';
import { CustomBadge } from '@ui-elements/CustomBadge/CustomBadge';

type Props = {
  githubUsername: string;
  repos: Nullable<IGithubRepo[]>
}

const GithubRepos:FC<Props> = ({ githubUsername, repos }) => {
  const renderRepoLanguages = (languages: { [key: string]: number }) => {
    return Object.entries(languages).map(([key, value], index) => {
      const totalLanguages = Object.values(languages).length - 1;
      const languagePercentage = <span key={key}>{key} {(value / languages.total * 100).toFixed(2)}%{index < totalLanguages - 1 && ', '}</span>;

      return key !== 'total' && languagePercentage;
    });
  };

  return (
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
  );
};

export default GithubRepos;
