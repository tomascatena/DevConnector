import { addProtocolIfMissing } from './URLs';

describe('URLs', () => {
  it.each([
    ['https://www.google.com', 'www.google.com'],
    ['https://www.google.com', 'https://www.google.com'],
  ])('should return %s when the input url is %s', (expectedValue, inputURL) => {
    const urlWithProtocol = addProtocolIfMissing(inputURL);

    expect(urlWithProtocol).toBe(expectedValue);
  });
});
