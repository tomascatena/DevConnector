import { IGithubRepo, IProfile, Nullable } from '../../typings/types';
import BioAndSkills from './BioAndSkills/BioAndSkills';
import ExperienceAndEducation from './ExperienceAndEducation/ExperienceAndEducation';
import GithubRepos from './GithubRepos/GithubRepos';
import React, { FC } from 'react';
import TopSection from './TopSection/TopSection';

type Props = {
  selectedUserProfile: IProfile;
  repos: Nullable<IGithubRepo[]>
}

const Profile:FC<Props> = ({ selectedUserProfile, repos }) => {
  const { githubUsername } = selectedUserProfile;

  return (
    <>
      <TopSection selectedUserProfile={selectedUserProfile}/>

      <BioAndSkills selectedUserProfile={selectedUserProfile}/>

      <ExperienceAndEducation selectedUserProfile={selectedUserProfile} />

      {
        githubUsername && repos &&
        <GithubRepos
          githubUsername={githubUsername}
          repos={repos}
        />
      }
    </>
  );
};

export default Profile;
