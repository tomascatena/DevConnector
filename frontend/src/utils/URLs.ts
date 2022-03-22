export const addProtocolIfMissing = (url: string) => {
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }

  return url;
};
