import expressWinston from 'express-winston';
import winston from 'winston';
import { env } from '@config/config';
import 'winston-daily-rotate-file';

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const consoleFormat = winston.format.combine(
  env.NODE_ENV === 'development'
    ? winston.format.colorize()
    : winston.format.uncolorize(),
  enumerateErrorFormat(),
  winston.format.timestamp(),
  winston.format.splat(),
  winston.format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
  })
);

const fileFormat = winston.format.combine(
  env.NODE_ENV === 'development'
    ? winston.format.colorize()
    : winston.format.uncolorize(),
  enumerateErrorFormat(),
  winston.format.timestamp(),
  winston.format.splat(),
  winston.format.printf((info) => {
    return JSON.stringify(info);
  })
);

export const customLogger = (
  level = env.NODE_ENV === 'development' ? 'debug' : 'info'
) =>
  expressWinston.logger({
    transports: [
      new winston.transports.Console({
        handleExceptions: true,
        format: consoleFormat,
        level,
        stderrLevels: ['error'],
      }),

      new winston.transports.DailyRotateFile({
        format: winston.format.combine(fileFormat, winston.format.uncolorize()),
        filename: '../logs/activity/activity-%DATE%.json',
        level: 'info',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
      }),
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
      winston.format.prettyPrint()
    ),
  });
