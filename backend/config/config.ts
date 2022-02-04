import { cleanEnv, str, port, url, num } from 'envalid';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const env = cleanEnv(process.env, {
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
});

export default env;
