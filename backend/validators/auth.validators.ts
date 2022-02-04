import { header } from 'express-validator';
import validator from 'validator';

export const authorizationHeaderValidator = header(
  'authorization',
  'Not authorized to access this endpoint'
)
  .notEmpty() //
  .isString()
  .trim()
  .custom((authorizationHeader) => {
    const jwt = authorizationHeader.split(' ')[1];

    return Boolean(jwt && validator.isJWT(jwt));
  })
  .withMessage('Invalid JWT')
  .escape();
