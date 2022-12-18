import React from 'react';

import { FooterWrap, Nav, NavItem, Copyright } from './Footer.style';

function Footer() {
  const TODAY = new Date();
  const YEAR = TODAY.getFullYear();

  return (
    <FooterWrap>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/category">Category</NavItem>
      </Nav>
      <Copyright>
        © {YEAR} 문현준
        <span>
          &nbsp;Powered by&nbsp;
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Gatsby"
          >
            Gatsby
          </a>
        </span>
      </Copyright>
    </FooterWrap>
  );
}

export default Footer;
