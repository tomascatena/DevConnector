import { check } from 'express-validator';
import { env } from '../config/config';
import User from '../models/user.model';

export const firstName = check('firstName', 'First name is required')
  .trim()
  .isString()
  .isLength({ min: 2 })
  .withMessage(`First name must be at least 2 characters long`)
  .escape();

export const lastName = check('lastName', 'Last name is required')
  .trim()
  .isString()
  .isLength({ min: 2 })
  .withMessage(`Last name must be at least 2 characters long`)
  .escape();

export const emailForRegister = check('email', 'Email is required')
  .isEmail()
  .notEmpty()
  .withMessage(`Must be a valid email`)
  .normalizeEmail()
  .custom(async (email) => {
    try {
      const user = await User.findOne({ email });

      if (user) {
        throw new Error('E-mail already in use');
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Internal Server Error');
      }
    }

    return true;
  });

export const passwordForRegister = check('password', 'Password is required')
  .trim()
  .isString()
  .notEmpty()
  .isLength({ min: env.MIN_PASSWORD_LENGTH })
  .withMessage(
    `Password must be at least ${env.MIN_PASSWORD_LENGTH} characters long`
  )
  .matches(/\d/)
  .withMessage('Must contain a number')
  .custom((password, { req }) => password === req.body.confirmPassword)
  .withMessage('Password and password confirm must be equal')
  .escape();

export const confirmPassword = check(
  'confirmPassword',
  'Confirm password is required'
)
  .trim()
  .isString()
  .notEmpty()
  .isLength({ min: env.MIN_PASSWORD_LENGTH })
  .withMessage(
    `Confirm password must be at least ${env.MIN_PASSWORD_LENGTH} characters long`
  )
  .matches(/\d/)
  .withMessage('Must contain a number')
  .custom((value, { req }) => value === req.body.password)
  .withMessage('Password confirm and password must be equal')
  .escape();
