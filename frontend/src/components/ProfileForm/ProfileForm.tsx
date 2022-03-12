import { useState, FC, FormEvent } from 'react';
import { Typography, Button, Collapse } from '@mui/material';
import { StyledForm, ButtonsBox, SocialNetworkLinksBox, ShowSocialNetworkLinksBox } from './ProfileForm.styled';
import PersonIcon from '@mui/icons-material/Person';
import TextWithIcon from '@components/TextWithIcon/TextWithIcon';
import CustomSelect from '@components/CustomSelect/CustomSelect';
import { validate } from '../../utils/validator';
import { PROFESSIONAL_STATUS_OPTIONS } from '@constants/constants';
import CustomInput from '@components/CustomInput/CustomInput';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PrependIcon from '@components/PrependIcon/PrependIcon';
import LoadingButton from '@components/LoadingButton/LoadingButton';
import ChipsInput from '@components/ChipsInput/ChipsInput';
import { IProfile, Nullable } from '../../typings/types';
import { ROUTES } from '@constants/routes';
import LinkButton from '@components/LinkButton/LinkButton';
import SaveIcon from '@mui/icons-material/Save';

type Props = {
  dispatchCreateOrUpdateProfile: (profileForm: Partial<IProfile>) => void;
  loading: boolean;
  profile?: Nullable<Partial<IProfile>>;
  isEditing?: boolean;
};

const ProfileForm: FC<Props> = ({ dispatchCreateOrUpdateProfile, loading, profile, isEditing = false }) => {
  const [showSocialNetworkLinks, setShowSocialNetworkLinks] = useState(false);

  const initialCompanyState = { value: profile?.company || '', isValid: Boolean(profile?.company) };
  const initialWebsiteState = { value: profile?.website || '', isValid: Boolean(profile?.website) };
  const initialLocationState = { value: profile?.location || '', isValid: Boolean(profile?.location) };
  const initialStatusState = { value: profile?.status || '', isValid: Boolean(profile?.status) };
  const initialBioState = { value: profile?.bio || '', isValid: Boolean(profile?.bio) };
  const initialTwitterState = { value: profile?.social?.twitter || '', isValid: true };
  const initialFacebookState = { value: profile?.social?.facebook || '', isValid: true };
  const initialLinkedinState = { value: profile?.social?.linkedin || '', isValid: true };
  const initialYoutubeState = { value: profile?.social?.youtube || '', isValid: true };
  const initialInstagramState = { value: profile?.social?.instagram || '', isValid: true };
  const initialGithubUsernameState = { value: profile?.githubUsername || '', isValid: Boolean(profile?.githubUsername) };
  const initialSkillsState = { value: profile?.skills || [], isValid: Boolean(profile?.skills?.length) };

  const [companyState, setCompanyState] = useState(initialCompanyState);
  const [websiteState, setWebsiteState] = useState(initialWebsiteState);
  const [locationState, setLocationState] = useState(initialLocationState);
  const [statusState, setStatusState] = useState(initialStatusState);
  const [bioState, setBioState] = useState(initialBioState);
  const [twitterState, setTwitterState] = useState(initialTwitterState);
  const [facebookState, setFacebookState] = useState(initialFacebookState);
  const [linkedInState, setLinkedInState] = useState(initialLinkedinState);
  const [youtubeState, setYoutubeState] = useState(initialYoutubeState);
  const [instagramState, setInstagramState] = useState(initialInstagramState);
  const [githubUsernameState, setGithubUsernameState] = useState(initialGithubUsernameState);

  type SkillsState = {value: string[];isValid: boolean;}
  const [skillsState, setSkillsState] = useState<SkillsState>(initialSkillsState);

  const formData = [
    companyState,
    websiteState,
    locationState,
    statusState,
    skillsState,
    githubUsernameState,
    bioState,
    twitterState,
    facebookState,
    linkedInState,
    youtubeState,
    instagramState,
  ];

  const isButtonDisabled = formData.some(({ isValid }) => !isValid);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileForm = {
      company: companyState.value,
      website: websiteState.value,
      location: locationState.value,
      status: statusState.value,
      skills: skillsState.value,
      githubUsername: githubUsernameState.value,
      bio: bioState.value,
      social: {
        twitter: twitterState.value,
        facebook: facebookState.value,
        linkedin: linkedInState.value,
        youtube: youtubeState.value,
        instagram: instagramState.value,
      },
    };

    dispatchCreateOrUpdateProfile(profileForm);
  };

  return (
    <StyledForm
      noValidate
      onSubmit={handleFormSubmit}
    >
      <TextWithIcon
        icon={<PersonIcon color='action' />}
        text="Let's get some information to make your profile stand out."
      />

      <CustomSelect
        inputState={statusState}
        setInputState={setStatusState}
        label='Select Your Professional Status'
        customHelperText='Give us an idea of where you are in your career.'
        validation={validate(statusState.value).required()}
        options={PROFESSIONAL_STATUS_OPTIONS}
        isDisabled={loading}
        isRequired
        autofocus={!isEditing}
      />

      <CustomInput
        inputState={companyState}
        setInputState={setCompanyState}
        validation={validate(companyState.value).required().isLength({ min: 3, max: 50 })}
        type='text'
        label='Company'
        placeholder='Company'
        customHelperText='Could be your own company or one you work for.'
        isDisabled={loading}
        isRequired
      />

       <CustomInput
         inputState={websiteState}
         setInputState={setWebsiteState}
         validation={validate(websiteState.value).isURL()}
         type='text'
         label='Website'
         placeholder='Website'
         customHelperText='Could be your own or a company website.'
         isDisabled={loading}
       />

       <CustomInput
         inputState={githubUsernameState}
         setInputState={setGithubUsernameState}
         validation={validate(githubUsernameState.value).isGithubUsername()}
         type='text'
         label='Github Username'
         placeholder='Github Username'
         customHelperText='If you want your latest repos and a Github link, include your username.'
         isDisabled={loading}
       />

      <CustomInput
        inputState={locationState}
        setInputState={setLocationState}
        validation={validate(locationState.value).required().isLength({ min: 3, max: 50 })}
        type='text'
        label='Location'
        placeholder='Location'
        customHelperText='City &amp; state suggested (eg. Austin, TX).'
        isDisabled={loading}
        isRequired
      />

      <ChipsInput
        inputState={skillsState}
        setInputState={setSkillsState}
        label='Skills'
        placeholder='Add a skill and a comma.'
        customHelperText='Add your skills separated by commas (eg. Javascript, PHP, Java, SQL, etc).'
        isDisabled={loading}
        isRequired
      />

      <CustomInput
        inputState={bioState}
        setInputState={setBioState}
        validation={validate(bioState.value).isLength({ min: 1, max: 100 })}
        type='text'
        label='Bio'
        placeholder='A short bio of yourself.'
        customHelperText='Tell us a little about yourself.'
        isMultiline
        isDisabled={loading}
      />

      <ShowSocialNetworkLinksBox>
        <Button
          onClick={() => setShowSocialNetworkLinks(!showSocialNetworkLinks)}
          sx={{ width: 'fit-content' }}
          variant='outlined'
        >
          {showSocialNetworkLinks ? 'Hide' : 'add'} Social Network Links
        </Button>

        <Typography color='text.primary'>Optional</Typography>
      </ShowSocialNetworkLinksBox>

      <Collapse
        in={showSocialNetworkLinks}
        timeout={750}
        easing='cubic-bezier(0.4, 0, 0.2, 1)'
      >
        <SocialNetworkLinksBox>
          <PrependIcon
            icon={<TwitterIcon />}
            iconColor='#1DA1F2'
          >
            <CustomInput
              inputState={twitterState}
              setInputState={setTwitterState}
              validation={validate(twitterState.value).isURL()}
              type='text'
              label='Twitter URL'
              placeholder='Twitter URL'
              isDisabled={loading}
            />
          </PrependIcon>

          <PrependIcon
            icon={<FacebookIcon />}
            iconColor='#4267B2'
          >
            <CustomInput
              inputState={facebookState}
              setInputState={setFacebookState}
              validation={validate(facebookState.value).isURL()}
              type='text'
              label='Facebook URL'
              placeholder='Facebook URL'
              isDisabled={loading}
            />
          </PrependIcon>

          <PrependIcon
            icon={<YouTubeIcon />}
            iconColor='#FF0000'
          >
            <CustomInput
              inputState={youtubeState}
              setInputState={setYoutubeState}
              validation={validate(youtubeState.value).isURL()}
              type='text'
              label='Youtube URL'
              placeholder='Youtube URL'
              isDisabled={loading}
            />
          </PrependIcon>

          <PrependIcon
            icon={<LinkedInIcon />}
            iconColor='#0e76a8'
          >
            <CustomInput
              inputState={linkedInState}
              setInputState={setLinkedInState}
              validation={validate(linkedInState.value).isURL()}
              type='text'
              label='LinkedIn URL'
              placeholder='LinkedIn URL'
              isDisabled={loading}
            />
          </PrependIcon>

          <PrependIcon
            icon={<InstagramIcon />}
            iconColor='#405DE6'
          >
            <CustomInput
              inputState={instagramState}
              setInputState={setInstagramState}
              validation={validate(instagramState.value).isURL()}
              type='text'
              label='Instagram URL'
              placeholder='Instagram URL'
              isDisabled={loading}
            />
          </PrependIcon>
        </SocialNetworkLinksBox>
      </Collapse>

      <ButtonsBox>
        <LoadingButton
          sx={{ maxWidth: { sm: '10rem' } }}
          variant='contained'
          isDisabled={isButtonDisabled}
          isLoading={loading}
          type='submit'
          text='Save'
          startIcon={<SaveIcon/>}
        />

        <LinkButton to={ROUTES.DASHBOARD}>
          Go To Dashboard
        </LinkButton>
      </ButtonsBox>
    </StyledForm>
  );
};

export default ProfileForm;
