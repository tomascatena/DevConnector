export const API_ENDPOINTS = {
  AUTH: '/api/v1/auth',
  USERS: '/api/v1/users',
  LOGGED_IN_USER_PROFILE: '/api/v1/profile/me',
  USER_PROFILE: '/api/v1/profile/user/',
  CREATE_OR_UPDATE_PROFILE: '/api/v1/profile',
  CREATE_OR_UPDATE_PROFILE_EXPERIENCE: '/api/v1/profile/experience',
  CREATE_OR_UPDATE_PROFILE_EDUCATION: '/api/v1/profile/education',
  DELETE_PROFILE: '/api/v1/profile',
} as const;
