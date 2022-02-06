import {
  educationIdParamValidator,
  experienceIdParamValidator,
  githubUsernameParamValidator,
  profileEducationValidator,
  profileExperienceValidator,
  userIdValidator,
  userProfileOptionalFieldsValidator,
  userSkillsValidator,
  userStatusValidator,
  userIdParamValidator,
} from '@validators/profile.validators';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { validationResult } from 'express-validator';

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

export const profileExperienceValidation = [
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

export const profileEducationValidation = [
  ...profileEducationValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message:
          'Invalid information to create/update a user profile education',
        errors: errors.mapped(),
      });
    }

    next();
  },
];

export const deleteProfileEducationValidation = [
  educationIdParamValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to delete a user profile education',
        errors: errors.mapped(),
      });
    }

    next();
  },
];

export const getUserReposValidation = [
  githubUsernameParamValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid information to get user Github repos',
        errors: errors.mapped(),
      });
    }

    next();
  },
];
