import { header, check } from 'express-validator';
import validator from 'validator';

export const authorizationHeader = header(
  'authorization',
  'Not authorized to access this endpoint'
)
  .trim()
  .notEmpty()
  .isString()
  .custom((value) => {
    const jwt = value.split(' ')[1];

    return Boolean(jwt && validator.isJWT(jwt));
  })
  .withMessage('Invalid JWT')
  .escape();

export const emailForLogin = check('email', 'Email is required')
  .notEmpty()
  .isEmail()
  .withMessage(`Must be a valid email`)
  .normalizeEmail();

export const passwordForLogin = check('password', 'Password is required')
  .trim()
  .notEmpty()
  .isString()
  .escape();
