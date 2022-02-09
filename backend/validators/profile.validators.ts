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

export const profile = [
  check('profile', 'profile is required')
    .isObject()
    .custom((value) => Object.keys(value).length)
    .withMessage('Invalid user profile'),
  check('profile.userId', 'profile.userId is required')
    .isMongoId()
    .withMessage('Invalid profile.userId')
    .escape(),
  check('profile.status', 'profile.status is required')
    .trim()
    .notEmpty()
    .isString()
    .withMessage('Invalid user profile.status')
    .escape(),
  check('profile.skills', 'profile.skills is required')
    .notEmpty()
    .isArray()
    .withMessage('Invalid user profile.skills'),
  check('profile.company')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('Invalid user profile.company'),
  check('profile.website')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('Invalid user profile.website'),
  check('profile.location')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile.location'),
  check('profile.bio')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 0, max: 500 })
    .withMessage('Invalid user profile.bio'),
  check('profile.githubUsername')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('Invalid user profile.githubUsername'),
];

export const social = [
  check('profile.social')
    .optional({ nullable: true })
    .isObject()
    .custom((value) => Object.keys(value).length)
    .withMessage('Invalid user social media'),
  check('profile.social.youtube')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user youtube'),
  check('profile.social.twitter')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user twitter'),
  check('profile.social.facebook')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user facebook'),
  check('profile.social.linkedin')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user linkedin'),
  check('profile.social.instagram')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user instagram'),
];

export const experience = [
  check('profile.experience', 'user profile experience is required')
    .isArray()
    .custom((value) => value.length)
    .withMessage('Invalid user profile experience'),
  check('profile.experience.*.title', 'title is required')
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: title'),
  check('profile.experience.*.company', 'company is required')
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: company'),
  check('profile.experience.*.location')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: location'),
  check('profile.experience.*.from', 'from date is required')
    .notEmpty()
    .isDate()
    .withMessage('Invalid user profile experience: from'),
  check('profile.experience.*.to')
    .optional({ nullable: true })
    .isDate()
    .withMessage('Invalid user profile experience: to'),
  check('profile.experience.*.current')
    .optional({ nullable: true })
    .isBoolean()
    .withMessage('Invalid user profile experience: current'),
  check('profile.experience.*.description')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 500 })
    .withMessage('Invalid user profile experience: description'),
];

export const education = [
  check('profile.education', 'user profile education is required')
    .isArray()
    .custom((value) => value.length)
    .withMessage('Invalid user profile education'),
  check('profile.education.*.school', 'school is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile education: school'),
  check('profile.education.*.degree', 'degree is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile education: degree'),
  check('profile.education.*.fieldOfStudy')
    .optional({ nullable: true })
    .isString()
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage('Invalid user profile education: fieldOfStudy'),
  check('profile.education.*.from', 'from date is required')
    .notEmpty()
    .isDate()
    .withMessage('Invalid user profile education: from'),
  check('profile.education.*.to')
    .optional({ nullable: true })
    .isDate()
    .withMessage('Invalid user profile education: to'),
  check('profile.education.*.current')
    .optional({ nullable: true })
    .isBoolean()
    .withMessage('Invalid user profile education: current'),
  check('profile.education.*.description')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 3, max: 500 })
    .withMessage('Invalid user profile education: description'),
];
