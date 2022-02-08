import { validationsResults } from '@middleware/validations.middleware';
import * as validators from '@validators/index';

export const loginUser = [
  validators.emailForLogin,
  validators.passwordForLogin,
  validationsResults(),
];
