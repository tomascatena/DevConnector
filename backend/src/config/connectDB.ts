import mongoose from 'mongoose';
import { env } from './config';
import { Logger } from './logger';

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);

    Logger.info(`MongoDB connected`);
  } catch (error) {
    if (error instanceof Error) {
      Logger.error(
        `Something when wrong when connecting to mongoDB: ${error.message}`
      );

      process.exit(1);
    }
  }
};
