import Profile, { IProfile } from '@models/profile.model';
import { IEducation } from '@models/schemas/education.schema';
import { IExperience } from '@models/schemas/experience.schema';

export const getProfileByUserId = async (userId: string) => {
  const profile = await Profile.findOne({ user: userId }).populate('user', [
    'firstName',
    'lastName',
    'avatar',
    '_id',
  ]);

  return profile;
};

export const getAllProfiles = async () => {
  const profiles = await Profile.find().populate('user', [
    'firstName',
    'lastName',
    'avatar',
    '_id',
  ]);

  return profiles;
};

export const getProfileByUserIdAndUpdate = async (
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

export const addProfileExperience = async (
  userId: string,
  experienceToAdd: Partial<IExperience>
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId },
    {
      $push: {
        experience: experienceToAdd,
      },
    },
    { new: true }
  );

  return profile;
};

export const updateProfileExperience = async (
  userId: string,
  experience: Partial<IExperience>
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId, 'experience._id': experience._id },
    {
      $set: {
        'experience.$.title': experience.title,
        'experience.$.company': experience.company,
        'experience.$.location': experience.location,
        'experience.$.from': experience.from,
        'experience.$.to': experience.to,
        'experience.$.current': experience.current,
        'experience.$.description': experience.description,
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

export const addProfileEducation = async (
  userId: string,
  educationToAdd: Partial<IEducation>
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId },
    {
      $push: {
        education: educationToAdd,
      },
    },
    { new: true }
  );

  return profile;
};

export const updateProfileEducation = async (
  userId: string,
  education: Partial<IEducation>
) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId, 'education._id': education._id },
    {
      $set: {
        'education.$.school': education.school,
        'education.$.degree': education.degree,
        'education.$.fieldOfStudy': education.fieldOfStudy,
        'education.$.from': education.from,
        'education.$.to': education.to,
        'education.$.current': education.current,
        'education.$.description': education.description,
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
