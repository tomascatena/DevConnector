import { env } from '../config/config';
import { check } from 'express-validator';
import User from '../models/user.model';

export const nameValidator = check('name', 'Name is required')
  .isString() //
  .trim()
  .notEmpty()
  .isLength({ min: 2 })
  .withMessage(`Name must be at least 2 characters long`)
  .escape();

export const emailValidator = check('email', 'Email is required')
  .isEmail() //
  .notEmpty()
  .withMessage(`Must be a valid email`)
  .normalizeEmail()
  .custom(async (email) => {
    try {
      const user = await User.findOne({ email });

      if (Boolean(user)) {
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

export const passwordValidator = check('password', 'Password is required')
  .isString() //
  .trim()
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

export const confirmPasswordValidator = check(
  'confirmPassword',
  'Confirm password is required'
)
  .isString() //
  .trim()
  .notEmpty()
  .isLength({ min: env.MIN_PASSWORD_LENGTH })
  .withMessage(
    `Confirm password must be at least ${env.MIN_PASSWORD_LENGTH} characters long`
  )
  .matches(/\d/)
  .withMessage('Must contain a number')
  .custom((confirmPassword, { req }) => confirmPassword === req.body.password)
  .withMessage('Password confirm and password must be equal')
  .escape();
