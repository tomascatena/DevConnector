import { env } from '@config/config';
import axios from 'axios';
import { IGithubRepo } from '../types/types';

enum Sort {
  Created = 'created',
  Updated = 'updated',
  Pushed = 'pushed',
  FullName = 'full_name',
}

enum Direction {
  Ascending = 'asc',
  Descending = 'desc',
}

export const fetchRepos = async (
  githubUsername: string,
  reposPerPage: number = 5,
  sort: Sort = Sort.Created,
  direction: Direction = Direction.Ascending
) => {
  // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user

  const baseURL = `https://api.github.com`;
  const queryString = `per_page=${reposPerPage}&sort=${sort}:${direction}&client_id=${env.GITHUB_API_CLIENT_ID}&client_secret=${env.GITHUB_API_CLIENT_SECRET}`;

  const config = {
    headers: {
      'user-agent': 'node.js',
    },
  };

  const { data } = await axios.get(
    `${baseURL}/users/${githubUsername}/repos?${queryString}`,
    config
  );

  const languagesURLs: string[] = [];
  data.forEach((repo: IGithubRepo) => {
    languagesURLs.push(repo.languages_url);
  });

  const reposLanguages: { [key: string]: number }[] = await Promise.all(
    languagesURLs.map(async (url) => {
      const resp = await axios.get(url);

      const total = (Object.values(resp.data) as number[]).reduce(
        (prev, current) => prev + current,
        0
      );

      resp.data.total = total;

      return resp.data;
    })
  );

  const repos = data.map((repo: IGithubRepo, index: number) => {
    repo.languages = reposLanguages[index];

    return repo;
  });

  return repos;
};
