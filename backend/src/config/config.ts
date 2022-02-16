import { cleanEnv, str, port, url, num } from 'envalid';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'test', 'production', 'staging'],
    desc: 'Node environment',
  }),
  PORT: port({ desc: 'API Port' }),
  MONGODB_URI: url({ desc: 'Mongo DB url' }),
  MIN_PASSWORD_LENGTH: num({
    desc: 'Minimum required password length',
  }),
  JWT_SECRET: str({
    desc: 'Json Web Token secret',
  }),
  JWT_EXPIRES_IN: str({
    desc: 'Json Web Token expires in option',
  }),
  JWT_ACCESS_EXPIRATION_MINUTES: num({
    desc: 'Number of minutes after which an access token expires',
  }),
  JWT_REFRESH_EXPIRATION_DAYS: num({
    desc: 'Number of days after which a refresh token expires',
  }),
  JWT_RESET_PASSWORD_EXPIRATION_MINUTES: num({
    desc: 'Number of minutes after which a reset password token expires',
  }),
  JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: num({
    desc: 'Number of minutes after which a verify email token expires',
  }),
  GITHUB_API_CLIENT_ID: str({
    desc: 'Github API clientId',
  }),
  GITHUB_API_CLIENT_SECRET: str({
    desc: 'github API clientSecret',
  }),
  API_BASE_URL: str({
    desc: 'API base URL',
  }),
});
