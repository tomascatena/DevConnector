import { env } from '@config/config';
import { TokenTypes, tokenTypes } from '@config/tokens';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import getUnixTime from 'date-fns/getUnixTime';
import addMinutes from 'date-fns/addMinutes';
import addDays from 'date-fns/addDays';
import Token from '../models/token.model';

export const generateToken = (
  userId: ObjectId,
  expires: Date,
  type: TokenTypes,
  secret = env.JWT_SECRET
) => {
  const payload = {
    sub: userId,
    iat: getUnixTime(new Date()),
    exp: getUnixTime(expires),
    type,
  };

  return jwt.sign(payload, secret);
};

export const saveToken = async (
  token: string,
  userId: ObjectId,
  expires: Date,
  type: TokenTypes,
  blacklisted = false
) => {
  const tokenDoc = await Token.create({
    token,
    user: userId,
    expires,
    type,
    blacklisted,
  });

  return tokenDoc;
};

export const verifyToken = async (token: string, type: TokenTypes) => {
  const payload = jwt.verify(token, env.JWT_SECRET);

  const tokenDoc = await Token.findOne({
    token,
    type,
    user: payload.sub,
    blacklisted: false,
  });

  if (!tokenDoc) {
    throw new Error('Token not found');
  }

  return tokenDoc;
};

export const generateAuthTokens = async (userId: ObjectId) => {
  const accessTokenExpires = addMinutes(
    new Date(),
    env.JWT_ACCESS_EXPIRATION_MINUTES
  );
  const accessToken = generateToken(
    userId,
    accessTokenExpires,
    tokenTypes.ACCESS
  );

  const refreshTokenExpires = addDays(
    new Date(),
    env.JWT_REFRESH_EXPIRATION_DAYS
  );
  const refreshToken = generateToken(
    userId,
    refreshTokenExpires,
    tokenTypes.REFRESH
  );

  await saveToken(
    refreshToken,
    userId,
    refreshTokenExpires,
    tokenTypes.REFRESH
  );

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires,
    },
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires,
    },
  };
};
