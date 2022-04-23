import { Box, Link, Typography } from '@mui/material';
import { CustomBadge } from '@ui-elements/CustomBadge/CustomBadge';
import { GithubRepoCard, GithubReposBox, GithubReposCard, SectionBox, StatsBox } from './GithubRepos.styled';
import { IGithubRepo, Nullable } from '../../../typings/types';
import React, { FC } from 'react';

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
    <GithubReposBox>
      <GithubReposCard>
        {
          githubUsername &&
          <SectionBox>
            <Typography variant='h5'>
              Github Repos
            </Typography>

            {
              repos &&
              repos.map(repo =>
                <GithubRepoCard key={repo.id}>
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

                  <StatsBox>
                    <CustomBadge badgeColor='success'>
                      Stars: {repo.stargazers_count}
                    </CustomBadge>

                    <CustomBadge badgeColor='primary'>
                      Watchers: {repo.watchers_count}
                    </CustomBadge>

                    <CustomBadge badgeColor='info'>
                      Forks: {repo.forks_count}
                    </CustomBadge>
                  </StatsBox>
                </GithubRepoCard>
              )
            }
          </SectionBox>
        }
      </GithubReposCard>
    </GithubReposBox>
  );
};

export default GithubRepos;
