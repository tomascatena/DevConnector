import { validationsResults } from '@middleware/validations.middleware';
import * as validators from '@validators/index';

export const getUserProfileById = [
  validators.userIdParam,
  validationsResults(),
];

export const getUserProfile = [
  validators.userId, //
  validationsResults(),
];

export const userProfile = [
  ...validators.profile, //
  ...validators.social,
  validationsResults(),
];

export const addProfileExperience = [
  ...validators.experience,
  validationsResults(),
];

export const updateProfileExperience = [
  ...validators.experience,
  validators.experienceId,
  validationsResults(),
];

export const deleteProfileExperience = [
  validators.experienceIdParam,
  validationsResults(),
];

export const addProfileEducation = [
  ...validators.education, //
  validationsResults(),
];

export const updateProfileEducation = [
  ...validators.education, //
  validators.educationId,
  validationsResults(),
];

export const deleteProfileEducation = [
  validators.educationIdParam,
  validationsResults(),
];

export const getUserRepos = [
  validators.githubUsernameParam,
  validationsResults(),
];
