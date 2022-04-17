import { MOCK_EDUCATION } from '@helpers/mocks/mocks';
import { formatDate, duration, sortISODates } from './dateTime';

describe('dateTime', () => {
  describe('formatDate', () => {
    test.each([
      ['Dec 2021', '2021-12-28T20:49:16Z'],
      ['Dec 2021', '2021-12-28'],
      ['Dec 2021', '2021-12'],
      [null, null],
    ])('should return %s when the input is %s', (expectedValue, inputDate) => {
      const formattedDate = formatDate(inputDate);

      expect(formattedDate).toBe(expectedValue);
    });
  });

  describe('duration', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2022-12-28').getTime());
    });

    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    test.each([
      ['1 year', '2020-12-28', '2021-12-28'],
      ['4 years 9 months', '2017-03-28', '2021-12-28'],
      ['2 years', '2020-12-28', null],
      ['1 month', '2020-12-28', '2020-12-31'],
      [null, null, '2021-12-28'],
      [null, null, null],
    ])('should return %s when the from date is %s and the to date is %s', (expectedValue, from, to) => {
      const computedDuration = duration(from, to);

      expect(computedDuration).toBe(expectedValue);
    });
  });

  describe('sortISODates', () => {
    test('should return a negative number when the second date is greater than the first date', () => {
      const sortedDates = sortISODates(
        { ...MOCK_EDUCATION, from: '2021-01-01' },
        { ...MOCK_EDUCATION, from: '2022-01-01' }
      );

      expect(sortedDates).toBeLessThan(0);
    });

    test('should return a positive number when the second date is less than the first date', () => {
      const sortedDates = sortISODates(
        { ...MOCK_EDUCATION, from: '2022-01-01' },
        { ...MOCK_EDUCATION, from: '2021-01-01' }
      );

      expect(sortedDates).toBeGreaterThan(0);
    });

    test('should return zero when both dates are equal', () => {
      const sortedDates = sortISODates(
        { ...MOCK_EDUCATION, from: '2021-01-01' },
        { ...MOCK_EDUCATION, from: '2021-01-01' }
      );

      expect(sortedDates).toBe(0);
    });

    test('should return zero when both dates are null', () => {
      const sortedDates = sortISODates(
        { ...MOCK_EDUCATION, from: null },
        { ...MOCK_EDUCATION, from: null }
      );

      expect(sortedDates).toBe(0);
    });
  });
});
