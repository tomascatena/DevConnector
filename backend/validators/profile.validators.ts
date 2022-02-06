import { check, param } from 'express-validator';

export const userIdParamValidator = param('userId', 'userId is required')
  .trim()
  .notEmpty()
  .isString()
  .isMongoId()
  .withMessage('Invalid userId')
  .escape();

export const experienceIdParamValidator = param(
  'experienceId',
  'userId is required'
)
  .trim()
  .notEmpty()
  .isString()
  .isMongoId()
  .withMessage('Invalid experienceId')
  .escape();

export const userIdValidator = check('userId', 'userId is required')
  .trim()
  .notEmpty()
  .isString()
  .isMongoId()
  .withMessage('Invalid userId')
  .escape();

export const userStatusValidator = check('status', 'status is required')
  .trim()
  .notEmpty()
  .isString()
  .withMessage('Invalid user status')
  .escape();

export const userSkillsValidator = check('skills', 'skills are required')
  .notEmpty()
  .isArray()
  .withMessage('Invalid user skills');

export const userCompanyValidator = check('company')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 3, max: 50 })
  .withMessage('Invalid user company');

export const userWebsiteValidator = check('website')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 3, max: 50 })
  .withMessage('Invalid user website');

export const userLocationValidator = check('location')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 3, max: 100 })
  .withMessage('Invalid user location');

export const userBioValidator = check('bio')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 0, max: 500 })
  .withMessage('Invalid user bio');

export const userGithubUsernameValidator = check('github username')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 3, max: 50 })
  .withMessage('Invalid user github username');

export const userSocialValidator = [
  check('social')
    .optional({ nullable: true })
    .isObject()
    .custom((social) => Object.keys(social).length)
    .withMessage('Invalid user social media'),
  check('social.youtube')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user youtube'),
  check('social.twitter')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user twitter'),
  check('social.facebook')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user facebook'),
  check('social.linkedin')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user linkedin'),
  check('social.instagram')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user instagram'),
];

export const userProfileOptionalFieldsValidator = [
  userCompanyValidator,
  userWebsiteValidator,
  userLocationValidator,
  userBioValidator,
  userGithubUsernameValidator,
  ...userSocialValidator,
];

export const profileExperienceValidator = [
  check('experience', 'user profile experience is required')
    .isArray()
    .custom((experience) => experience.length)
    .withMessage('Invalid user profile experience'),
  check('experience.*.title', 'title is required')
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: title'),
  check('experience.*.company', 'company is required')
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: company'),
  check('experience.*.location')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: location'),
  check('experience.*.from', 'from date is required')
    .notEmpty()
    .isDate()
    .withMessage('Invalid user profile experience: from'),
  check('experience.*.to')
    .optional({ nullable: true })
    .isDate()
    .withMessage('Invalid user profile experience: to'),
  check('experience.*.current')
    .optional({ nullable: true })
    .isBoolean()
    .withMessage('Invalid user profile experience: current'),
  check('experience.*.description')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 500 })
    .withMessage('Invalid user profile experience: description'),
];
