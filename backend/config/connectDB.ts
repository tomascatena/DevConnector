import { env } from './config';
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);

    console.log(`MongoDB connected`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(
        `Something when wrong when connecting to mongoDB: ${error.message}`
      );

      process.exit(1);
    }
  }
};
