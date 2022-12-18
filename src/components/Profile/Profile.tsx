import React from 'react';

import { ProfileWrap } from './Profile.style';

import ProfileImg from './ProfileImg';
import Description from './Description';

function Profile({ padding }: { padding: string }) {
  return (
    <ProfileWrap padding={padding}>
      <Description />
      <ProfileImg />
    </ProfileWrap>
  );
}

export default Profile;
