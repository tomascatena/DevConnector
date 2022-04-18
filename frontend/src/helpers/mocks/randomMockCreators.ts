import {
  randEmail,
  randLastName,
  randUuid,
  randFirstName,
  randCompanyName,
  randJobTitle,
  randCity,
  randState,
  randPastDate,
  randRecentDate,
  randJobArea,
  randUrl,
  randProgrammingLanguage,
  randNumber,
  randTextRange
} from '@ngneat/falso';
import {
  IUser,
  IProfile,
  IEducation,
  IExperience,
  ISocial
} from '../../typings/types';

// dec2hex :: Integer -> String
// i.e. 0-255 -> '00'-'ff'
const dec2hex = (dec: number) => {
  return dec.toString(16).padStart(2, '0');
};

// generateId :: Integer -> String
const generateId = (len: number) => {
  const arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
};

export const createRandomUser = (): IUser => ({
  _id: randUuid(),
  firstName: randFirstName(),
  lastName: randLastName(),
  avatar: `https://s.gravatar.com/avatar/${generateId(20)}?s=200&r=pg&d=retro`,
  password: randUuid(),
  email: randEmail()
});

export const createRandomExperience = (): IExperience => ({
  _id: randUuid(),
  company: randCompanyName(),
  title: randJobTitle(),
  location: `${randCity()}, ${randState()}`,
  from: randPastDate({ years: 5 }).toISOString(),
  to: randRecentDate({ days: 30 }).toISOString(),
  current: false,
  description: randTextRange({ min: 50, max: 500 })
});

export const createRandomEducation = (): IEducation => ({
  _id: randUuid(),
  school: `University of ${randCity()}`,
  degree: randJobArea(),
  fieldOfStudy: randJobArea(),
  from: randPastDate({ years: 5 }).toISOString(),
  to: randRecentDate({ days: 30 }).toISOString(),
  current: false,
  description: randTextRange({ min: 50, max: 500 })
});

export const createRandomSocialLinks = ():ISocial => ({
  youtube: randUrl(),
  twitter: randUrl(),
  facebook: randUrl(),
  linkedin: randUrl(),
  instagram: randUrl(),
});

export const createRandomSkills = (): string[] => {
  const randomNumber = randNumber({ min: 2, max: 15 });

  const randomArrayOfNonUniqueSkills = Array.from(Array(randomNumber).keys()).map(i => randProgrammingLanguage());

  return Array.from(new Set(randomArrayOfNonUniqueSkills));
};

export const createRandomUserProfile = ():IProfile => ({
  _id: randUuid(),
  user: createRandomUser(),
  company: randCompanyName(),
  website: randUrl(),
  location: `${randCity()}, ${randState()}`,
  status: randJobTitle(),
  skills: createRandomSkills(),
  bio: randTextRange({ min: 50, max: 500 }),
  githubUsername: 'tomascatena',
  experience: [
    createRandomExperience(),
    createRandomExperience(),
    createRandomExperience(),
    createRandomExperience(),
  ],
  education: [
    createRandomEducation(),
    createRandomEducation(),
    createRandomEducation(),
    createRandomEducation(),
  ],
  social: createRandomSocialLinks()
});
