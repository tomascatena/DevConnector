import validator from 'validator';

type Handler = (message?: string, options?: any) => ValidatorResult;
type HandlerNoMessage = (options?: any) => ValidatorResult;
type CustomHandler = (
  message: string | null,
  callback: (value: string) => boolean
) => ValidatorResult;

export interface ValidatorResult {
  required: Handler;
  isNumeric: Handler;
  isAlpha: Handler;
  isAlphaWithSpecialCharacters: Handler;
  isEmail: Handler;
  isLength: HandlerNoMessage;
  custom: CustomHandler;
  exec: () => { isValid: boolean; validationErrors: string[]; value: string };
}

export const validate = (value: string): ValidatorResult => {
  const _errors: string[] = [];
  const _value = value;

  return {
    required(message = 'This field is required.') {
      if (validator.trim(_value)) {
        return this;
      }

      _errors.push(message);
      return this;
    },
    isNumeric(message = 'Must be a number.') {
      if (validator.isNumeric(_value)) {
        return this;
      }

      _errors.push(message);
      return this;
    },
    isEmail(message = 'Must be a valid email.') {
      if (validator.isEmail(_value)) {
        return this;
      }

      _errors.push(message);
      return this;
    },
    isLength({ min, max }: { min: number; max: number }) {
      if (validator.isLength(_value, { min, max })) {
        return this;
      }

      _errors.push(`Must be between ${min} and ${max} characters long.`);
      return this;
    },
    isAlpha(message = `Must contain only letters.`) {
      if (validator.isAlpha(_value)) {
        return this;
      }

      _errors.push(message);
      return this;
    },
    isAlphaWithSpecialCharacters(
      message = `Must contain only letters with or without accents.`
    ) {
      const regex = /^[^\s]+[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;
      if (regex.test(_value)) {
        return this;
      }

      _errors.push(message);
      return this;
    },
    custom(message, cb) {
      if (cb(_value) || message === null) {
        return this;
      }

      _errors.push(message);
      return this;
    },
    exec: () => {
      return {
        value: _value,
        isValid: _errors.length === 0,
        validationErrors: _errors,
      };
    },
  };
};
