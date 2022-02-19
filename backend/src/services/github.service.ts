import { env } from '@config/config';
import axios from 'axios';

export const fetchRepos = async (githubUsername: string) => {
  const baseURL = `https://api.github.com/users/${githubUsername}/repos`;
  const queryString = `per_page=5&sort=created:asc&client_id=${env.GITHUB_API_CLIENT_ID}&client_secret=${env.GITHUB_API_CLIENT_SECRET}`;

  const config = {
    headers: {
      'user-agent': 'node.js',
    },
  };

  const { data } = await axios.get(`${baseURL}?${queryString}`, config);

  return data;
};
