import Profile, { IProfile } from '@models/profile.model';
import { IEducation } from '@models/schemas/education.schema';
import { IExperience } from '@models/schemas/experience.schema';

export const getPopulatedProfileByUserId = async (userId: string) => {
  const profile = await Profile.findOne({ user: userId }).populate('user', [
    'name',
    'avatar',
  ]);

  return profile;
};

export const getAllPopulatedProfiles = async () => {
  const profiles = await Profile.find().populate('user', ['name', 'avatar']);

  return profiles;
};

export const findProfileByUserIdAndUpdate = async (
  userId: string,
  profileFields: Partial<IProfile>
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId },
    { $set: profileFields },
    { new: true }
  );

  return profile;
};

export const createProfile = async (profileFields: Partial<IProfile>) => {
  const profile = await Profile.create(profileFields);

  return profile;
};

export const removeProfileByUserId = async (userId: string) => {
  const profile = await Profile.findOneAndRemove({ user: userId });

  return profile;
};

export const addOrUpdateProfileExperience = async (
  userId: string,
  experience: IExperience[]
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId },
    {
      $push: {
        experience: {
          $each: [...experience!],
          $position: 0,
        },
      },
    },
    { new: true }
  );

  return profile;
};

export const removeExperienceFromProfile = async (
  userId: string,
  experienceId: string
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId },
    {
      $pull: {
        experience: { _id: experienceId },
      },
    },
    { new: true }
  );

  return profile;
};

export const addOrUpdateProfileEducation = async (
  userId: string,
  education: IEducation[]
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId },
    {
      $push: {
        education: {
          $each: [...education!],
          $position: 0,
        },
      },
    },
    { new: true }
  );

  return profile;
};

export const removeEducationFromProfile = async (
  userId: string,
  educationId: string
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId },
    {
      $pull: {
        education: { _id: educationId },
      },
    },
    { new: true }
  );

  return profile;
};
