import { env } from '@config/config';
import { connectDB } from '@config/connectDB';
import { Logger } from '@config/logger';
import app from './app';
import { LoggerToFile } from './config/logger';

const server = app.listen(env.PORT, () => {
  Logger.info(`Server listening on port ${env.PORT}`);

  connectDB();
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      Logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on('unhandledRejection', (err: Error | undefined, p) => {
  const errorToLog = {
    message: 'Unhandled Rejection at Promise',
    promise: p,
    error: err,
  };

  if (err instanceof Error) {
    errorToLog.error = {
      message: err.message,
      name: err.name,
      stack: err.stack,
    };
  }

  LoggerToFile.error(errorToLog);

  if (env.NODE_ENV === 'development') {
    Logger.error(err);
  }
});

process.on('uncaughtException', (err, origin) => {
  const errorToLog = {
    message: 'Uncaught Exception thrown',
    error: {
      message: err.message,
      name: err.name,
      stack: err.stack,
    },
    origin,
  };

  LoggerToFile.error(errorToLog);

  if (env.NODE_ENV === 'development') {
    Logger.error(err);
  }

  exitHandler();
});

process.on('SIGTERM', () => {
  Logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
