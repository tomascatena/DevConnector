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

export const profileExperience = [
  ...validators.experience,
  validationsResults(),
];

export const deleteProfileExperience = [
  validators.experienceIdParam,
  validationsResults(),
];

export const profileEducation = [
  ...validators.education, //
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
