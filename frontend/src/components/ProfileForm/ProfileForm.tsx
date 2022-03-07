import { useState, FC, FormEvent } from 'react';
import { Typography, Grid, Button, Collapse } from '@mui/material';
import { StyledForm, ButtonsBox, SocialNetworkLinksBox, ShowSocialNetworkLinksBox } from './ProfileForm.styled';
import PersonIcon from '@mui/icons-material/Person';
import TextWithIcon from '@components/TextWithIcon/TextWithIcon';
import CustomSelect from '@components/CustomSelect/CustomSelect';
import { validate } from '../../utils/validator';
import { PROFESSIONAL_STATUS_OPTIONS } from '@constants/constants';
import CustomOutlinedInput from '@components/CustomOutlinedInput/CustomOutlinedInput';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PrependIcon from '@components/PrependIcon/PrependIcon';
import LoadingButton from '@components/LoadingButton/LoadingButton';
import { Link } from 'react-router-dom';
import ChipsInput from '@components/ChipsInput/ChipsInput';
import { IProfile } from '../../typings/types';
import { ROUTES } from '@constants/routes';

type Props = {
  dispatchCreateOrUpdateProfile: (profileForm: Partial<IProfile>) => void;
  loading: boolean;
  profile?: Partial<IProfile>;
};

const ProfileForm: FC<Props> = ({ dispatchCreateOrUpdateProfile, loading, profile }) => {
  const [showSocialNetworkLinks, setShowSocialNetworkLinks] = useState(false);

  const [companyState, setCompanyState] = useState({
    value: profile?.company || '',
    isValid: false,
  });

  const [websiteState, setWebsiteState] = useState({
    value: profile?.website || '',
    isValid: false,
  });

  const [locationState, setLocationState] = useState({
    value: profile?.location || '',
    isValid: false,
  });

  const [statusState, setStatusState] = useState({
    value: profile?.status || '',
    isValid: false,
  });

  const [bioState, setBioState] = useState({
    value: profile?.bio || '',
    isValid: false,
  });

  const [twitterState, setTwitterState] = useState({
    value: profile?.social?.twitter || '',
    isValid: false,
  });

  const [facebookState, setFacebookState] = useState({
    value: profile?.social?.facebook || '',
    isValid: false,
  });

  const [linkedInState, setLinkedInState] = useState({
    value: profile?.social?.linkedin || '',
    isValid: false,
  });

  const [youtubeState, setYoutubeState] = useState({
    value: profile?.social?.youtube || '',
    isValid: false,
  });

  const [instagramState, setInstagramState] = useState({
    value: profile?.social?.instagram || '',
    isValid: false,
  });

  const [githubUsernameState, setGithubUsernameState] = useState({
    value: profile?.githubUsername || '',
    isValid: false,
  });

  const [skillsState, setSkillsState] = useState<{
    value: string[];
    isValid: boolean;
  }>({
    value: profile?.skills || [],
    isValid: false,
  });

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

      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <CustomSelect
            inputState={statusState}
            setInputState={setStatusState}
            label='Select Your Professional Status'
            customHelperText='Give us an idea of where you are in your career.'
            validation={validate(statusState.value).required()}
            options={PROFESSIONAL_STATUS_OPTIONS}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <CustomOutlinedInput
            inputState={companyState}
            setInputState={setCompanyState}
            validation={validate(companyState.value).required().isLength({ min: 3, max: 50 })}
            type='text'
            label='Company'
            placeholder='Company'
            customHelperText='Could be your own company or one you work for.'
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <CustomOutlinedInput
            inputState={websiteState}
            setInputState={setWebsiteState}
            validation={validate(websiteState.value).isURL()}
            type='text'
            label='Website'
            placeholder='Website'
            isRequired={false}
            customHelperText='Could be your own or a company website.'
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <CustomOutlinedInput
            inputState={githubUsernameState}
            setInputState={setGithubUsernameState}
            validation={validate(githubUsernameState.value).isGithubUsername()}
            type='text'
            label='Github Username'
            placeholder='Github Username'
            isRequired={false}
            customHelperText='If you want your latest repos and a Github link, include your username.'
          />
        </Grid>
      </Grid>

      <CustomOutlinedInput
        inputState={locationState}
        setInputState={setLocationState}
        validation={validate(locationState.value).required().isLength({ min: 3, max: 50 })}
        type='text'
        label='Location'
        placeholder='Location'
        customHelperText='City &amp; state suggested (eg. Austin, TX).'
      />

      <ChipsInput
        inputState={skillsState}
        setInputState={setSkillsState}
        label='Skills'
        placeholder='Add a skill and press Enter.'
        customHelperText='Add your skills (eg. Javascript, PHP, Java, SQL, etc).'
      />

      <CustomOutlinedInput
        inputState={bioState}
        setInputState={setBioState}
        validation={validate(bioState.value).isLength({ min: 1, max: 100 })}
        type='text'
        label='Bio'
        isRequired={false}
        placeholder='A short bio of yourself.'
        customHelperText='Tell us a little about yourself.'
        isMultiline
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
            <CustomOutlinedInput
              inputState={twitterState}
              setInputState={setTwitterState}
              validation={validate(twitterState.value).isURL()}
              type='text'
              label='Twitter URL'
              placeholder='Twitter URL'
              isRequired={false}
            />
          </PrependIcon>

          <PrependIcon
            icon={<FacebookIcon />}
            iconColor='#4267B2'
          >
            <CustomOutlinedInput
              inputState={facebookState}
              setInputState={setFacebookState}
              validation={validate(facebookState.value).isURL()}
              type='text'
              label='Facebook URL'
              placeholder='Facebook URL'
              isRequired={false}
            />
          </PrependIcon>

          <PrependIcon
            icon={<YouTubeIcon />}
            iconColor='#FF0000'
          >
            <CustomOutlinedInput
              inputState={youtubeState}
              setInputState={setYoutubeState}
              validation={validate(youtubeState.value).isURL()}
              type='text'
              label='Youtube URL'
              placeholder='Youtube URL'
              isRequired={false}
            />
          </PrependIcon>

          <PrependIcon
            icon={<LinkedInIcon />}
            iconColor='#0e76a8'
          >
            <CustomOutlinedInput
              inputState={linkedInState}
              setInputState={setLinkedInState}
              validation={validate(linkedInState.value).isURL()}
              type='text'
              label='LinkedIn URL'
              placeholder='LinkedIn URL'
              isRequired={false}
            />
          </PrependIcon>

          <PrependIcon
            icon={<InstagramIcon />}
            iconColor='#405DE6'
          >
            <CustomOutlinedInput
              inputState={instagramState}
              setInputState={setInstagramState}
              validation={validate(instagramState.value).isURL()}
              type='text'
              label='Instagram URL'
              placeholder='Instagram URL'
              isRequired={false}
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
          text='Submit'
        />

        <Button
          component={Link}
          to={ROUTES.DASHBOARD}
          variant='outlined'
        >
          Go To Dashboard
        </Button>
      </ButtonsBox>
    </StyledForm>
  );
};

export default ProfileForm;
