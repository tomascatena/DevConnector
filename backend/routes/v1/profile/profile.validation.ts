import {
  experienceIdParamValidator,
  profileExperienceValidator,
  userIdValidator,
  userProfileOptionalFieldsValidator,
  userSkillsValidator,
  userStatusValidator,
} from '../../../validators/profile.validators';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';
import { authorizationHeaderValidator } from '../../../validators/auth.validators';
import { userIdParamValidator } from '../../../validators/profile.validators';

export const getUserProfileByIdValidation = [
  userIdParamValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to get a user profile',
        errors: errors.mapped(),
      });
    }

    next();
  },
];

export const getUserProfileValidation = [
  authorizationHeaderValidator,
  userIdValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to get a user profile',
        errors: errors.mapped(),
      });
    }

    next();
  },
];

export const userProfileValidation = [
  authorizationHeaderValidator,
  userIdValidator,
  userStatusValidator,
  userSkillsValidator,
  ...userProfileOptionalFieldsValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to create a user profile',
        errors: errors.mapped(),
      });
    }

    next();
  },
];

export const deleteProfileValidation = [
  authorizationHeaderValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to delete a user profile',
        errors: errors.mapped(),
      });
    }

    next();
  },
];

export const profileExperienceValidation = [
  authorizationHeaderValidator,
  ...profileExperienceValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message:
          'Invalid information to create/update a user profile experience',
        errors: errors.mapped(),
      });
    }

    next();
  },
];

export const deleteProfileExperienceValidation = [
  authorizationHeaderValidator,
  experienceIdParamValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to delete a user profile experience',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
