import React from 'react';

import { IntroWrap, Intro, Greet, Info, Name } from './Introduce.style';

import ProfileImg from 'components/Profile/ProfileImg';
import Contact from 'domains/about/Contact';

function Introduce() {
  return (
    <>
      <IntroWrap>
        <Intro>
          <Greet>안녕하세요.</Greet>
          <Info>
            개발자 <Name>문현준</Name>입니다.
          </Info>
        </Intro>
        <ProfileImg />
      </IntroWrap>
      <Contact />
    </>
  );
}

export default Introduce;
