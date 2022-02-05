import { check } from 'express-validator';

export const userIdValidator = check('userId', 'userId is required')
  .notEmpty()
  .isString()
  .trim()
  .isMongoId()
  .withMessage('Invalid userId')
  .escape();
