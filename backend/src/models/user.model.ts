import mongoose, { Model, Schema } from 'mongoose';
import validator from 'validator';
import { env } from '@config/config';
import bcryptjs from 'bcryptjs';

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  isPasswordMatch: (password: string) => Promise<boolean>;
}

interface IUserModel extends Model<IUser> {
  isEmailTaken: (email: string, excludeUserId?: string | undefined) => boolean;
}

const userSchema = new Schema<IUser, IUserModel>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
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

userSchema.statics.isEmailTaken = async function (
  email: string,
  excludeUserId: string | undefined = undefined
) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });

  return !!user;
};

userSchema.methods.isPasswordMatch = async function (password: string) {
  return bcryptjs.compare(password, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcryptjs.genSalt(12);

  this.password = await bcryptjs.hash(this.password, salt);
});

const User: IUserModel = mongoose.model<IUser, IUserModel>('User', userSchema);

export default User;
