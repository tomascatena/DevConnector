import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { env } from '@config/config';
import bcryptjs from 'bcryptjs';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value: string) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: env.MIN_PASSWORD_LENGTH,
      validate(value: string) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            'Password must contain at least one letter and one number'
          );
        }
      },
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcryptjs.genSalt(12);

  this.password = await bcryptjs.hash(this.password, salt);
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
