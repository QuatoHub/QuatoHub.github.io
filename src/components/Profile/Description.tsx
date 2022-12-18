import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ReactRotatingText = require('react-rotating-text');

import { DescriptionWrap } from './Description.style';

function Description() {
  return (
    <DescriptionWrap>
      <div className="introduction">
        <p className="title">
          안녕하세요
          <br />
          <ReactRotatingText
            items={['기록을 좋아하는', '배움을 즐기는', '이로운 것을 만드는']}
          />
          <br />
          개발자 <strong>문현준</strong>입니다.
        </p>
        <div className="social-links">
          <a href="mailto:hyeonjun5256@gmail.com" aria-label="Mail">
            <EmailIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/quatoHub"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/hyeonjun-moon-19777b218/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Linktree"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>
    </DescriptionWrap>
  );
}

export default Description;
