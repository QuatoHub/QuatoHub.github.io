import React from 'react';

import { ContactWrap, ContactIcon } from './Contact.style';

import { SiGmail, SiGithub, SiLinktree } from 'react-icons/si';

function Contact() {
  return (
    <ContactWrap>
      <ContactIcon>
        <a href="mailto:hyeonjun5256@gmail.com" aria-label="Mail">
          <SiGmail />
        </a>
      </ContactIcon>
      <ContactIcon>
        <a
          href="https://github.com/quatoHub"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github"
        >
          <SiGithub />
        </a>
      </ContactIcon>
      <ContactIcon>
      <a
          href="https://linktr.ee/quatohub"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Linktr"
        >
          <SiLinktree />
        </a>
      </ContactIcon>
    </ContactWrap>
  );
}

export default Contact;
