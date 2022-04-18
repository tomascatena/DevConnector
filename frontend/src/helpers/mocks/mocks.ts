import { MOCK_GITHUB_REPOS } from './githubRepos.mock';

export const MOCK_USER = {
  _id: 'abc123',
  firstName: 'John',
  lastName: 'Doe',
  avatar: 'https://s.gravatar.com/avatar/7909a0b37d81a8e276bd319f1f84c1f6?s=200&r=pg&d=retro',
  email: 'john.doe@gmail.com'
};

export const MOCK_TOKENS = {
  access: { token: 'accessToken', expires: '2022-04-18' },
  refresh: { token: 'refreshToken', expires: '2022-04-18' },
};

export const MOCK_LOGIN_FORM = {
  email: 'user@example.com',
  password: 'P4ssWord',
};

export const MOCK_REGISTER_FORM = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'user@example.com',
  password: 'P4ssWord',
  confirmPassword: 'P4ssWord',
};

export const MOCK_EDUCATION = {
  _id: 'abc123',
  school: 'University of Somewhere',
  degree: 'Informatics Engineer',
  fieldOfStudy: 'Computer Science',
  from: '2005-02-01',
  to: '2011-04-01',
  current: false,
  description: 'Computer science degree focused on web development'
};

export const MOCK_EDUCATION_LIST = [
  {
    _id: 'abc123',
    school: 'University of Somewhere',
    degree: 'Informatics Engineer',
    fieldOfStudy: 'Computer Science',
    from: '2005-02-01',
    to: '2011-04-01',
    current: false,
    description: 'Computer science degree focused on web development'
  },
  {
    _id: 'abc456',
    school: 'University of Somewhere',
    degree: 'Informatics Engineer',
    fieldOfStudy: 'Computer Science',
    from: '2005-02-01',
    to: '2011-04-01',
    current: false,
    description: 'Computer science degree focused on web development'
  },
  {
    _id: 'abc789',
    school: 'University of Somewhere',
    degree: 'Informatics Engineer',
    fieldOfStudy: 'Computer Science',
    from: '2005-02-01',
    to: '2011-04-01',
    current: false,
    description: 'Computer science degree focused on web development'
  },
];

export const MOCK_EXPERIENCE = {
  _id: 'abc123',
  company: 'Acme Software Inc.',
  title: 'Principal Engineer',
  location: 'Austin, TX',
  from: '2017-02-01',
  to: null,
  current: true,
  description: 'In charge of developing high quality software'
};

export const MOCK_EXPERIENCE_LIST = [
  {
    _id: 'abc123',
    company: 'Acme Software Inc.',
    title: 'Principal Engineer',
    location: 'Austin, TX',
    from: '2017-02-01',
    to: null,
    current: true,
    description: 'In charge of developing high quality software'
  },
  {
    _id: 'abc456',
    company: 'Acme Software Inc.',
    title: 'Principal Engineer',
    location: 'Austin, TX',
    from: '2017-02-01',
    to: null,
    current: true,
    description: 'In charge of developing high quality software'
  },
  {
    _id: 'abc789',
    company: 'Acme Software Inc.',
    title: 'Principal Engineer',
    location: 'Austin, TX',
    from: '2017-02-01',
    to: null,
    current: true,
    description: 'In charge of developing high quality software'
  },
];

export const MOCK_SOCIAL = {
  youtube: 'https://www.youtube.com',
  twitter: 'https://www.twitter.com',
  facebook: 'https://www.facebook.com',
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com',
};

export const MOCK_USER_PROFILE = {
  _id: 'abc123',
  user: MOCK_USER,
  company: 'Acme Software Inc.',
  website: 'www.acme-software.com',
  location: 'San Francisco, CA',
  status: 'Senior Developer',
  skills: ['PHP', 'Java', 'Jenkins', 'JavaScript', 'React', 'Micro Services', 'SQL', 'Docker'],
  bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l',
  githubUsername: 'tomascatena',
  experience: MOCK_EXPERIENCE_LIST,
  education: MOCK_EDUCATION_LIST,
  social: MOCK_SOCIAL
};

export const MOCK_USER_PROFILE_2 = {
  _id: 'abc456',
  user: { ...MOCK_USER, _id: 'abc456' },
  company: 'Acme Software Inc.',
  website: 'www.acme-software.com',
  location: 'San Francisco, CA',
  status: 'Senior Developer',
  skills: ['PHP', 'Java', 'Jenkins', 'JavaScript', 'React', 'Micro Services', 'SQL', 'Docker'],
  bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l',
  githubUsername: 'tomascatena',
  experience: MOCK_EXPERIENCE_LIST,
  education: MOCK_EDUCATION_LIST,
  social: MOCK_SOCIAL
};

export const MOCK_INITIAL_REDUX_STATE = {
  auth: {
    user: MOCK_USER,
    loading: false,
    currentRequestId: undefined,
    serverValidationErrors: null,
    error: null,
    isAuthenticated: true,
    accessToken: null,
  },
  profile: {
    profile: MOCK_USER_PROFILE,
    selectedUserProfile: MOCK_USER_PROFILE,
    profiles: [MOCK_USER_PROFILE, MOCK_USER_PROFILE],
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
