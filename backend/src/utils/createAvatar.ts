import gravatar from 'gravatar';

export const createAvatar = (email: string) => {
  return gravatar.url(
    email!,
    {
      s: '200',
      r: 'pg',
      d: 'retro',
    },
    true
  );
};
