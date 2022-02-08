import * as validators from '@validators/index';
import { validationsResults } from '../validations.middleware';

export const registerUser = [
  validators.name,
  validators.emailForRegister,
  validators.passwordForRegister,
  validators.confirmPassword,
  validationsResults(),
];

export const deleteUser = [
  validators.authorizationHeader,
  validationsResults(),
];
