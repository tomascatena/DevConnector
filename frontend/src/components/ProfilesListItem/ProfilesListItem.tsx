import React, { FC } from 'react';
import { IProfile } from '../../typings/types';
import { Typography, Divider, Chip } from '@mui/material';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';
import { ContentBox, ProfilesListItemBox, ProfilesListItemCard, SkillsBox, StyledAvatar, StyledCardContent, TypographyLink } from './ProfilesListItem.styled';

type Props = {
  profile: IProfile
}

const ProfileItem:FC<Props> = ({ profile }) => {
  const navigate = useNavigate();

  const { user, status, company, location, skills } = profile;
  const { firstName, lastName, avatar } = user;

  const fullName = `${firstName} ${lastName}`;

  return (
    <ProfilesListItemBox>
      <ProfilesListItemCard>
        <StyledAvatar
          src={avatar}
          alt={fullName}
        />

        <ContentBox>
          <StyledCardContent>
            <TypographyLink
              variant="h5"
              onClick={() => navigate(`${ROUTES.PROFILE}/${user._id}`)}
              color='primary'
            >
              {fullName}
            </TypographyLink>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {status} at {company}
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {location}
            </Typography>

            <Divider
              variant='middle'
              sx={{ my: 2 }}
            />

            <SkillsBox>
              {skills.map(skill =>
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  color='primary'
                />
              )}
            </SkillsBox>
          </StyledCardContent>
        </ContentBox>
      </ProfilesListItemCard>
    </ProfilesListItemBox>
  );
};

export default ProfileItem;
