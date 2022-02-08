import { check, param } from 'express-validator';

export const userIdParam = param('userId', 'userId is required')
  .isMongoId()
  .withMessage('Invalid userId')
  .escape();

export const experienceIdParam = param('experienceId', 'userId is required')
  .isMongoId()
  .withMessage('Invalid experienceId')
  .escape();

export const educationIdParam = param('educationId', 'userId is required')
  .isMongoId()
  .withMessage('Invalid educationId')
  .escape();

export const githubUsernameParam = param(
  'githubUsername',
  'githubUsername is required'
)
  .matches(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)
  .withMessage('Invalid githubUsername')
  .escape();

export const userId = check('userId', 'userId is required')
  .isMongoId()
  .withMessage('Invalid userId')
  .escape();

export const userStatus = check('status', 'status is required')
  .trim()
  .notEmpty()
  .isString()
  .withMessage('Invalid user status')
  .escape();

export const userSkills = check('skills', 'skills are required')
  .notEmpty()
  .isArray()
  .withMessage('Invalid user skills');

export const userCompany = check('company')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 3, max: 50 })
  .withMessage('Invalid user company');

export const userWebsite = check('website')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 3, max: 50 })
  .withMessage('Invalid user website');

export const userLocation = check('location')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 3, max: 100 })
  .withMessage('Invalid user location');

export const userBio = check('bio')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 0, max: 500 })
  .withMessage('Invalid user bio');

export const userGithubUsername = check('github username')
  .optional({ nullable: true })
  .isString()
  .isLength({ min: 3, max: 50 })
  .withMessage('Invalid user github username');

export const userSocial = [
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

export const userProfileOptionalFields = [
  userCompany,
  userWebsite,
  userLocation,
  userBio,
  userGithubUsername,
  ...userSocial,
];

export const profileExperience = [
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

export const profileEducation = [
  check('education', 'user profile education is required')
    .isArray()
    .custom((education) => education.length)
    .withMessage('Invalid user profile education'),
  check('education.*.school', 'school is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile education: school'),
  check('education.*.degree', 'degree is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile education: degree'),
  check('education.*.fieldOfStudy')
    .optional({ nullable: true })
    .isString()
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage('Invalid user profile education: fieldOfStudy'),
  check('education.*.from', 'from date is required')
    .notEmpty()
    .isDate()
    .withMessage('Invalid user profile education: from'),
  check('education.*.to')
    .optional({ nullable: true })
    .isDate()
    .withMessage('Invalid user profile education: to'),
  check('education.*.current')
    .optional({ nullable: true })
    .isBoolean()
    .withMessage('Invalid user profile education: current'),
  check('education.*.description')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 500 })
    .withMessage('Invalid user profile education: description'),
];
