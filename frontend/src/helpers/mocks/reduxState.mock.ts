
import { MOCK_GITHUB_REPOS } from './githubRepos.mock';
import { createRandomUser, createRandomUserProfile } from './randomMockCreators';

export const MOCK_RANDOM_INITIAL_REDUX_STATE = {
  auth: {
    user: createRandomUser(),
    loading: false,
    currentRequestId: undefined,
    serverValidationErrors: null,
    error: null,
    isAuthenticated: true,
    accessToken: null,
  },
  profile: {
    profile: createRandomUserProfile(),
    selectedUserProfile: createRandomUserProfile(),
    profiles: [
      createRandomUserProfile(),
      createRandomUserProfile(),
      createRandomUserProfile(),
      createRandomUserProfile(),
      createRandomUserProfile(),
      createRandomUserProfile(),
      createRandomUserProfile(),
      createRandomUserProfile(),
      createRandomUserProfile(),
      createRandomUserProfile(),
    ],
    repos: MOCK_GITHUB_REPOS,
    loading: false,
    currentRequestId: undefined,
    serverValidationErrors: null,
    error: null,
    isFetchingProfile: false,
  },
  alert: {
    showAlert: false,
    message: '',
    variant: 'filled',
    severity: 'success',
    timeout: 1000
  }
};
