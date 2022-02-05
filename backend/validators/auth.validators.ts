import { header, check } from 'express-validator';
import validator from 'validator';

export const authorizationHeaderValidator = header(
  'authorization',
  'Not authorized to access this endpoint'
)
  .trim()
  .notEmpty()
  .isString()
  .custom((authorizationHeader) => {
    const jwt = authorizationHeader.split(' ')[1];

    return Boolean(jwt && validator.isJWT(jwt));
  })
  .withMessage('Invalid JWT')
  .escape();

export const emailForLoginValidator = check('email', 'Email is required')
  .notEmpty()
  .isEmail()
  .withMessage(`Must be a valid email`)
  .normalizeEmail();

export const passwordForLoginValidator = check(
  'password',
  'Password is required'
)
  .trim()
  .notEmpty()
  .isString()
  .escape();
