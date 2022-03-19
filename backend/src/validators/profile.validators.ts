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
  .withMessage('Invalid Github username')
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
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('Invalid user profile.company'),
  check('profile.website')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('Invalid user profile.website'),
  check('profile.location')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile.location'),
  check('profile.bio')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 0, max: 500 })
    .withMessage('Invalid user profile.bio'),
  check('profile.githubUsername')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('Invalid user profile.githubUsername'),
];

export const social = [
  check('profile.social')
    .optional({ nullable: true, checkFalsy: true })
    .isObject()
    .custom((value) => Object.keys(value).length)
    .withMessage('Invalid user social media'),
  check('profile.social.youtube')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user youtube'),
  check('profile.social.twitter')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user twitter'),
  check('profile.social.facebook')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user facebook'),
  check('profile.social.linkedin')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user linkedin'),
  check('profile.social.instagram')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user instagram'),
];

export const experience = [
  check('experience', 'user profile experience is required')
    .isObject()
    .withMessage('Invalid user profile experience'),
  check('experience.title', 'title is required')
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: title'),
  check('experience.company', 'company is required')
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: company'),
  check('experience.location')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile experience: location'),
  check('experience.from', 'from date is required')
    .notEmpty()
    .isISO8601()
    .withMessage('Invalid user profile experience: from'),
  check('experience.to')
    .optional({ nullable: true, checkFalsy: true })
    .isISO8601()
    .withMessage('Invalid user profile experience: to'),
  check('experience.current')
    .optional({ nullable: true, checkFalsy: true })
    .isBoolean()
    .withMessage('Invalid user profile experience: current'),
  check('experience.description')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 500 })
    .withMessage('Invalid user profile experience: description'),
];

export const experienceId = check('experience._id', '_id is required')
  .isMongoId()
  .withMessage('Invalid profileId')
  .escape()
  .withMessage('Invalid user profile experience: id');

export const education = [
  check('education', 'user profile education is required')
    .isObject()
    .withMessage('Invalid user profile education'),
  check('education.school', 'school is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile education: school'),
  check('education.degree', 'degree is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid user profile education: degree'),
  check('education.fieldOfStudy')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage('Invalid user profile education: fieldOfStudy'),
  check('education.from', 'from date is required')
    .notEmpty()
    .isISO8601()
    .withMessage('Invalid user profile education: from'),
  check('education.to')
    .optional({ nullable: true, checkFalsy: true })
    .isISO8601()
    .withMessage('Invalid user profile education: to'),
  check('education.current')
    .optional({ nullable: true, checkFalsy: true })
    .isBoolean()
    .withMessage('Invalid user profile education: current'),
  check('education.description')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 500 })
    .withMessage('Invalid user profile education: description'),
];

export const educationId = check('education._id', '_id is required')
  .isMongoId()
  .withMessage('Invalid profileId')
  .escape()
  .withMessage('Invalid user profile education: id');
