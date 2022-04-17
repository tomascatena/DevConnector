import { validate, DEFAULT_ERROR_MESSAGES } from './validator';

describe('validator', () => {
  describe('required', () => {
    it('should validate required value when input is ""', () => {
      const validationResults = validate('').required().exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual([DEFAULT_ERROR_MESSAGES.required]);
    });

    it('should validate required value when input is "input string"', () => {
      const validationResults = validate('input string').required().exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });
  });

  describe('isNumeric', () => {
    it('should validate non numeric input', () => {
      const validationResults = validate('123abc').isNumeric().exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual([DEFAULT_ERROR_MESSAGES.isNumeric]);
    });

    it('should validate numeric input', () => {
      const validationResults = validate('123').isNumeric().exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });
  });

  describe('isEmail', () => {
    it('should validate invalid email', () => {
      const validationResults = validate('emailexample.com').isEmail().exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual([DEFAULT_ERROR_MESSAGES.isEmail]);
    });

    it('should validate correct email', () => {
      const validationResults = validate('email@example.com').isEmail().exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });

    it('should validate and normalize correct email', () => {
      const validationResults = validate('EMAIL@EXAMPLE.COM').isEmail().exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
      expect(validationResults.value).toBe('email@example.com');
    });
  });

  describe('isLength', () => {
    it.each([
      ['a', 2, 10],
      ['too long input', 2, 10],
      ['', 2, 10],
    ])('should validate length when input is %s', (input, min, max) => {
      const validationResults = validate(input).isLength({ min, max }).exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual([`Must be between ${min} and ${max} characters long.`]);
    });

    it('should validate input of correct length', () => {
      const validationResults = validate('example').isLength({ min: 2, max: 10 }).exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });
  });

  describe('isAlphaWithSpecialCharacters', () => {
    it.each([
      [''],
      [' '],
      [' some string'],
      ['some string !'],
      ['some string!'],
      ['! some string'],
      ['!some string'],
      ['some !string'],
      ['some! string'],
      ['some ! string'],
      ['!#'],
    ])('should validate length when input is %s', (input) => {
      const validationResults = validate(input).isAlphaWithSpecialCharacters().exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual([DEFAULT_ERROR_MESSAGES.isAlphaWithSpecialCharacters]);
    });

    it.each([
      ['tomas'],
      ['mañana'],
    ])('should validate %s', (input) => {
      const validationResults = validate(input).isAlphaWithSpecialCharacters().exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });
  });

  describe('isURL', () => {
    it('should validate invalid URL', () => {
      const validationResults = validate('googlecom').isURL().exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual([DEFAULT_ERROR_MESSAGES.isURL]);
    });

    it('should validate correct URL', () => {
      const validationResults = validate('http://www.google.com').isURL().exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });
  });

  describe('isAlpha', () => {
    it('should validate invalid alpha input', () => {
      const validationResults = validate('abc123').isAlpha().exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual([DEFAULT_ERROR_MESSAGES.isAlpha]);
    });

    it('should validate correct alpha input', () => {
      const validationResults = validate('correct').isAlpha().exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });
  });

  describe('isGithubUsername', () => {
    it.each([
      [''],
      [' github-username'],
      ['github-username '],
      ['github--username'],
      ['-github-username'],
      ['github-username-'],
      ['github-username-github-username-github-username'],
    ])('should validate invalid Github username', (input) => {
      const validationResults = validate(input).isGithubUsername().exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual([DEFAULT_ERROR_MESSAGES.isGithubUsername]);
    });

    it('should validate correct Github username', () => {
      const validationResults = validate('github-username').isGithubUsername().exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });
  });

  describe('custom', () => {
    it('should validate a wrong input for a custom validation passed as a callback', () => {
      const validationResults = validate('some input').custom('Custom error message',
        value => {
          return value === 'I was expecting something else';
        }
      ).exec();

      expect(validationResults.isValid).toBe(false);
      expect(validationResults.validationErrors).toStrictEqual(['Custom error message']);
    });

    it('should validate a correct input for a custom validation passed as a callback', () => {
      const validationResults = validate('correct input').custom('Custom error message',
        value => {
          return value === 'correct input';
        }
      ).exec();

      expect(validationResults.isValid).toBe(true);
      expect(validationResults.validationErrors).toStrictEqual([]);
    });
  });
});
