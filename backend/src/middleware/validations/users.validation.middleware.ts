import * as validators from '@validators/index';
import { validationsResults } from '../validations.middleware';

export const registerUser = [
  validators.firstName,
  validators.lastName,
  validators.emailForRegister,
  validators.passwordForRegister,
  validators.confirmPassword,
  validationsResults(),
];

export const deleteUser = [
  validators.authorizationHeader,
  validationsResults(),
];
